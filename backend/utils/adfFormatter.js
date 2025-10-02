// Formateador ADF (AutoDealerFormat) para Tecnom
export const formatToADF = (formData) => {
  const now = new Date();
  
  // Formato de fecha requerido: 2021-02-10T12:46:20-08:00
  // Convertir a zona horaria de Argentina (UTC-3)
  const argentinaTime = new Date(now.getTime() - (3 * 60 * 60 * 1000));
  const isoDate = argentinaTime.toISOString().replace('Z', '-03:00');
  
  console.log('📅 Fecha original:', now.toISOString());
  console.log('📅 Fecha Argentina:', isoDate);

  // Separar nombre y apellido si es posible
  const fullName = formData.nombre || formData.name || '';
  const nameParts = fullName.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Obtener teléfono para usar tanto en phone como cellphone
  const phoneNumber = formData.telefono || formData.cellphone || '';
  
  // Usar provincia como ciudad si no hay ciudad específica
  const city = formData.localidad || formData.ciudad || formData.province || '';
  
  // Obtener mensaje para usar en comentarios
  const message = formData.mensaje || formData.message || '';

  console.log('👤 Datos del cliente:', {
    nombre: fullName,
    firstName,
    lastName,
    email: formData.email,
    telefono: phoneNumber,
    ciudad: city,
    mensaje: message
  });

  // Mapear campos del formulario a la estructura ADF 1.0 estándar oficial
  const adfXML = `<?ADF VERSION "1.0"?>
<?XML VERSION "1.0"?>
<adf>
<prospect>
<requestdate>${isoDate}</requestdate>
<vehicle interest="buy" status="new">
<year>${formData.anio || ''}</year>
<make>${formData.marca || 'Ford'}</make>
<model>${formData.modelo || ''}</model>
<vin>${formData.vin || ''}</vin>
<stock>${formData.stock || ''}</stock>
<comments>${formData.vehiculo || message || ''}</comments>
</vehicle>
<customer>
<contact>
<name part="first" type="individual">${firstName}</name>
<name part="last" type="individual">${lastName}</name>
<email preferredcontact="1">${formData.email || ''}</email>
<phone type="voice" time="nopreference">${phoneNumber}</phone>
<address type="home">
<city>${city}</city>
<regioncode>${formData.provincia || formData.province || ''}</regioncode>
<postalcode>${formData.codigoPostal || formData.postalCode || ''}</postalcode>
<country>AR</country>
</address>
</contact>
<comments>${message}</comments>
</customer>
<vendor>
<vendorname>${formData.vendedor || formData.concesionario || formData.sucursal || 'Auto Special'}</vendorname>
</vendor>
<provider>
<name>${formData.origen || 'WEB AUTOSPECIAL'}</name>
<service>${formData.suborigen || 'General'}</service>
</provider>
</prospect>
</adf>`;

  console.log('📄 XML ADF generado:\n', adfXML);
  return adfXML;
};

// Función auxiliar para formatear fecha (mantenida por compatibilidad)
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Función auxiliar para formatear hora (mantenida por compatibilidad)
const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}; 