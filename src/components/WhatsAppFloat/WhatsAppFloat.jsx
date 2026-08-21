import React from 'react';
import { useLocation } from 'react-router-dom';
import whatsappMessages from '../../data/whatsappMessages.json';
import styles from './WhatsAppFloat.module.css';

const WhatsAppFloat = ({ 
  phoneNumber = "5491135866256", 
  position = "bottom-right"
}) => {
  const { pathname } = useLocation();
  
  const handleWhatsAppClick = () => {
    const page = whatsappMessages.pages.find((item) => item.path === pathname);
    const whatsappUrl = page?.url || whatsappMessages.default.url;
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
        <img   className={styles.whatsappIcon} src="/img/logo/ws.png" alt="Icono de Whatsapp" loading="lazy" />
      </div>
      <span className={styles.whatsappTooltip}>¡Contáctanos por WhatsApp!</span>
    </div>
  );
};

export default WhatsAppFloat; 