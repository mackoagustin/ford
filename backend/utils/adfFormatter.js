// Formateador ADF (AutoDealerFormat) para Tecnom
export const formatToADF = (formData) => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5); // Formato: YYYY-MM-DDTHH-MM-SS
  
  // Estructura básica ADF
  const adfData = {
    // Información del prospecto
    prospect: {
      id: `FORD_WEB_${timestamp}`,
      requestdate: now.toISOString(),
      vehicle: formData.vehiculo || 'No especificado',
      status: 'New'
    },
    // Información del cliente
    customer: {
      contact: {
        name: {
          part: formData.nombre || '',
          type: 'individual'
        },
        email: formData.email || '',
        phone: {
          number: formData.telefono || '',
          type: 'phone'
        }
      }
    },
    // Información del proveedor
    provider: {
      name: 'Ford Argentina',
      service: 'Web Lead',
      url: 'https://ford.com.ar'
    }
  };
  
  // Formatear en texto plano estilo ADF
  let adfText = '';
  
  adfText += '=== FORD WEB LEAD - FORMATO ADF ===\n\n';
  
  // Información del lead
  adfText += '[PROSPECT]\n';
  adfText += `ID: ${adfData.prospect.id}\n`;
  adfText += `FECHA: ${formatDate(now)}\n`;
  adfText += `HORA: ${formatTime(now)}\n`;
  adfText += `VEHICULO: ${adfData.prospect.vehicle}\n`;
  adfText += `STATUS: ${adfData.prospect.status}\n`;
  adfText += `ORIGEN: WEB\n\n`;
  
  // Información del cliente
  adfText += '[CUSTOMER]\n';
  adfText += `NOMBRE: ${formData.nombre || 'No proporcionado'}\n`;
  adfText += `EMAIL: ${formData.email || 'No proporcionado'}\n`;
  adfText += `TELEFONO: ${formData.telefono || 'No proporcionado'}\n`;
  
  // Campos adicionales del formulario
  if (formData.apellido) {
    adfText += `APELLIDO: ${formData.apellido}\n`;
  }
  
  if (formData.provincia) {
    adfText += `PROVINCIA: ${formData.provincia}\n`;
  }
  
  if (formData.localidad) {
    adfText += `LOCALIDAD: ${formData.localidad}\n`;
  }
  
  if (formData.concesionario) {
    adfText += `CONCESIONARIO_PREFERIDO: ${formData.concesionario}\n`;
  }
  
  if (formData.mensaje) {
    adfText += `MENSAJE: ${formData.mensaje}\n`;
  }
  
  if (formData.tipo) {
    adfText += `TIPO_CONSULTA: ${formData.tipo}\n`;
  }
  
  adfText += '\n[PROVIDER]\n';
  adfText += `EMPRESA: ${adfData.provider.name}\n`;
  adfText += `SERVICIO: ${adfData.provider.service}\n`;
  adfText += `URL: ${adfData.provider.url}\n`;
  
  // Información técnica
  adfText += '\n[TECHNICAL]\n';
  adfText += `TIMESTAMP: ${now.toISOString()}\n`;
  adfText += `USER_AGENT: ${formData.userAgent || 'No disponible'}\n`;
  adfText += `IP: ${formData.ip || 'No disponible'}\n`;
  
  adfText += '\n=== FIN LEAD ===';
  
  return adfText;
};

// Función auxiliar para formatear fecha
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Función auxiliar para formatear hora
const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}; 