import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', as = 'button', href, ...props }) => {
  // Si hay href y es una ruta interna (empieza con /), usar Link de React Router
  if (href && href.startsWith('/') && !href.startsWith('http')) {
    return (
      <Link to={href} className={`${styles.button} ${styles[variant]}`} {...props}>
        {children}
      </Link>
    );
  }
  
  // Si hay href pero es externo, usar enlace normal
  if (href) {
    return (
      <a href={href} className={`${styles.button} ${styles[variant]}`} {...props}>
        {children}
      </a>
    );
  }
  
  // Si no hay href, usar el componente especificado o button por defecto
  const Component = as;
  return (
    <Component className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;

