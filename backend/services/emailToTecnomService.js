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
    
    // Formatear datos al formato ADF XML estándar
    console.log('📝 Formateando datos a ADF XML...');
    const adfContent = formatToADF(formData);
    
    // Obtener nombre para el asunto
    const customerName = formData.nombre || formData.name || 'Sin nombre';
    const currentDate = new Date().toLocaleDateString('es-AR');
    
    // Determinar el destinatario según el tipo de formulario
    let emailTo;
    let emailContent = '';
    let emailSubject = '';
    
    if (formData.suborigen === 'Sumate al Equipo - RR.HH.') {
      // Emails específicos para formulario de RR.HH.
      emailTo = 'rrhh@autospecial.com.ar, seleccion@autospecial.com.ar, mnavarro@autospecial.com.ar';
      console.log('👥 Formulario de RR.HH. detectado - Enviando a 3 destinatarios: rrhh@autospecial.com.ar, seleccion@autospecial.com.ar, mnavarro@autospecial.com.ar');
      
      // Crear contenido legible en texto plano SOLO para RR.HH.
      // Usar solo caracteres ASCII para evitar codificación quoted-printable
      const nombre = formData.nombre || formData.name || 'No especificado';
      const email = formData.email || 'No especificado';
      const telefono = formData.telefono || formData.cellphone || 'No especificado';
      const provincia = formData.provincia || formData.province || 'No especificado';
      const mensaje = formData.mensaje || formData.message || 'Sin mensaje';
      const tieneAdjunto = options.attachments && options.attachments.length > 0;
      const nombresAdjuntos = tieneAdjunto 
        ? options.attachments.map(a => a.filename || 'archivo').join(', ')
        : 'Ninguno';
      
      emailContent = `
=================================================================
         NUEVA POSTULACION - RECURSOS HUMANOS
=================================================================

Nombre y Apellido: ${nombre}
Email: ${email}
Telefono: ${telefono}
Provincia: ${provincia}

Mensaje:
${mensaje}

Archivo adjunto: ${nombresAdjuntos}

-----------------------------------------------------------------
Fecha: ${currentDate}
=================================================================
      `.trim();
      
      emailSubject = `Nueva Postulacion RR.HH. - ${nombre} - ${currentDate}`;
      
    } else {
      // Para TODOS los demás formularios (Formulario PDF y otros), usar XML ADF
      // Definir el destinatario: Tecnom (gestor de emails)
      emailTo = process.env.EMAIL_DESTINATION || 'wc+autospecial_web@tecnom.cloud';
      emailContent = adfContent;
      emailSubject = `Ford Web Lead - ${customerName} - ${currentDate}`;
    }
    
    // Configuración base del email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: emailTo,
      subject: emailSubject,
      text: emailContent,
      encoding: 'utf8'
    };
    
    // Inicializar attachments array
    if (!mailOptions.attachments) {
      mailOptions.attachments = [];
    }
    
    // Agregar archivos adjuntos originales primero
    if (options.attachments && options.attachments.length > 0) {
      mailOptions.attachments.push(...options.attachments);
      console.log('📎 Archivos adjuntos:', options.attachments.length);
    }
    
    // Si es formato legible (RR.HH.), también adjuntar el XML ADF como referencia
    if (formData.suborigen === 'Sumate al Equipo - RR.HH.') {
      mailOptions.attachments.push({
        filename: 'formulario-adf.xml',
        content: adfContent,
        contentType: 'application/xml'
      });
    }
    
    console.log('📧 Enviando email...');
    console.log('📤 Destinatario:', mailOptions.to);
    if (formData.suborigen === 'Sumate al Equipo - RR.HH.') {
      console.log('📄 Formato: Texto legible para RR.HH.');
    } else {
      console.log('📄 Contenido ADF XML:\n', adfContent);
      console.log('📏 Longitud del contenido ADF:', adfContent.length, 'caracteres');
    }
    
    // Enviar el email
    const info = await transporter.sendMail(mailOptions);
    
    // Log específico para RR.HH.
    if (formData.suborigen === 'Sumate al Equipo - RR.HH.') {
      console.log('✅ ✅ ✅ Email enviado exitosamente a los 3 destinatarios de RR.HH.');
    } else {
      console.log('✅ Email ADF XML enviado exitosamente a Tecnom');
    }
    
    console.log('✅ Email enviado exitosamente');
    console.log('🆔 Message ID:', info.messageId);
    console.log('📧 Respuesta del servidor:', info.response);
    
    return {
      success: true,
      messageId: info.messageId,
      response: info.response,
      method: 'email_to_tecnom',
      attachments: options.attachments?.length || 0,
      adfContentLength: adfContent.length
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
      message: 'Conexión SMTP exitosa - listo para enviar ADF XML a Tecnom' 
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
}; 