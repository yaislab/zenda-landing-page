# 💰 Guía de Actualización de Precios - Zenda Finance

## 🎯 Propósito
Esta guía explica cómo actualizar los precios del dólar paralelo en Bolivia para mantener la cotización dinámica actualizada y precisa.

## 📍 Archivo de Configuración
**Ubicación**: `src/config/marketRates.ts`

## 🔧 Cómo Actualizar los Precios

### 1. **Precio Actual del Mercado Paralelo**
```typescript
export const MARKET_RATES = {
  current: 13.86, // ← ACTUALIZAR AQUÍ
  // ...
};
```

### 2. **Rango de Validación**
```typescript
export const MARKET_RATES = {
  // ...
  min: 13.50,     // ← Precio mínimo esperado
  max: 14.20,     // ← Precio máximo esperado
  // ...
};
```

### 3. **Precio de Fallback**
```typescript
export const MARKET_RATES = {
  // ...
  fallback: 13.86, // ← Mismo valor que current
  // ...
};
```

## 📊 Fuentes Confiables para Verificar Precios

### 1. **Binance Bolivia**
- **URL**: https://www.binance.com/es
- **Par**: USDT/BOB
- **Actualización**: Tiempo real

### 2. **Grupos de WhatsApp de Cambio**
- **Grupos**: "Cambio Bolivia", "Dólar Paralelo Bolivia"
- **Actualización**: Cada hora aproximadamente

### 3. **Páginas Web de Cambio**
- **Sitios**: Cambio Bolivia, Dólar Hoy Bolivia
- **Actualización**: Cada 30 minutos

### 4. **APIs de Criptomonedas**
- **CoinGecko**: https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd
- **Binance**: https://api.binance.com/api/v3/ticker/price?symbol=USDTUSD

## 🔄 Proceso de Actualización

### Paso 1: Verificar Precio Actual
1. Consultar Binance Bolivia
2. Verificar grupos de WhatsApp
3. Confirmar con múltiples fuentes

### Paso 2: Actualizar Configuración
1. Abrir `src/config/marketRates.ts`
2. Actualizar `current` con el nuevo precio
3. Ajustar `min` y `max` según el rango esperado
4. Actualizar `fallback` con el mismo valor

### Paso 3: Probar Cambios
```bash
npm run build
npm run dev
```

### Paso 4: Verificar Funcionamiento
1. Abrir la aplicación en el navegador
2. Verificar que la cotización se muestre correctamente
3. Probar el botón de actualización manual

## 📈 Ejemplo de Actualización

### Antes (3 de agosto 2025):
```typescript
export const MARKET_RATES = {
  current: 13.86,
  min: 13.50,
  max: 14.20,
  fallback: 13.86,
  // ...
};
```

### Después (nuevo precio):
```typescript
export const MARKET_RATES = {
  current: 14.25,  // ← Nuevo precio
  min: 13.80,      // ← Ajustado
  max: 14.50,      // ← Ajustado
  fallback: 14.25, // ← Actualizado
  // ...
};
```

## ⚠️ Consideraciones Importantes

### 1. **Validación de Rango**
- El precio debe estar entre `min` y `max`
- Si está fuera del rango, se usa el `fallback`
- Ajustar el rango según la volatilidad del mercado

### 2. **Frecuencia de Actualización**
- **Recomendado**: Cada 2-4 horas
- **Máximo**: Una vez al día
- **Mínimo**: Cuando haya cambios significativos

### 3. **Fuentes Múltiples**
- Siempre verificar con al menos 2 fuentes
- Priorizar Binance y grupos de WhatsApp
- Confirmar antes de actualizar

### 4. **Backup de Configuración**
- Guardar copia de la configuración anterior
- Documentar cambios importantes
- Mantener historial de precios

## 🚨 Casos Especiales

### 1. **Mercado Muy Volátil**
```typescript
// Ampliar el rango de validación
min: 13.00,  // Más bajo
max: 15.00,  // Más alto
```

### 2. **APIs No Disponibles**
```typescript
// Usar solo fallback
fallback: 14.25, // Precio manual
```

### 3. **Cambios Bruscos**
- Verificar si es un error de API
- Confirmar con múltiples fuentes
- Considerar usar precio manual temporal

## 📱 Verificación en la Aplicación

### 1. **HeroSection**
- Cotización principal en la parte superior
- Debe mostrar el precio actualizado

### 2. **SocialImpact**
- Comparación con mercado oficial
- Debe reflejar la diferencia actual

### 3. **ValueProposition**
- Sección "Cotización en Tiempo Real"
- Muestra detalles de la fuente

## 🔍 Troubleshooting

### Problema: Precio no se actualiza
**Solución**:
1. Verificar que las APIs funcionen
2. Revisar la consola del navegador
3. Probar el botón de actualización manual

### Problema: Precio fuera de rango
**Solución**:
1. Ajustar `min` y `max` en la configuración
2. Verificar si el precio es correcto
3. Considerar usar `fallback`

### Problema: Error en las APIs
**Solución**:
1. Verificar conexión a internet
2. Revisar límites de API
3. Usar precio de `fallback`

## 📞 Contacto para Dudas

Si tienes dudas sobre la actualización de precios:
- **Desarrollador**: Revisar código en `src/hooks/useExchangeRate.ts`
- **Documentación**: Ver `EXCHANGE_RATE_DOCUMENTATION.md`
- **Configuración**: Editar `src/config/marketRates.ts`

---

*Última actualización: 3 de agosto 2025*
*Precio actual: 13.86 BOB/USDT* 