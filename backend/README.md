# Backend Ford - Envío de Leads a Tecnom

Backend en Node.js que envía formularios del sitio web Ford directamente por email a Tecnom en formato ADF.

## 🚀 Configuración

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**
Editar el archivo `.env`:
```env
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_password_de_aplicacion
```

3. **Ejecutar:**
```bash
npm start
```

## 📧 Cómo funciona

El sistema envía emails con formato ADF a: **wc+autospecial_web@tecnom.cloud**

### Formato del email:
- **Asunto:** `Ford Web Lead - [Nombre] - [Fecha]`
- **Cuerpo:** Texto plano en formato ADF
- **Archivos adjuntos:** Opcionales (PDF, imágenes, documentos)

## 🔄 API

### POST `/api/contact`

**Campos requeridos:**
- `nombre` (string)
- `email` (string) 
- `telefono` (string)

**Campos opcionales:**
- `apellido`, `vehiculo`, `provincia`, `localidad`, `concesionario`, `mensaje`, `tipo`

**Archivos adjuntos:**
- Campo: `archivos` (multipart/form-data)
- Tipos: PDF, JPG, PNG, GIF, DOC, DOCX, TXT
- Límite: 5 archivos, 10MB cada uno

### Ejemplo Frontend

**Con archivos:**
```javascript
const formData = new FormData();
formData.append('nombre', 'Juan');
formData.append('email', 'juan@email.com');
formData.append('telefono', '1123456789');
formData.append('mensaje', 'Consulta sobre vehículo');

// Agregar archivos
files.forEach(file => formData.append('archivos', file));

fetch('/api/contact', {
  method: 'POST',
  body: formData
});
```

**Sin archivos (JSON):**
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Juan',
    email: 'juan@email.com',
    telefono: '1123456789'
  })
});
```

## 🛡️ Seguridad

- Rate limiting: 10 solicitudes por IP cada 15 minutos
- Validación de datos de entrada
- Sanitización de strings
- Headers de seguridad con Helmet
- CORS configurado

## 📋 Dependencias

- **express** - Servidor web
- **nodemailer** - Envío de emails
- **multer** - Upload de archivos
- **cors** - CORS
- **helmet** - Seguridad
- **express-rate-limit** - Rate limiting
- **dotenv** - Variables de entorno 