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
        
        const hours = 24; 
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
                    Nuestro canal de WhatsApp se encuentra temporalmente fuera de servicio.
                    <br />
                    Podés comunicarte con nosotros a{' '}
                    <a
                        href="mailto:info@autospecial.com.ar"
                        className={`text-color-secondary ${styles.email}`}
                    >
                        info@autospecial.com.ar
                    </a>
                    .
                    <br />
                    <br />
                    Gracias por tu comprensión.
                </p>
            </div>
        </div>,
        document.body
    );
};

export default PopUpNoWs;
