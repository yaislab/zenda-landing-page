import { RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';
import useExchangeRate from '@/hooks/useExchangeRate';

interface DynamicExchangeRateProps {
  className?: string;
  showDetails?: boolean;
  variant?: 'hero' | 'social' | 'value';
}

const DynamicExchangeRate = ({ 
  className = '', 
  showDetails = false, 
  variant = 'hero' 
}: DynamicExchangeRateProps) => {
  const { rate, isLoading, error, lastUpdated, refreshRate } = useExchangeRate();

  const formatRate = (value: number) => {
    return `~${value.toFixed(2)} BOB`;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary';
      case 'social':
        return 'text-2xl sm:text-3xl font-bold text-secondary';
      case 'value':
        return 'text-xl sm:text-2xl font-bold text-secondary';
      default:
        return 'text-2xl sm:text-3xl md:text-4xl font-bold text-secondary';
    }
  };

  const getTrendIcon = () => {
    // Simular tendencia basada en el último dígito del rate
    const lastDigit = Math.floor(rate * 100) % 10;
    if (lastDigit > 5) {
      return <TrendingUp className="w-4 h-4 text-green-400 ml-2" />;
    } else if (lastDigit < 5) {
      return <TrendingDown className="w-4 h-4 text-red-400 ml-2" />;
    }
    return null;
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center">
        <div className={`${getVariantStyles()} transition-all duration-500 ${
          isLoading ? 'animate-pulse' : 'animate-money-bounce'
        }`}>
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-6 h-6 animate-spin" />
              <span>Cargando...</span>
            </div>
          ) : error ? (
            <div className="flex items-center space-x-2">
              <span>{formatRate(13.0)}</span>
              <span className="text-xs text-red-400">(offline)</span>
            </div>
          ) : (
            <div className="flex items-center">
              <span>{formatRate(rate)}</span>
              {getTrendIcon()}
            </div>
          )}
        </div>
        
        {!isLoading && !error && (
          <button
            onClick={refreshRate}
            className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
            title="Actualizar cotización"
          >
            <RefreshCw className="w-4 h-4 text-secondary/60 hover:text-secondary transition-colors" />
          </button>
        )}
      </div>

      {showDetails && (
        <div className="mt-2 text-xs text-white/60 text-center">
          <div>Última actualización: {new Date(lastUpdated).toLocaleTimeString()}</div>
          <div className="text-xs">Fuente: {error ? 'Zenda' : 'API en tiempo real'}</div>
        </div>
      )}

      {/* Indicador de actualización en tiempo real */}
      {!isLoading && !error && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default DynamicExchangeRate; 