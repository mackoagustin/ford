// Web Worker para procesar datos pesados sin bloquear el hilo principal
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'PROCESS_VEHICLES':
      const processedVehicles = processVehicles(data);
      self.postMessage({ type: 'VEHICLES_PROCESSED', data: processedVehicles });
      break;
      
    case 'PROCESS_FORMS':
      const processedForms = processForms(data);
      self.postMessage({ type: 'FORMS_PROCESSED', data: processedForms });
      break;
      
    case 'PROCESS_IMAGES':
      const processedImages = processImages(data);
      self.postMessage({ type: 'IMAGES_PROCESSED', data: processedImages });
      break;
      
    default:
      console.warn('Unknown worker task:', type);
  }
};

function processVehicles(vehicles) {
  // Procesar datos de vehículos de forma eficiente
  return vehicles.map(vehicle => ({
    ...vehicle,
    // Optimizar datos para renderizado
    optimizedImage: vehicle.image ? vehicle.image.replace(/\.(jpg|jpeg|png)$/i, '.webp') : null,
    // Pre-calcular propiedades computadas
    displayPrice: formatPrice(vehicle.price),
    // Optimizar descripción
    shortDescription: vehicle.description ? vehicle.description.substring(0, 100) + '...' : ''
  }));
}

function processForms(formData) {
  // Procesar datos de formularios
  return {
    ...formData,
    // Validar y optimizar datos
    isValid: validateFormData(formData),
    // Pre-procesar campos
    processedFields: Object.keys(formData).reduce((acc, key) => {
      acc[key] = sanitizeInput(formData[key]);
      return acc;
    }, {})
  };
}

function processImages(images) {
  // Procesar imágenes para optimización
  return images.map(image => ({
    ...image,
    // Generar URLs optimizadas
    webpUrl: image.url.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
    // Pre-calcular dimensiones
    aspectRatio: image.width && image.height ? image.width / image.height : 1,
    // Optimizar para lazy loading
    placeholder: generatePlaceholder(image)
  }));
}

function formatPrice(price) {
  if (!price) return '';
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(price);
}

function validateFormData(data) {
  // Validación básica de formularios
  return Object.values(data).every(value => 
    value !== null && value !== undefined && value !== ''
  );
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
}

function generatePlaceholder(image) {
  // Generar placeholder simple para lazy loading
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${image.width || 300}" height="${image.height || 200}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Cargando...</text>
    </svg>
  `)}`;
}
