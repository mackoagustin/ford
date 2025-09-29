import React from 'react';
import FormParts from '../components/FormParts/FormParts';

const FormPartsTest = () => {
  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        color: '#333',
        fontSize: '2rem'
      }}>
        Formulario de Repuestos - FormParts
      </h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <FormParts />
      </div>
    </div>
  );
};

export default FormPartsTest;
