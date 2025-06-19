// Servicio para enviar emails ADF a la casilla de Tecnom
import nodemailer from 'nodemailer';
import { formatToADF } from '../utils/adfFormatter.js';

// Configuración del transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

export const sendEmailToTecnom = async (formData, options = {}) => {
  try {
    const transporter = createTransporter();
    
    // Verificar configuración
    await transporter.verify();
    console.log('✅ Configuración SMTP verificada');
    
    // Formatear datos al formato ADF en texto plano
    const adfContent = formatToADF(formData);
    
    // Configuración base del email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'wc+autospecial_web@tecnom.cloud', // La casilla que ya tienes
      subject: `Ford Web Lead - ${formData.nombre || 'Sin nombre'} - ${new Date().toLocaleDateString()}`,
      text: adfContent, // Texto plano como requiere Tecnom
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };
    
    // Agregar archivos adjuntos si los hay
    if (options.attachments && options.attachments.length > 0) {
      mailOptions.attachments = options.attachments;
      console.log('📎 Archivos adjuntos:', options.attachments.length);
    }
    
    console.log('📧 Enviando email ADF a Tecnom...');
    console.log('📤 Destinatario:', mailOptions.to);
    console.log('📄 Contenido ADF:\n', adfContent);
    
    // Enviar el email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email ADF enviado exitosamente a Tecnom');
    console.log('🆔 Message ID:', info.messageId);
    
    return {
      success: true,
      messageId: info.messageId,
      response: info.response,
      method: 'email_to_tecnom',
      attachments: options.attachments?.length || 0
    };
    
  } catch (error) {
    console.error('❌ Error al enviar email a Tecnom:', error);
    
    return {
      success: false,
      error: error.message,
      code: error.code,
      method: 'email_to_tecnom'
    };
  }
};

// Función específica para enviar con PDF
export const sendEmailToTecnomWithPDF = async (formData, pdfBuffer, pdfFileName = 'formulario.pdf') => {
  const attachments = [
    {
      filename: pdfFileName,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }
  ];
  
  return await sendEmailToTecnom(formData, { attachments });
};

// Función para enviar con múltiples archivos
export const sendEmailToTecnomWithFiles = async (formData, files = []) => {
  // files debe ser un array de { filename, content, contentType }
  const attachments = files.map(file => ({
    filename: file.filename,
    content: file.content,
    contentType: file.contentType || 'application/octet-stream'
  }));
  
  return await sendEmailToTecnom(formData, { attachments });
};

export const testEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { 
      success: true, 
      message: 'Conexión SMTP exitosa - listo para enviar a Tecnom' 
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
}; 