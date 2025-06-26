# Backend Ford - Envío de Leads a Tecnom

Backend en Node.js que envía formularios del sitio web Ford directamente por email a Tecnom en formato ADF XML estándar.

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

El sistema envía emails con formato ADF XML estándar a: **wc+autospecial_web@tecnom.cloud**

### Formato del email:
- **Asunto:** `Ford Web Lead - [Nombre] - [Fecha]`
- **Cuerpo:** XML ADF estándar en texto plano
- **Archivos adjuntos:** Opcionales (PDF, imágenes, documentos)

### Formato ADF XML enviado:
```xml
<?ADF VERSION="1.0"?>
<?XML VERSION="1.0"?>
<adf>
  <prospect>
    <requestdate>2024-06-10T12:00:00-03:00</requestdate>
    <vehicle>
      <year></year>
      <make>Ford</make>
      <model></model>
      <comments>Mensaje del formulario</comments>
    </vehicle>
    <customer>
      <contact>
        <name part="first" type="individual">Juan</name>
        <name part="last" type="individual">Pérez</name>
        <email preferredcontact="1">juan@email.com</email>
        <phone type="phone">1122334455</phone>
        <phone type="cellphone">1122334455</phone>
        <identification></identification>
        <address type="home">
          <city>Buenos Aires</city>
        </address>
      </contact>
      <comments>Mensaje del formulario</comments>
    </customer>
    <vendor>
      <vendorname></vendorname>
    </vendor>
    <provider>
      <name>Ford Web</name>
      <service>Provincia seleccionada</service>
    </provider>
  </prospect>
</adf>
```

## 🔄 API

### POST `/api/contact`

**Campos requeridos:**
- `nombre` o `name` (string)
- `email` (string) 
- `telefono` o `cellphone` (string)

**Campos opcionales:**
- `province` (provincia)
- `message` o `mensaje` (mensaje)

**Archivos adjuntos:**
- Campo: `archivos` (multipart/form-data)
- Tipos: PDF, JPG, PNG, GIF, DOC, DOCX, TXT
- Límite: 5 archivos, 10MB cada uno

### Ejemplo Frontend

**Con archivos:**
```javascript
const formData = new FormData();
formData.append('name', 'Juan Pérez');
formData.append('email', 'juan@email.com');
formData.append('cellphone', '1123456789');
formData.append('message', 'Consulta sobre vehículo');

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
    name: 'Juan Pérez',
    email: 'juan@email.com',
    cellphone: '1123456789'
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
- **multer** - Manejo de archivos
- **helmet** - Headers de seguridad
- **cors** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting

## 🔧 Funcionalidades

- ✅ Envío de formularios en formato ADF XML estándar
- ✅ Soporte para archivos adjuntos
- ✅ Validación de datos de entrada
- ✅ Rate limiting para prevenir spam
- ✅ Logs detallados para debugging
- ✅ Manejo de errores robusto
- ✅ Separación automática de nombre y apellido
- ✅ Mapeo inteligente de campos del formulario
- ✅ **Teléfono duplicado en phone y cellphone**
- ✅ **Provincia mapeada como ciudad**
- ✅ **Mensaje usado en comentarios del vehículo y cliente**

## 📝 Notas importantes

- Los campos que no están disponibles en el formulario se envían vacíos en el XML ADF
- El sistema separa automáticamente nombre y apellido del campo "nombre y apellido"
- Se mantiene compatibilidad con diferentes nombres de campos (name/nombre, cellphone/telefono, etc.)
- Los archivos adjuntos se envían junto con el XML ADF en el mismo email
- **Mejoras implementadas:**
  - El teléfono se envía tanto en `<phone type="phone">` como en `<phone type="cellphone">`
  - La provincia se usa como ciudad en `<city>`
  - El mensaje se usa en comentarios tanto del vehículo como del cliente
  - Solo 4 campos quedan vacíos: año, modelo, identificación y vendedor 