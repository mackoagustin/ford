# Formato ADF para Tecnom CRM

## Descripción

Este documento describe la implementación del formato ADF (AutoDealerFormat) XML que se envía a la casilla de Tecnom para integrar los leads de Ford Web con su sistema CRM.

## Estructura del XML ADF

El formato ADF implementado sigue exactamente la estructura solicitada por Tecnom:

```xml
<?ADF VERSION "1.0"?>

<?XML VERSION "1.0"?>

<adf>

<prospect>

<requestdate>2025-08-14T14:28:21.045-03:00</requestdate>

 
<vehicle>

<year>2024</year>

<make>Ford</make>

<model>Territory</model>

<comments>(EN EL CASO DE NO PODER SEPARAR MARCA Y MODELO PONER TODO EL NOMBRE ACA)</comments>

</vehicle>

 
<customer>

<contact>

<name part="first" type="individual">Juan</name>

<name part="last" type="individual">Pérez</name>

<email preferredcontact="1">jperez@hotmail.com</email>

<phone type="phone">22111111</phone>

<phone type="cellphone">22111111</phone>

<identification>74563123</identification> IDENTIFICADOR

<address type="home"> 

<city>La Plata</city>   LOCALIDAD

</address> 

</contact>

<comments>Información sobre el plan de financiación. Gracias</comments>

</customer>

<vendor>

<vendorname> (SI LO TIENE QUE RECIBIR ALGÚN VENDEDOR/SUCURSAL/SUPERVISOR/EQUIPO ESPECÍFICO, ACÁ SE PODRÍA EL EMAIL QUE TIENE REGISTRADO EN NUESTRO SISTEMA)</vendorname>

</vendor>

 
<provider>

<name>Ford Web</name>

<service>Formulario Web (ACÁ SE PONE EL SUBORIGEN O NOMBRE DE CAMPAÑA SI LO DESEAN DIFERENCIAR)</service>

</provider>

</prospect>

</adf>
```

## Campos Mapeados

### Datos del Cliente
- **nombre**: Se separa automáticamente en `firstName` y `lastName`
- **email**: Campo requerido para contacto preferido
- **telefono**: Se usa tanto para `phone` como para `cellphone`
- **identificacion/dni**: Campo de identificación del cliente
- **localidad/ciudad/province**: Se mapea al campo `city` de la dirección

### Datos del Vehículo
- **anio**: Año del vehículo
- **marca**: Marca del vehículo (por defecto "Ford")
- **modelo**: Modelo específico del vehículo

### Metadatos
- **origen**: Origen del lead (por defecto "Ford Web")
- **suborigen**: Suborigen o campaña específica
- **mensaje**: Comentarios del cliente
- **vendedor/concesionario**: Vendedor asignado (opcional)

## Formato de Fecha

La fecha se genera en formato ISO 8601 con zona horaria de Argentina (UTC-3):
```
2025-08-14T14:28:21.045-03:00
```

## Implementación Técnica

### Archivos Involucrados
- `utils/adfFormatter.js`: Genera el XML ADF
- `services/emailToTecnomService.js`: Envía el email con el contenido ADF
- `middleware/validation.js`: Valida los datos del formulario

### Flujo de Procesamiento
1. El formulario se envía a `/api/contact`
2. Se validan los datos del formulario
3. Se formatean los datos al formato ADF XML
4. Se envía el email a `wc+autospecial_web@tecnom.cloud`
5. El contenido se envía como texto plano en el campo `text` del email

### Logs de Debugging
El sistema incluye logs detallados para debugging:
- Fecha generada
- Datos del cliente procesados
- Contenido ADF XML generado
- Longitud del contenido
- Respuesta del servidor SMTP

## Casilla de Destino

Los emails se envían a:
```
wc+autospecial_web@tecnom.cloud
```

## Configuración SMTP

- **Host**: smtp.gmail.com
- **Puerto**: 587
- **Seguridad**: STARTTLS
- **Autenticación**: Usuario y contraseña de Gmail

## Variables de Entorno Requeridas

```bash
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_contraseña_de_aplicacion
```

## Notas Importantes

1. **Formato de Email**: El contenido ADF se envía como texto plano, no como HTML
2. **Codificación**: Se usa UTF-8 para soportar caracteres especiales
3. **Prioridad**: Los emails se marcan como de alta prioridad
4. **Archivos Adjuntos**: Se pueden incluir PDFs y otros archivos si es necesario
5. **Validación**: Los datos del formulario se validan antes del envío

## Testing

Para probar el formato ADF, se puede usar el endpoint `/api/contact` con datos de prueba o revisar los logs del servidor que muestran el XML generado.

