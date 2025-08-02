# 🚀 Zenda Finance - Plataforma de Remesas con Blockchain

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC.svg)](https://tailwindcss.com/)

## 📋 Descripción del Proyecto

**Zenda Finance** es una plataforma web moderna diseñada para facilitar el envío de remesas desde Bolivia a cualquier parte del mundo utilizando tecnología blockchain y stablecoins. La plataforma combina la simplicidad de WhatsApp con la potencia de las criptomonedas para ofrecer un servicio de remesas más económico y eficiente.

### 🎯 Características Principales

- **💰 Tasas Competitivas**: ~13 BOB/USDT vs 6.96 BOB/USD oficial
- **⚡ Velocidad**: Transacciones en menos de 5 minutos
- **🌍 Disponibilidad**: Servicio 24/7 sin horarios bancarios
- **📱 Simplicidad**: Interfaz intuitiva y proceso guiado por WhatsApp
- **🔒 Seguridad**: Tecnología blockchain y cumplimiento KYC/AML

## 🏗️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Bundler y servidor de desarrollo
- **Tailwind CSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes de UI modernos
- **React Router DOM** - Enrutamiento de la aplicación
- **React Query** - Gestión de estado del servidor

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd zenda-finance-main
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:8080
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run lint         # Ejecutar linter
```

## 📁 Estructura del Proyecto

```
zenda-finance-main/
├── public/
│   ├── favicon.ico
│   ├── zenda-favicon.svg
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx      # Sección principal con CTA
│   │   ├── HowItWorks.tsx       # Proceso de 3 pasos
│   │   ├── ValueProposition.tsx # Propuesta de valor
│   │   ├── SocialImpact.tsx     # Impacto social
│   │   ├── Footer.tsx           # Pie de página
│   │   ├── ZendaLogo.tsx        # Logo SVG personalizado
│   │   └── ui/                  # Componentes reutilizables
│   ├── pages/
│   │   ├── Index.tsx            # Página principal
│   │   ├── PaymentPage.tsx      # Página de pago
│   │   └── NotFound.tsx         # Página 404
│   ├── assets/
│   │   └── zenda-hero.jpg       # Imagen de fondo
│   ├── App.tsx                  # Componente principal
│   ├── main.tsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── index.html                    # HTML principal
├── package.json                  # Dependencias y scripts
├── tailwind.config.ts           # Configuración de Tailwind
├── vite.config.ts               # Configuración de Vite
└── tsconfig.json                # Configuración de TypeScript
```

## 🎨 Características de Diseño

### Sistema de Colores
- **Primary**: Azul Cobalt (#0052CC)
- **Secondary**: Verde Lime (#00FF7F)
- **Gradientes**: Transiciones suaves entre colores
- **Glassmorphism**: Efectos de transparencia y blur

### Animaciones
- **Entrada escalonada**: Elementos aparecen secuencialmente
- **Hover effects**: Interacciones suaves y atractivas
- **Floating elements**: Elementos flotantes en el fondo
- **Money animations**: Efectos especiales para elementos financieros

## 📱 Funcionalidades

### Landing Page Principal
- **Hero Section**: Presentación del servicio con CTA
- **How It Works**: Proceso de 3 pasos explicado
- **Value Proposition**: Beneficios del servicio
- **Social Impact**: Comparativas y estadísticas
- **Footer**: Información de contacto

### Página de Pago
- **Métodos de pago**: QR y tarjeta de crédito/débito
- **Formularios**: Dirección y datos de tarjeta
- **Validación**: En tiempo real con feedback visual
- **Navegación**: Progreso de pasos con indicadores

### Características Especiales
- **Botón invisible**: Acceso directo a página de pago
- **Responsive design**: Optimizado para todos los dispositivos
- **Accesibilidad**: Navegación por teclado y screen readers
- **Performance**: Carga rápida y optimizada

## 🔧 Configuración de Desarrollo

### Variables de Entorno
```bash
# Crear archivo .env.local
VITE_API_URL=your_api_url_here
VITE_WHATSAPP_NUMBER=+59171234567
```

### Configuración de Tailwind
El proyecto incluye configuración personalizada para:
- Colores de marca
- Tipografías (Poppins, Montserrat, Inter)
- Animaciones personalizadas
- Componentes de UI

### Configuración de TypeScript
- Strict mode habilitado
- Path mapping configurado
- Configuración optimizada para React

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
```bash
npm run build
# Subir carpeta dist a Netlify
```

### Opción 3: GitHub Pages
```bash
npm run build
# Configurar GitHub Actions para deploy automático
```

### Opción 4: Servidor Tradicional
```bash
npm run build
# Servir carpeta dist con nginx/apache
```

## 📊 Métricas y KPIs

### Objetivos del Proyecto
- **Usuarios activos**: 10,000+ en el primer año
- **Volumen de transacciones**: $1M+ mensual
- **Satisfacción del usuario**: 95%+
- **Tiempo de transacción**: <5 minutos promedio

### KPIs Técnicos
- **Uptime**: 99.9%
- **Tiempo de carga**: <3 segundos
- **Tasa de conversión**: 15%+
- **Retención de usuarios**: 80%+

## 🤝 Contribución

### Guías de Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Usar TypeScript para todo el código
- Seguir las convenciones de ESLint
- Escribir tests para nuevas funcionalidades
- Documentar cambios importantes

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **WhatsApp**: +591 71234567
- **Email**: info@zenda.finance
- **Website**: https://zenda.finance

## 🙏 Agradecimientos

- Comunidad de React y TypeScript
- Equipo de Tailwind CSS
- Desarrolladores de shadcn/ui
- Contribuidores del proyecto

---

**Zenda Finance** - Revolucionando las remesas en Bolivia con tecnología blockchain 🚀
