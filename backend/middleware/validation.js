// Middleware de validación para los datos del formulario
export const validateFormData = (req, res, next) => {
  const { nombre, email, telefono } = req.body;
  const errors = [];
  
  // Validación de nombre (requerido)
  if (!nombre || nombre.trim().length === 0) {
    errors.push('El nombre es requerido');
  } else if (nombre.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }
  
  // Validación de email (requerido y formato válido)
  if (!email || email.trim().length === 0) {
    errors.push('El email es requerido');
  } else if (!isValidEmail(email)) {
    errors.push('El formato del email no es válido');
  }
  
  // Validación de teléfono (requerido)
  if (!telefono || telefono.trim().length === 0) {
    errors.push('El teléfono es requerido');
  } else if (!isValidPhone(telefono)) {
    errors.push('El formato del teléfono no es válido');
  }
  
  // Si hay errores, devolver respuesta de error
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Datos del formulario inválidos',
      errors: errors
    });
  }
  
  // Sanitizar datos
  req.body.nombre = sanitizeString(nombre);
  req.body.email = sanitizeEmail(email);
  req.body.telefono = sanitizePhone(telefono);
  
  if (req.body.apellido) {
    req.body.apellido = sanitizeString(req.body.apellido);
  }
  
  if (req.body.mensaje) {
    req.body.mensaje = sanitizeString(req.body.mensaje);
  }
  
  // Agregar metadata
  req.body.ip = req.ip || req.connection.remoteAddress;
  req.body.userAgent = req.get('User-Agent');
  req.body.timestamp = new Date().toISOString();
  
  next();
};

// Función para validar formato de email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar formato de teléfono argentino
const isValidPhone = (phone) => {
  // Eliminar espacios, guiones y paréntesis
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  // Aceptar números de 8 a 12 dígitos (más flexible)
  // Acepta formatos como: 01150560359, 1150560359, 50560359, +5491150560359, etc.
  if (cleanPhone.length >= 8 && cleanPhone.length <= 12) {
    // Verificar que solo contenga números (y opcionalmente + al inicio)
    const phoneRegex = /^(\+?\d+)$/;
    return phoneRegex.test(cleanPhone);
  }
  
  return false;
};

// Función para sanitizar strings
const sanitizeString = (str) => {
  return str.trim().replace(/[<>]/g, '');
};

// Función para sanitizar email
const sanitizeEmail = (email) => {
  return email.trim().toLowerCase();
};

// Función para sanitizar teléfono
const sanitizePhone = (phone) => {
  return phone.trim().replace(/[\s\-\(\)]/g, '');
}; 