# 🔧 Configuración del Proyecto Ford

## 🎯 Cómo alternar entre Desarrollo Local y Producción

Para cambiar entre **localhost** y **test.autospecial.com.ar**, simplemente edita el archivo `backend/config.js`:

### 📍 Para DESARROLLO LOCAL (localhost):
```javascript
// DESARROLLO LOCAL (descomenta para localhost):
const DEVELOPMENT_CONFIG = {
  FRONTEND_URL: 'http://localhost:5173',
  NODE_ENV: 'development',
  CORS_ORIGIN: ['http://localhost:5173', 'http://localhost:3000']
};

// PRODUCCIÓN (descomenta para test.autospecial.com.ar):
// const PRODUCTION_CONFIG = {
//   FRONTEND_URL: 'https://test.autospecial.com.ar',
//   NODE_ENV: 'production', 
//   CORS_ORIGIN: ['https://test.autospecial.com.ar']
// };
```

### 🌐 Para PRODUCCIÓN (test.autospecial.com.ar):
```javascript
// DESARROLLO LOCAL (descomenta para localhost):
// const DEVELOPMENT_CONFIG = {
//   FRONTEND_URL: 'http://localhost:5173',
//   NODE_ENV: 'development',
//   CORS_ORIGIN: ['http://localhost:5173', 'http://localhost:3000']
// };

// PRODUCCIÓN (descomenta para test.autospecial.com.ar):
const PRODUCTION_CONFIG = {
  FRONTEND_URL: 'https://test.autospecial.com.ar',
  NODE_ENV: 'production', 
  CORS_ORIGIN: ['https://test.autospecial.com.ar']
};
```

## 🚀 Scripts disponibles

### Desarrollo local completo (Frontend + Backend):
```bash
npm run dev:full
```

### Solo Frontend:
```bash
npm run dev
```

### Solo Backend:
```bash
npm run start:backend
```

### Build para producción:
```bash
npm run build:prod
```

## 📁 Estructura del proyecto

```
ford/
├── frontend/              # Aplicación React
│   ├── src/
│   ├── vite.config.js    # Configuración con proxy para desarrollo
│   └── package.json
├── backend/              # Servidor Express
│   ├── config.js         # 🔧 ARCHIVO PRINCIPAL PARA ALTERNAR AMBIENTES
│   ├── server.js
│   └── package.json
└── nginx.conf           # (Ya no es necesario para desarrollo local)
```

## ⚡ Proceso de desarrollo recomendado

1. **Para desarrollo local**: 
   - Edita `backend/config.js` y deja solo `DEVELOPMENT_CONFIG` descomentado
   - Ejecuta `npm run dev:full`
   - Ve a `http://localhost:5173`

2. **Para producción**: 
   - Edita `backend/config.js` y descomenta `PRODUCTION_CONFIG`, comenta `DEVELOPMENT_CONFIG`
   - Ejecuta `npm run build:prod`
   - Despliega los archivos generados en `dist/`

## 🌐 Configuración del Frontend

### ✅ **El frontend funciona automáticamente** en ambos ambientes

**No necesitas hacer NADA en el frontend** para alternar entre desarrollo y producción:

- **Desarrollo local**: Vite proxy redirige automáticamente `/api/*` → `http://localhost:3001`
- **Producción**: Nginx sirve `/api/*` desde el mismo dominio

### 📱 URLs que maneja el frontend:

```javascript
// En desarrollo local:
/api/contact → http://localhost:5173/api/contact → proxy → http://localhost:3001/api/contact

// En producción:
/api/contact → https://test.autospecial.com.ar/api/contact
```

### 🔧 Configuración adicional (opcional):

Si necesitas URLs específicas, edita `src/config/api.js` (similar al backend).

## 🔍 Verificación

El backend mostrará en consola la configuración cargada:
```
🔧 Configuración cargada:
📍 Entorno: development (o production)
🌐 Frontend URL: http://localhost:5173 (o https://test.autospecial.com.ar)
🔗 CORS Origins: [...] 
``` 