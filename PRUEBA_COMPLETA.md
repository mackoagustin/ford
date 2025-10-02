# 🧪 Prueba Completa: Frontend → Backend → Email

## 📋 Checklist Pre-vuelo

Antes de empezar, verifica:
- [ ] Docker Desktop está corriendo
- [ ] Tienes una contraseña de aplicación de Gmail lista
- [ ] El archivo `backend/.env` existe

---

## 🚀 Paso 1: Configurar Credenciales

### Edita el archivo `backend/.env`:

```bash
nano backend/.env
```

**Contenido del archivo:**
```env
SMTP_USER=tu_email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

> 💡 **Contraseña de aplicación Gmail:**
> - Ve a: https://myaccount.google.com/apppasswords
> - Crea una nueva: "Correo" → "Ford Backend"
> - Copia los 16 caracteres (ejemplo: `abcd efgh ijkl mnop`)

---

## 🏗️ Paso 2: Build y Levantar Todo

```bash
# Opción A: Build limpio desde cero (recomendado primera vez)
./rebuild.sh

# Opción B: Build normal
docker-compose up --build
```

Espera a ver estos mensajes:
```
✅ ford-backend-dev   | 🚀 Servidor corriendo en puerto 3001
✅ ford-backend-dev   | 📧 Servicio de emails Ford activo
✅ ford-frontend-dev  | VITE v5.x.x ready in XXX ms
✅ ford-frontend-dev  | ➜  Local:   http://localhost:5173/
```

---

## 🌐 Paso 3: Abrir el Frontend

1. Abre tu navegador en: **http://localhost:5173**
2. Navega a cualquier página con formulario

### Páginas con formularios para probar:

| Página | URL | Suborigen |
|--------|-----|-----------|
| **Test Drive** | http://localhost:5173/vehiculos/test-drive | "Test Drive" |
| **Vehículos** | http://localhost:5173/vehiculos | "Vehículos - Asesoramiento" |
| **Repuestos** | http://localhost:5173/postventa/repuestos | "Repuestos" |
| **Solicitar Turno** | http://localhost:5173/postventa/solicitar-turno | "Solicitar Turno" |
| **Talleres** | http://localhost:5173/postventa/talleres | "Talleres" |
| **Ford Credit** | http://localhost:5173/financiacion/ford-credit | "Ford Credit" |
| **Plan Óvalo** | http://localhost:5173/financiacion/plan-ovalo | "Plan Óvalo" |
| **Sumate al Equipo** | http://localhost:5173/quienes-somos/sumate | "Sumate al Equipo - RR.HH." |

---

## 📝 Paso 4: Completar un Formulario

1. **Completa todos los campos:**
   - Nombre y Apellido
   - Email
   - Teléfono
   - Provincia
   - Mensaje

2. **Click en "Enviar consulta"**

3. **Observa el botón:**
   - 🔄 "Enviando consulta" (con spinner)
   - ✅ "Enviada" (con check verde)

---

## 🔍 Paso 5: Ver los Logs del Backend

### En otra terminal, ejecuta:

```bash
# Ver logs en tiempo real
docker-compose logs -f backend
```

### Deberías ver algo como:

```
ford-backend-dev | 📧 Recibiendo formulario: {
ford-backend-dev |   nombre: 'Juan Pérez',
ford-backend-dev |   email: 'juan@example.com',
ford-backend-dev |   telefono: '1122334455',
ford-backend-dev |   provincia: 'Buenos Aires',
ford-backend-dev |   mensaje: 'Necesito información',
ford-backend-dev |   origen: 'WEB AUTOSPECIAL',
ford-backend-dev |   suborigen: 'Test Drive'
ford-backend-dev | }
ford-backend-dev | ✅ Configuración SMTP verificada
ford-backend-dev | 📝 Formateando datos a ADF XML...
ford-backend-dev | 📧 Enviando email ADF XML a Tecnom...
ford-backend-dev | 📤 Destinatario: wc+autospecial_web@tecnom.cloud
ford-backend-dev | 📄 Contenido ADF XML:
ford-backend-dev | <?ADF VERSION "1.0"?>
ford-backend-dev | <?XML VERSION "1.0"?>
ford-backend-dev | <adf>
ford-backend-dev | <prospect>
ford-backend-dev | <requestdate>2024-10-01T14:30:00-03:00</requestdate>
ford-backend-dev | ...
ford-backend-dev | <provider>
ford-backend-dev | <name>WEB AUTOSPECIAL</name>
ford-backend-dev | <service>Test Drive</service>
ford-backend-dev | </provider>
ford-backend-dev | </prospect>
ford-backend-dev | </adf>
ford-backend-dev | ✅ Email ADF XML enviado exitosamente a Tecnom
ford-backend-dev | 🆔 Message ID: <abc123@gmail.com>
```

---

## ✅ Paso 6: Verificar el Email

El email fue enviado a: **wc+autospecial_web@tecnom.cloud**

### Formato del email:
- **Asunto:** `Ford Web Lead - Juan Pérez - 01/10/2024`
- **Cuerpo:** XML ADF con todos los datos
- **Origen:** WEB AUTOSPECIAL
- **Suborigen:** Test Drive (o el que corresponda a la página)

---

## 🧪 Pruebas Adicionales

### 1. Verificar Backend (desde terminal):

```bash
# Health check
curl http://localhost:3001/api/health

# Ver respuesta
{
  "status": "OK",
  "timestamp": "2024-10-01T17:30:00.000Z",
  "uptime": 123.45
}
```

### 2. Probar desde DevTools del Navegador:

1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Completa y envía el formulario
4. Busca la petición `contact`
5. Verifica:
   - ✅ Status: 200 OK
   - ✅ Response: `{ success: true, message: "Email ADF enviado exitosamente a Tecnom" }`

### 3. Probar con diferentes formularios:

Prueba en al menos 2 páginas diferentes para verificar que los **suborigenes** se envían correctamente:
- Test Drive → "Test Drive"
- Ford Credit → "Ford Credit"
- Repuestos → "Repuestos"

---

## 🐛 Troubleshooting

### Problema: "Error al enviar el email"

**Solución:**
1. Verifica las credenciales en `backend/.env`
2. Usa una contraseña de aplicación (no la contraseña normal de Gmail)
3. Ve los logs: `docker-compose logs backend`

### Problema: Frontend no puede conectar al backend

**Solución:**
1. Verifica que ambos contenedores estén corriendo: `docker-compose ps`
2. El backend debe estar en el puerto 3001
3. Reinicia: `docker-compose restart`

### Problema: El formulario no envía (botón no cambia a "Enviada")

**Solución:**
1. Abre DevTools → Console (F12)
2. Busca errores en rojo
3. Ve a Network → verifica que `/api/contact` llegue al servidor
4. Revisa los logs del backend: `docker-compose logs -f backend`

### Problema: Email no llega a Tecnom

**Verifica:**
1. ✅ Backend muestra: "✅ Email ADF XML enviado exitosamente"
2. ✅ No hay errores en los logs
3. ✅ Las credenciales SMTP son correctas
4. ⏰ Espera unos minutos (a veces demora)

---

## 📊 Flujo Completo

```
Usuario → Frontend (localhost:5173)
              ↓
         Formulario con datos
              ↓
    POST /api/contact (con origen + suborigen)
              ↓
         Backend (localhost:3001)
              ↓
    Formato ADF XML generado
              ↓
         Nodemailer → Gmail SMTP
              ↓
    wc+autospecial_web@tecnom.cloud
              ↓
         ✅ Email recibido en Tecnom
```

---

## 🎯 Checklist de Verificación

- [ ] Docker containers corriendo
- [ ] Backend responde en http://localhost:3001/api/health
- [ ] Frontend carga en http://localhost:5173
- [ ] Formulario se completa sin errores
- [ ] Botón cambia a "Enviada" con check verde
- [ ] Logs muestran: "✅ Email ADF XML enviado exitosamente"
- [ ] Message ID aparece en los logs
- [ ] No hay errores en DevTools Console

---

## 🎉 ¡Listo!

Si todos los checks están ✅, el sistema funciona correctamente y los emails se están enviando a Tecnom con el formato ADF correcto incluyendo origen y suborigenes.

**Próximo paso:** Hacer pruebas desde diferentes páginas para verificar que cada una envíe su suborigen específico.

