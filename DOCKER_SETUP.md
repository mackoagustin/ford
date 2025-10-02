# 🐳 Docker Setup - Ford Project

Configuración completa para ejecutar el proyecto Ford con Docker (Frontend + Backend).

---

## 📋 Pre-requisitos

1. **Docker Desktop** instalado ([Descargar aquí](https://www.docker.com/products/docker-desktop/))
2. Tener las credenciales SMTP de Gmail listas

---

## ⚙️ Configuración Inicial

### 1. Configurar variables de entorno del Backend

Crear el archivo `/backend/.env` basándote en el ejemplo:

```bash
cd backend
cp .env.example .env
```

Editar `/backend/.env` con tus credenciales:

```env
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_password_de_aplicacion_gmail
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

#### 🔑 Cómo obtener una contraseña de aplicación de Gmail:

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Seguridad → Verificación en 2 pasos (debe estar activada)
3. Contraseñas de aplicaciones
4. Selecciona "Correo" y "Otro (nombre personalizado)"
5. Escribe "Ford Backend" y genera
6. Copia la contraseña de 16 caracteres (sin espacios)

---

## 🚀 Iniciar el Proyecto con Docker

### Opción 1: Iniciar todo (Frontend + Backend)

```bash
# Desde la raíz del proyecto
docker-compose up
```

Esto iniciará:
- **Frontend** en http://localhost:5173
- **Backend** en http://localhost:3001

### Opción 2: Iniciar en segundo plano

```bash
docker-compose up -d
```

### Opción 3: Rebuild (si hay cambios en Dockerfile)

```bash
docker-compose up --build
```

---

## 🧪 Probar el Backend

### 1. Verificar que el backend está corriendo

```bash
curl http://localhost:3001/api/health
```

Respuesta esperada:
```json
{
  "status": "OK",
  "timestamp": "2024-10-01T...",
  "uptime": 123.456
}
```

### 2. Probar envío de email (con curl)

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "telefono": "1122334455",
    "provincia": "Buenos Aires",
    "mensaje": "Prueba de formulario",
    "origen": "WEB AUTOSPECIAL",
    "suborigen": "Prueba Docker"
  }'
```

### 3. Ver logs del backend

```bash
docker-compose logs -f backend
```

### 4. Ver logs del frontend

```bash
docker-compose logs -f frontend
```

---

## 📂 Estructura de Contenedores

```
┌─────────────────────────────────────┐
│  Frontend Container                 │
│  - React + Vite                     │
│  - Port: 5173                       │
│  - Volume: monta el código local    │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  Backend Container                  │
│  - Node.js + Express                │
│  - Port: 3001                       │
│  - Volume: monta el código local    │
│  - Env: SMTP credentials            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  Gmail SMTP                         │
│  - smtp.gmail.com:587               │
└─────────────────────────────────────┘
```

---

## 🛠️ Comandos Útiles

### Ver contenedores corriendo
```bash
docker-compose ps
```

### Detener todo
```bash
docker-compose down
```

### Detener y eliminar volúmenes
```bash
docker-compose down -v
```

### Reiniciar solo el backend
```bash
docker-compose restart backend
```

### Entrar al contenedor del backend
```bash
docker exec -it ford-backend-dev sh
```

### Ver logs en tiempo real
```bash
docker-compose logs -f
```

---

## 🐛 Troubleshooting

### Problema: Puerto ya en uso

**Error:** `Bind for 0.0.0.0:3001 failed: port is already allocated`

**Solución:**
```bash
# Ver qué proceso usa el puerto
lsof -i :3001

# Matar el proceso
kill -9 <PID>

# O cambiar el puerto en docker-compose.yml
ports:
  - "3002:3001"  # Usa 3002 en tu máquina local
```

### Problema: No se pueden enviar emails

**Verificar:**
1. Las credenciales SMTP en `/backend/.env` son correctas
2. La cuenta de Gmail tiene verificación en 2 pasos activada
3. Usaste una contraseña de aplicación (no la contraseña normal)
4. Ver logs del backend: `docker-compose logs backend`

### Problema: Frontend no puede conectar al backend

**Verificar:**
1. Que CORS_ORIGIN en el backend incluya `http://localhost:5173`
2. Que el proxy en `vite.config.js` apunte a `http://backend:3001`
3. Reiniciar los contenedores: `docker-compose restart`

---

## 🔄 Desarrollo con Hot Reload

Ambos servicios tienen **hot reload** configurado:
- **Frontend:** Vite detecta cambios automáticamente
- **Backend:** Node con flag `--watch` (Node 18+)

Los cambios en tu código local se reflejan automáticamente en los contenedores.

---

## 📦 Producción

### Build para producción

```bash
# Build del frontend
docker build -t ford-frontend:latest .

# El backend usa el mismo Dockerfile en dev y prod
docker build -t ford-backend:latest ./backend
```

---

## 🧹 Limpieza

### Eliminar todo (contenedores, imágenes, volúmenes)

```bash
docker-compose down -v --rmi all
```

### Limpiar imágenes no usadas

```bash
docker system prune -a
```

---

## ✅ Checklist de Configuración

- [ ] Docker Desktop instalado y corriendo
- [ ] Archivo `/backend/.env` creado con credenciales SMTP
- [ ] Contraseña de aplicación de Gmail generada
- [ ] `docker-compose up` ejecutado sin errores
- [ ] Frontend accesible en http://localhost:5173
- [ ] Backend responde en http://localhost:3001/api/health
- [ ] Prueba de envío de email exitosa

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs: `docker-compose logs -f`
2. Verifica que los puertos no estén en uso
3. Asegúrate de que las credenciales SMTP sean correctas

