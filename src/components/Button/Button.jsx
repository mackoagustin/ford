import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', as = 'button', href, className: customClass, ...props }) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${customClass || ''}`.trim();
  // Si hay href y es una ruta interna (empieza con /), usar Link de React Router
  if (href && href.startsWith('/') && !href.startsWith('http')) {
    return (
      <Link to={href} className={buttonClassName} {...props}>
        {children}
      </Link>
    );
  }
  
  // Si hay href pero es externo, usar enlace normal
  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }
  
  // Si no hay href, usar el componente especificado o button por defecto
  const Component = as;
  return (
    <Component className={buttonClassName} {...props}>
      {children}
    </Component>
  );
};

export default Button;

