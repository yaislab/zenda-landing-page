import { useState, useEffect } from 'react';
import { MARKET_RATES, API_CONFIG, API_ENDPOINTS, isValidPrice, calculateBOBPrice } from '@/config/marketRates';

interface ExchangeRateData {
  rate: number;
  lastUpdated: string;
  source: string;
  isLoading: boolean;
  error: string | null;
}

const useExchangeRate = () => {
  const [data, setData] = useState<ExchangeRateData>({
    rate: MARKET_RATES.current,
    lastUpdated: new Date().toISOString(),
    source: 'Mercado Paralelo Bolivia',
    isLoading: true,
    error: null
  });

  const fetchExchangeRate = async () => {
    setData(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      let successfulRate = null;
      let sourceName = '';

      // Intentar múltiples APIs para obtener el precio de USDT
      for (const endpoint of API_ENDPOINTS) {
        try {
          const response = await fetch(endpoint.url, {
            method: 'GET',
            headers: API_CONFIG.headers
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const result = await response.json();
          
          let usdtPrice = 1.0; // Precio por defecto de USDT
          
          // Procesar diferentes formatos de respuesta según la API
          if (endpoint.name === 'CoinGecko') {
            // CoinGecko API: {"tether":{"usd":0.999798}}
            if (result.tether && result.tether.usd) {
              usdtPrice = result.tether.usd;
              sourceName = 'CoinGecko + Mercado Paralelo';
            }
          } else if (endpoint.name === 'CoinCap') {
            // CoinCap API: {"data":{"priceUsd":"1.00",...}}
            if (result.data && result.data.priceUsd) {
              usdtPrice = parseFloat(result.data.priceUsd);
              sourceName = 'CoinCap + Mercado Paralelo';
            }
          } else if (endpoint.name === 'CryptoCompare') {
            // CryptoCompare API: {"USD":1.00}
            if (result.USD) {
              usdtPrice = result.USD;
              sourceName = 'CryptoCompare + Mercado Paralelo';
            }
          } else if (endpoint.name === 'Binance') {
            // Binance API: {"symbol":"USDTUSD","price":"1.0000"}
            if (result.symbol === 'USDTUSD' && result.price) {
              usdtPrice = parseFloat(result.price);
              sourceName = 'Binance + Mercado Paralelo';
            }
          }
          
          // Validar que el precio de USDT sea razonable (cerca de 1 USD)
          if (usdtPrice >= 0.95 && usdtPrice <= 1.05) {
            // Convertir a BOB usando el precio del mercado paralelo
            const bobRate = calculateBOBPrice(usdtPrice);
            
            // Validar que el resultado esté en el rango esperado
            if (isValidPrice(bobRate)) {
              successfulRate = bobRate;
              break; // Usar esta tasa si es válida
            } else {
              console.warn(`Tasa calculada fuera de rango: ${bobRate} BOB`);
            }
          } else {
            console.warn(`Precio USDT fuera de rango: ${usdtPrice} USD`);
          }
          
        } catch (apiError) {
          console.warn(`API ${endpoint} falló:`, apiError);
          continue; // Intentar siguiente API
        }
      }
      
      // Si se obtuvo una tasa exitosa, usarla
      if (successfulRate !== null) {
        setData({
          rate: Math.round(successfulRate * 100) / 100, // Redondear a 2 decimales
          lastUpdated: new Date().toISOString(),
          source: sourceName,
          isLoading: false,
          error: null
        });
      } else {
        // Si todas las APIs fallan, usar valor de fallback
        console.warn('Todas las APIs fallaron, usando valor de fallback');
        setData({
          rate: MARKET_RATES.fallback,
          lastUpdated: new Date().toISOString(),
          source: 'Mercado Paralelo Bolivia (Fallback)',
          isLoading: false,
          error: 'Usando precio de referencia del mercado'
        });
      }
      
    } catch (error) {
      console.error('Error obteniendo cotización:', error);
      setData(prev => ({
        ...prev,
        isLoading: false,
        error: 'Error al obtener cotización en tiempo real'
      }));
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    
    // Actualizar según la configuración
    const interval = setInterval(fetchExchangeRate, API_CONFIG.updateInterval);
    
    return () => clearInterval(interval);
  }, []);

  const refreshRate = () => {
    fetchExchangeRate();
  };

  return {
    ...data,
    refreshRate
  };
};

export default useExchangeRate; 