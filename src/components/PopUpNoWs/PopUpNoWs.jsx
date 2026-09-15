import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './PopUpNoWs.module.css';

const PopUpNoWs = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const storedPopup = localStorage.getItem('popupData');
        
        if (storedPopup) {
            const data = JSON.parse(storedPopup);
            const now = new Date().getTime();
    
            
            if (now < data.expiry) {
                setShowPopup(false); // Sigue vigente, no se muestra
                return;
            }
        }
    
        setShowPopup(true);
    }, []);
    
    const handleClosePopup = () => {
        setShowPopup(false);
        
        const hours = 1; 
        const now = new Date().getTime();
        const expiryTime = now + hours * 60 * 60 * 1000; 
        const data = {
            value: 'true',
            expiry: expiryTime
        };
    
        localStorage.setItem('popupData', JSON.stringify(data));
    };

    if (!showPopup) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div
                className={styles.popup}
                role="dialog"
                aria-labelledby="popup-no-ws-title"
            >
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={handleClosePopup}
                    aria-label="Cerrar"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M1 1L13 13M13 1L1 13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
                <h4 id="popup-no-ws-title" className={`text-color-white ${styles.title}`}>
                    WhatsApp momentáneamente
                 
                    <span className="text-color-secondary"> no disponible</span>
                </h4>
                <p className={`text-color-white ${styles.body}`}>
                En este momento nuestro canal de WhatsApp no se encuentra disponible.

                </p>
                <p className={`text-color-white ${styles.body}`}>
                     Para realizar tu consulta, podés escribirnos a{' '}
                    <a
                        href="mailto:info@autospecial.com.ar"
                        className={`text-color-secondary ${styles.email}`}
                    >
                        info@autospecial.com.ar
                    </a>
                    {' '}o comunicarte con nuestra sucursal de Agronomía al {' '} 
                    <a
                        href="tel:1145738200"
                        className={`text-color-secondary ${styles.phone}`}
                    >
                      11 4573-8200
                    </a>
                    .
                    <br />
                    <br />
                    Disculpá las molestias.
                    <br />
                    Equipo Auto Special Ford
                </p>
            </div>
        </div>,
        document.body
    );
};

export default PopUpNoWs;
