# 🚀 Instrucciones de Despliegue - Proyecto Ford

## ✅ **¡Tu proyecto está listo para producción!**

### 📁 **Archivos generados para despliegue:**

```
ford/
├── dist/                    # 📱 Frontend buildeado (subir a servidor web)
│   ├── index.html
│   ├── assets/
│   └── ...
├── backend/                 # 🔧 Backend (subir a servidor Node.js)
│   ├── server.js
│   ├── config.js           # ✅ Ya configurado para producción
│   ├── package.json
│   ├── services/
│   ├── middleware/
│   └── utils/
├── nginx.conf              # 🌐 Configuración de servidor web
└── docker-compose.yml      # 🐳 (Opcional) Para Docker
```

## 🌐 **Pasos para desplegar:**

### 1️⃣ **Frontend (Carpeta `dist/`)**
```bash
# Los archivos ya están buildeados en la carpeta dist/
# Sube toda la carpeta dist/ a tu servidor web (Apache, Nginx, etc.)
```

### 2️⃣ **Backend (Carpeta `backend/`)**
```bash
# Sube la carpeta backend/ completa a tu servidor Node.js
# En el servidor, ejecuta:
cd backend
npm install --production
npm start
```

### 3️⃣ **Configuración del servidor web (Nginx)**
```bash
# Usa el archivo nginx.conf incluido en el proyecto
# Copia el contenido a tu configuración de Nginx
```

## 🔧 **Configuración actual:**

### ✅ **Backend configurado para:**
- **URL del frontend**: `https://test.autospecial.com.ar`
- **CORS habilitado para**: `https://test.autospecial.com.ar`
- **Puerto**: `3001`

### ✅ **Frontend configurado para:**
- **Rutas de API**: `/api/*` (se resuelven automáticamente al dominio)
- **Build optimizado**: Archivos minificados en `dist/`

## 🐳 **Opción alternativa: Docker**

Si prefieres usar Docker:
```bash
# El proyecto incluye docker-compose.yml
docker-compose up -d
```

## 🔍 **Verificación post-despliegue:**

1. **Frontend**: Ve a `https://test.autospecial.com.ar`
2. **Backend**: Ve a `https://test.autospecial.com.ar/api/health`
3. **Formularios**: Prueba enviar un formulario

## 📋 **Checklist de despliegue:**

- [x] ✅ Backend configurado para producción (`backend/config.js`)
- [x] ✅ Frontend buildeado (`dist/` generado)
- [x] ✅ Dependencias de producción instaladas
- [x] ✅ Nginx configurado (`nginx.conf`)
- [ ] 🔄 Subir `dist/` al servidor web
- [ ] 🔄 Subir `backend/` al servidor Node.js
- [ ] 🔄 Configurar Nginx con el archivo incluido
- [ ] 🔄 Verificar que el backend esté corriendo en puerto 3001

## 🚨 **Importante:**

- **NO subas** `node_modules/` (se reinstala automáticamente)
- **NO subas** archivos de desarrollo (`.git`, `src/`, etc.)
- **Asegúrate** de que el servidor tenga Node.js instalado
- **Configura** las variables de entorno si es necesario

## 🎯 **Resumen:**

Tu proyecto está **100% listo para producción**. Solo necesitas:
1. Subir `dist/` → servidor web
2. Subir `backend/` → servidor Node.js  
3. Aplicar `nginx.conf` → configuración del servidor

¡Listo para despegar! 🚀 