// Configuración de precios del mercado paralelo boliviano
// Actualizar estos valores según el precio real del mercado

export const MARKET_RATES = {
  // Precio actual del dólar paralelo en Bolivia (actualizado: 3 de agosto 2025)
  current: 13.86,
  
  // Rango de precios esperados para validación
  min: 13.50,     // Precio mínimo esperado
  max: 14.20,     // Precio máximo esperado
  
  // Precio de fallback si las APIs fallan
  fallback: 13.86,
  
  // Precio oficial del BCB para comparación
  official: 6.96,
  
  // Factor de diferencia entre oficial y paralelo
  get differenceFactor() {
    return this.current / this.official;
  },
  
  // Porcentaje de diferencia
  get differencePercentage() {
    return ((this.current - this.official) / this.official) * 100;
  }
};

// Configuración de APIs
export const API_CONFIG = {
  // Intervalo de actualización en milisegundos
  updateInterval: 2 * 60 * 1000, // 2 minutos
  
  // Timeout para requests
  timeout: 5000, // 5 segundos
  
  // Número máximo de reintentos
  maxRetries: 3,
  
  // Headers para requests
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'Zenda-Finance/1.0'
  }
};

// URLs de las APIs
export const API_ENDPOINTS = [
  {
    name: 'CoinGecko',
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd',
    format: 'tether.usd',
    limit: '10,000 requests/mes'
  },
  {
    name: 'CoinCap',
    url: 'https://api.coincap.io/v2/assets/tether',
    format: 'data.priceUsd',
    limit: 'Sin límite'
  },
  {
    name: 'CryptoCompare',
    url: 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD',
    format: 'USD',
    limit: '100,000 requests/mes'
  },
  {
    name: 'Binance',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=USDTUSD',
    format: 'price',
    limit: '1,200 requests/minuto'
  }
];

// Función para validar si un precio está en el rango esperado
export const isValidPrice = (price: number): boolean => {
  return price >= MARKET_RATES.min && price <= MARKET_RATES.max;
};

// Función para formatear el precio
export const formatPrice = (price: number): string => {
  return `~${price.toFixed(2)} BOB`;
};

// Función para obtener el precio calculado basado en USDT
export const calculateBOBPrice = (usdtPrice: number): number => {
  return usdtPrice * MARKET_RATES.current;
};

// Función para obtener la diferencia con el precio oficial
export const getOfficialDifference = (currentPrice: number): {
  difference: number;
  percentage: number;
} => {
  const difference = currentPrice - MARKET_RATES.official;
  const percentage = (difference / MARKET_RATES.official) * 100;
  
  return {
    difference: Math.round(difference * 100) / 100,
    percentage: Math.round(percentage * 100) / 100
  };
}; 