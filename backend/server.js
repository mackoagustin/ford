import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { sendEmailToTecnomWithFiles } from './services/emailToTecnomService.js';
import { validateFormData } from './middleware/validation.js';
import { handleFileUploads, processUploadedFiles, handleMulterError } from './middleware/fileUpload.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de seguridad
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // máximo 10 solicitudes por IP cada 15 minutos
  message: {
    error: 'Demasiadas solicitudes desde esta IP, intenta de nuevo en 15 minutos.'
  }
});

app.use('/api/contact', limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend Ford - Integración con Tecnom API',
    status: 'Activo',
    version: '1.0.0'
  });
});

// Ruta para envío de formularios (con archivos opcionales)
app.post('/api/contact', handleFileUploads, handleMulterError, processUploadedFiles, validateFormData, async (req, res) => {
      try {
      console.log('📧 Recibiendo formulario:', req.body);
      if (req.attachments?.length > 0) {
        console.log('📎 Archivos adjuntos:', req.attachments.length);
      }
      
      const result = await sendEmailToTecnomWithFiles(req.body, req.attachments || []);
    
    if (result.success) {
              res.status(200).json({
          success: true,
          message: 'Email ADF enviado exitosamente a Tecnom',
          messageId: result.messageId,
          attachments: result.attachments || 0
        });
    } else {
      res.status(500).json({
        success: false,
        message: 'Error al enviar el email ADF a Tecnom',
        error: result.error
      });
    }
  } catch (error) {
    console.error('❌ Error en /api/contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
});

// Ruta de salud del servicio
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('💥 Error no manejado:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor'
  });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📧 Servicio de emails Ford activo`);
}); 