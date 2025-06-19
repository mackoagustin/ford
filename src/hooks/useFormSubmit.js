import { useState } from 'react';

const useFormSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData, hasFiles = false) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      let requestData;
      let headers = {};

      if (hasFiles) {
        // Para formularios con archivos, usar FormData
        requestData = new FormData();
        
        // Mapear campos del frontend al backend
        requestData.append('nombre', formData.name || '');
        requestData.append('email', formData.email || '');
        requestData.append('telefono', formData.cellphone || '');
        requestData.append('provincia', formData.province || '');
        requestData.append('mensaje', formData.message || '');
        
        // Agregar archivo si existe
        if (formData.pdfFile) {
          requestData.append('archivos', formData.pdfFile);
        }
      } else {
        // Para formularios sin archivos, usar JSON
        headers['Content-Type'] = 'application/json';
        requestData = JSON.stringify({
          nombre: formData.name || '',
          email: formData.email || '',
          telefono: formData.cellphone || '',
          provincia: formData.province || '',
          mensaje: formData.message || ''
        });
      }

      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: headers,
        body: requestData
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        return { 
          success: true, 
          data: result,
          message: 'Formulario enviado exitosamente'
        };
      } else {
        const errorMessage = result.message || 'Error al enviar el formulario';
        setError(errorMessage);
        return { 
          success: false, 
          error: errorMessage,
          details: result.errors || []
        };
      }
    } catch (err) {
      console.error('Error al enviar formulario:', err);
      const errorMessage = 'Error de conexión. Verifica que el servidor esté funcionando.';
      setError(errorMessage);
      return { 
        success: false, 
        error: errorMessage 
      };
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return {
    submitForm,
    loading,
    error,
    success,
    resetState
  };
};

export default useFormSubmit; 