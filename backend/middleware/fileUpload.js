import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento en memoria
const storage = multer.memoryStorage();

// Filtro de archivos permitidos
const fileFilter = (req, file, cb) => {
  console.log('📁 Archivo recibido:', file.originalname, file.mimetype);
  
  // Tipos de archivo permitidos
  const allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Tipo de archivo no permitido: ${file.mimetype}`), false);
  }
};

// Configuración de multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB máximo por archivo
    files: 5 // Máximo 5 archivos
  }
});

// Middleware para manejar archivos múltiples
export const handleFileUploads = upload.array('archivos', 5);

// Middleware para procesar archivos después del upload
export const processUploadedFiles = (req, res, next) => {
  try {
    if (req.files && req.files.length > 0) {
      console.log(`📎 ${req.files.length} archivo(s) subido(s)`);
      
      // Procesar cada archivo
      req.attachments = req.files.map(file => {
        const extension = path.extname(file.originalname).toLowerCase();
        
        return {
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype,
          size: file.size,
          extension: extension
        };
      });
      
      // Log de archivos procesados
      req.attachments.forEach((attachment, index) => {
        console.log(`📄 Archivo ${index + 1}:`, {
          nombre: attachment.filename,
          tipo: attachment.contentType,
          tamaño: `${(attachment.size / 1024).toFixed(1)}KB`
        });
      });
      
    } else {
      req.attachments = [];
    }
    
    next();
  } catch (error) {
    console.error('❌ Error procesando archivos:', error);
    res.status(400).json({
      success: false,
      message: 'Error al procesar archivos adjuntos',
      error: error.message
    });
  }
};

// Middleware de manejo de errores de multer
export const handleMulterError = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    let message = 'Error al subir archivo';
    
    switch (error.code) {
      case 'LIMIT_FILE_SIZE':
        message = 'Archivo demasiado grande (máximo 10MB)';
        break;
      case 'LIMIT_FILE_COUNT':
        message = 'Demasiados archivos (máximo 5)';
        break;
      case 'LIMIT_UNEXPECTED_FILE':
        message = 'Campo de archivo inesperado';
        break;
    }
    
    return res.status(400).json({
      success: false,
      message: message,
      error: error.code
    });
  }
  
  if (error.message.includes('Tipo de archivo no permitido')) {
    return res.status(400).json({
      success: false,
      message: 'Tipo de archivo no permitido',
      allowedTypes: ['PDF', 'JPG', 'PNG', 'GIF', 'DOC', 'DOCX', 'TXT'],
      error: error.message
    });
  }
  
  next(error);
}; 