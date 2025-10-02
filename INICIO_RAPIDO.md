# ⚡ Inicio Rápido - Ford Project con Docker

## 🎯 En 3 Pasos

### 1. Configurar credenciales del backend

```bash
cd backend
cat > .env << 'EOF'
SMTP_USER=tu_email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
EOF
```

> **Nota:** Necesitas una [contraseña de aplicación de Gmail](https://support.google.com/accounts/answer/185833)

---

### 2. Iniciar con Docker

```bash
cd ..  # Volver a la raíz del proyecto
docker-compose up
```

Espera a ver estos mensajes:
```
✅ ford-backend-dev   | 🚀 Servidor corriendo en puerto 3001
✅ ford-frontend-dev  | VITE ready in XXX ms
✅ ford-frontend-dev  | ➜  Local:   http://localhost:5173/
```

---

### 3. Probar

**Frontend:** http://localhost:5173

**Backend (health check):**
```bash
curl http://localhost:3001/api/health
```

**Test completo:**
```bash
./test-backend.sh
```

---

## 🎉 ¡Listo!

Ahora puedes:
- Navegar a http://localhost:5173
- Completar cualquier formulario
- Los datos se enviarán a `wc+autospecial_web@tecnom.cloud` en formato ADF

---

## 📚 Documentación Completa

- **Guía detallada:** [DOCKER_SETUP.md](./DOCKER_SETUP.md)
- **Cambios ADF:** [CAMBIOS_FORMATO_ADF.md](./CAMBIOS_FORMATO_ADF.md)
- **Guía rápida:** [GUIA_RAPIDA_DOCKER.md](./GUIA_RAPIDA_DOCKER.md)

