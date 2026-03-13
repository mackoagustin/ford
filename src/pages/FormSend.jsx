import React from 'react';
import Footer from '../components/Footer/Footer';
import styles from './FormSend.module.css';
import Button from '../components/Button/Button';

const FormSend = () => {
    return (
        <>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.textGroup}>
                <div className={styles.title}>
                  <p className={styles.titleWhite}>
                    ¡Consulta  <span className={styles.titleBlue}>enviada!</span>
                  </p>
                 
                </div>
              </div>
              
              <div className={styles.descriptionGroup}>
                <p className={styles.description}>
                    Gracias por contactarnos. Te estaremos respondiendo lo antes posible.
                  
                </p>
              </div>
              <div className={styles.marginTop42}>
                <Button 
                    variant="primary"
                    href="/">
                    Volver
                </Button>
              </div>
          
            </div> 
          </div>
        </div>

        <div className={styles.marginTop80}>
            <Footer />
        </div>
    </>
  );
};

export default FormSend;