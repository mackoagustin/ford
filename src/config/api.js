// Configuración de API para el Frontend Ford
// ==========================================
// El frontend ya funciona automáticamente en ambos ambientes usando rutas relativas.
// Esta configuración adicional es opcional y solo se usa si necesitas URLs específicas.

// 🔧 CONFIGURACIÓN AUTOMÁTICA (RECOMENDADA)
// =========================================
// Para desarrollo: Vite proxy redirige /api/* a http://localhost:3001
// Para producción: Nginx sirve /api/* desde el mismo dominio
export const API_CONFIG = {
  // Usar rutas relativas (funciona automáticamente)
  BASE_URL: '/api',
  ENDPOINTS: {
    CONTACT: '/api/contact',
    HEALTH: '/api/health'
  }
};

// 🛠️ CONFIGURACIÓN MANUAL (OPCIONAL)
// ===================================
// Solo descomenta si necesitas URLs específicas:

// Para DESARROLLO LOCAL:
// export const API_CONFIG = {
//   BASE_URL: 'http://localhost:3001/api',
//   ENDPOINTS: {
//     CONTACT: 'http://localhost:3001/api/contact',
//     HEALTH: 'http://localhost:3001/api/health'
//   }
// };

// Para PRODUCCIÓN:
// export const API_CONFIG = {
//   BASE_URL: 'https://test.autospecial.com.ar/api',
//   ENDPOINTS: {
//     CONTACT: 'https://test.autospecial.com.ar/api/contact',
//     HEALTH: 'https://test.autospecial.com.ar/api/health'
//   }
// };

// Función para obtener la URL base de la API
export const getApiUrl = (endpoint = '') => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export default API_CONFIG; 