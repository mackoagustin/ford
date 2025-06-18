import React from 'react';
import styles from './WhatsAppFloat.module.css';

const WhatsAppFloat = ({ 
  phoneNumber = "5491126633000", 
  message = "Hola, me gustaría obtener más información", 
  position = "bottom-right"
}) => {
  
  const handleWhatsAppClick = () => {
    // Detectar si es móvil o desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Formatear el número (remover espacios, guiones, etc.)
    const formattedNumber = phoneNumber.replace(/[^\d]/g, '');
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    let whatsappUrl;
    
    if (isMobile) {
      // En móvil usar el protocolo nativo de WhatsApp
      whatsappUrl = `whatsapp://send?phone=${formattedNumber}&text=${encodedMessage}`;
    } else {
      // En desktop usar WhatsApp Web
      whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    }
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  // Mapear las posiciones a las clases de CSS modules
  const getPositionClass = () => {
    switch (position) {
      case 'bottom-left':
        return styles.bottomLeft;
      case 'top-right':
        return styles.topRight;
      case 'top-left':
        return styles.topLeft;
      default:
        return styles.bottomRight;
    }
  };

  return (
    <div className={`${styles.whatsappFloat} ${getPositionClass()}`} onClick={handleWhatsAppClick}>
      <div className={styles.whatsappFloatButton}>
        <img   className={styles.whatsappIcon} src="/img/logo/ws.png" alt="Icono de Whatsapp" />
      </div>
      <span className={styles.whatsappTooltip}>¡Contáctanos por WhatsApp!</span>
    </div>
  );
};

export default WhatsAppFloat; 