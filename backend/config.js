// Configuración del Backend Ford
// ================================
// Para alternar entre DESARROLLO y PRODUCCIÓN, comenta/descomenta la línea correspondiente:

// DESARROLLO LOCAL (comentar para producción):
// const DEVELOPMENT_CONFIG = {
//   FRONTEND_URL: 'http://localhost:5173',
//   NODE_ENV: 'development',
//   CORS_ORIGIN: ['http://localhost:5173', 'http://localhost:3000']
// };

// PRODUCCIÓN (descomentar para producción):
const PRODUCTION_CONFIG = {
  FRONTEND_URL: 'https://autospecial.com.ar',
  NODE_ENV: 'production', 
  CORS_ORIGIN: ['https://autospecial.com.ar', 'https://www.autospecial.com.ar']
};

// ================================
// NO MODIFICAR DEBAJO DE ESTA LÍNEA
// ================================

// Determinar qué configuración usar
export const config = typeof PRODUCTION_CONFIG !== 'undefined' ? PRODUCTION_CONFIG : DEVELOPMENT_CONFIG;

// Valores por defecto
export const PORT = process.env.PORT || 3001;
export const FRONTEND_URL = process.env.FRONTEND_URL || config.FRONTEND_URL;
export const CORS_ORIGIN = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : config.CORS_ORIGIN;
export const NODE_ENV = process.env.NODE_ENV || config.NODE_ENV;

console.log('🔧 Configuración cargada:');
console.log('📍 Entorno:', NODE_ENV);
console.log('🌐 Frontend URL:', FRONTEND_URL);
console.log('🔗 CORS Origins:', CORS_ORIGIN); 