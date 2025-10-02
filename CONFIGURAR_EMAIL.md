# 📧 Configurar Email para Envío Real

## ⚠️ Error Actual:
```
Invalid login: Username and Password not accepted
```

Las credenciales en `.env` son de ejemplo y no funcionan.

---

## ✅ Solución en 3 Pasos:

### 1️⃣ Obtener Contraseña de Aplicación Gmail

1. Ve a: https://myaccount.google.com/apppasswords
2. Si no está activada, activa la verificación en 2 pasos
3. Click en "Crear contraseña de aplicación"
4. Selecciona:
   - **App:** Correo
   - **Dispositivo:** Otro → escribe "Ford Backend"
5. Google te mostrará una contraseña de 16 caracteres: `abcd efgh ijkl mnop`
6. **Cópiala** (sin espacios)

### 2️⃣ Editar el archivo .env

```bash
nano .env
```

Reemplazá con tus datos reales:
```env
SMTP_USER=tu_email@gmail.com
SMTP_PASS=abcdefghijklmnop
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

> **Nota:** La contraseña debe ser de 16 caracteres SIN ESPACIOS

### 3️⃣ Reiniciar el Backend

```bash
docker-compose restart backend
```

---

## 🧪 Probar de Nuevo

1. Refrescá el navegador: http://localhost:5173
2. Completá un formulario y envialo
3. Verificá los logs:
```bash
docker-compose logs -f backend
```

Deberías ver:
```
✅ Configuración SMTP verificada
📧 Enviando email ADF XML a Tecnom...
📤 Destinatario: wc+autospecial_web@tecnom.cloud
✅ Email ADF XML enviado exitosamente a Tecnom
🆔 Message ID: <...@gmail.com>
```

---

## 💡 Modo Prueba (Sin Email Real)

Si solo querés probar la conexión frontend-backend sin enviar emails reales, podés dejarlo así. El formulario se enviará pero fallará en el paso del email.

Para ver que el resto funciona, mirá los logs del backend cuando envíes el form.

