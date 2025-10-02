# 🚀 Guía Rápida - Docker Backend Ford

## 1️⃣ Configuración Inicial (solo una vez)

### Crear archivo de configuración del backend:

```bash
cd backend
cat > .env << EOF
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_password_aplicacion_16_caracteres
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
EOF
```

⚠️ **Importante:** Reemplaza con tus credenciales reales.

### Cómo obtener la contraseña de aplicación de Gmail:
1. https://myaccount.google.com/security
2. Activar verificación en 2 pasos
3. Buscar "Contraseñas de aplicaciones"
4. Generar para "Correo" → "Otro"
5. Copiar la contraseña de 16 caracteres

---

## 2️⃣ Iniciar el Proyecto

```bash
# Desde la raíz del proyecto ford/
docker-compose up
```

Esto levantará:
- ✅ **Backend** en http://localhost:3001
- ✅ **Frontend** en http://localhost:5173

---

## 3️⃣ Probar el Backend

### Opción A: Usar el script de prueba

```bash
./test-backend.sh
```

### Opción B: Manualmente con curl

```bash
# Health check
curl http://localhost:3001/api/health

# Enviar formulario de prueba
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test Docker",
    "email": "test@example.com",
    "telefono": "1122334455",
    "provincia": "Buenos Aires",
    "mensaje": "Prueba desde Docker",
    "origen": "WEB AUTOSPECIAL",
    "suborigen": "Prueba"
  }'
```

---

## 4️⃣ Ver Logs

```bash
# Ver logs del backend
docker-compose logs -f backend

# Ver logs del frontend
docker-compose logs -f frontend

# Ver todos los logs
docker-compose logs -f
```

---

## 5️⃣ Detener

```bash
# Detener todo
docker-compose down

# Detener y limpiar volúmenes
docker-compose down -v
```

---

## ❓ Solución de Problemas

### El backend no inicia:
```bash
# Ver logs de error
docker-compose logs backend

# Verificar que el .env existe
ls -la backend/.env
```

### Puerto en uso:
```bash
# Ver qué usa el puerto 3001
lsof -i :3001

# Cambiar el puerto en docker-compose.yml:
ports:
  - "3002:3001"  # Ahora usará 3002
```

### No se envían emails:
1. Verifica las credenciales en `backend/.env`
2. Usa una contraseña de aplicación de Gmail
3. Revisa los logs: `docker-compose logs backend`

---

## 📊 Verificar que Todo Funciona

1. ✅ Backend responde: `curl http://localhost:3001/api/health`
2. ✅ Frontend carga: http://localhost:5173
3. ✅ Email de prueba se envía sin errores
4. ✅ Logs muestran: `✅ Email ADF XML enviado exitosamente a Tecnom`

---

## 🎯 Comandos Más Usados

```bash
# Iniciar
docker-compose up -d

# Ver estado
docker-compose ps

# Logs en tiempo real
docker-compose logs -f

# Reiniciar solo backend
docker-compose restart backend

# Detener
docker-compose down

# Probar backend
./test-backend.sh
```

