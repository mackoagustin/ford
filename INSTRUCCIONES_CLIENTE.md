# 📧 Instrucciones para Configurar el Envío de Emails

## ⚠️ IMPORTANTE - DEBE CONFIGURAR EL CLIENTE

Este proyecto está **completamente funcional** excepto por las credenciales SMTP, que deben ser proporcionadas por **Auto Special** o el responsable del proyecto.

---

## 🔐 Credenciales Requeridas

El cliente necesita proporcionar:

1. **Email corporativo** (ejemplo: `contacto@autospecial.com.ar`)
2. **Contraseña de aplicación de Gmail** (16 caracteres)

---

## 📝 Cómo Obtener las Credenciales (Para el Cliente)

### Paso 1: Usar la Cuenta Correcta
- Si Auto Special tiene email `@autospecial.com.ar` → usar esa cuenta
- Si usan Gmail corporativo → usar esa cuenta
- Si no tienen → crear una cuenta Gmail para el proyecto

### Paso 2: Activar Verificación en 2 Pasos
1. Ir a: https://myaccount.google.com/security
2. Activar "Verificación en 2 pasos"

### Paso 3: Generar Contraseña de Aplicación
1. Ir a: https://myaccount.google.com/apppasswords
2. Seleccionar:
   - **App:** Correo
   - **Dispositivo:** Otro → "Ford Website"
3. Click en "Generar"
4. Copiar la contraseña de 16 caracteres (sin espacios)

---

## ⚙️ Configuración en Servidor

### Archivo a Editar: `.env`

**Ubicación:**
- Si es desarrollo local: `/backend/.env` y `/.env`
- Si es Docker: `/.env` (raíz del proyecto)
- Si es servidor: donde esté desplegado el backend

**Contenido:**
```env
SMTP_USER=email_del_cliente@gmail.com
SMTP_PASS=contraseña_16_caracteres
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

**Ejemplo real:**
```env
SMTP_USER=contacto@autospecial.com.ar
SMTP_PASS=abcdefghijklmnop
PORT=3001
CORS_ORIGIN=https://autospecial.com.ar,https://www.autospecial.com.ar
```

---

## 🔄 Reiniciar Servicios

### Si usa Docker:
```bash
docker-compose restart backend
```

### Si usa PM2:
```bash
pm2 restart backend
```

### Si usa Node directamente:
```bash
# Detener el proceso
# Iniciar de nuevo con: npm start
```

---

## ✅ Verificar que Funciona

### Prueba 1: Health Check
```bash
curl http://localhost:3001/api/health
```

Debe responder:
```json
{
  "status": "OK",
  "timestamp": "...",
  "uptime": 123.45
}
```

### Prueba 2: Enviar Formulario de Prueba

1. Abrir el sitio web
2. Ir a cualquier formulario (Test Drive, Repuestos, etc.)
3. Completar con datos de prueba
4. Enviar

### Prueba 3: Ver Logs

```bash
# Si usa Docker:
docker-compose logs -f backend

# Si usa PM2:
pm2 logs backend

# Si usa Node:
# Ver consola donde corre el proceso
```

**Debe ver:**
```
✅ Configuración SMTP verificada
📧 Enviando email ADF XML a Tecnom...
📤 Destinatario: wc+autospecial_web@tecnom.cloud
✅ Email ADF XML enviado exitosamente a Tecnom
🆔 Message ID: <...@gmail.com>
```

**NO debe ver:**
```
❌ Error: Invalid login
❌ BadCredentials
```

---

## 🚨 Si Hay Errores

### Error: "Invalid login" o "BadCredentials"
- ✅ Verificar que el email sea correcto
- ✅ Verificar que la contraseña sea de aplicación (16 caracteres)
- ✅ NO usar la contraseña normal de Gmail
- ✅ Verificar que la verificación en 2 pasos esté activada

### Error: "Connection refused"
- ✅ Verificar firewall del servidor
- ✅ Puerto 587 debe estar abierto para SMTP
- ✅ Verificar conexión a internet

---

## 📊 Estado Actual del Proyecto

| Componente | Estado |
|------------|--------|
| Frontend | ✅ Funciona |
| Backend | ✅ Funciona |
| Conexión Frontend-Backend | ✅ Funciona |
| Formato ADF XML | ✅ Implementado (estándar oficial 1.0) |
| Integración SMTP | ⏳ **Requiere credenciales del cliente** |
| Destinatario Email | ✅ Configurado (`wc+autospecial_web@tecnom.cloud`) |

---

## 📧 Destinatario de los Emails

Los formularios se envían a: **wc+autospecial_web@tecnom.cloud**

Esto está configurado en: `backend/services/emailToTecnomService.js` línea 37

---

## 🎯 Formato de los Datos Enviados

Los emails se envían en formato **ADF XML 1.0** (estándar de la industria automotriz).

**Incluye:**
- Datos del cliente (nombre, email, teléfono, provincia)
- Datos del vehículo (si aplica)
- **Origen:** "WEB AUTOSPECIAL"
- **Suborigen:** Según la página (Test Drive, Repuestos, Ford Credit, etc.)

---

## 📞 Contacto para Dudas

Si hay problemas con la configuración, contactar al desarrollador del proyecto.

**Archivos de documentación incluidos:**
- `README.md` - Documentación general
- `DOCKER_SETUP.md` - Setup con Docker
- `PRUEBA_RAPIDA.md` - Guía de pruebas
- `CAMBIOS_FORMATO_ADF.md` - Cambios en formato ADF

