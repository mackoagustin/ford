import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', as = 'button', ...props }) => {
  const Component = as;
  return (
    <Component className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;

