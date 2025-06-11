import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './LegalModal.module.css';

const LegalModal = ({ isOpen, onClose, title = "Legales", content = "" }) => {
   
    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup cuando el componente se desmonta
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const modalContent = (
        <div className={styles.modal} onClick={onClose}>              
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h3 className={`H3 text-color-dark ${styles.margin0}`}>{title}</h3>
                </div>
                <div className={styles.modalBody}>
                    <p className="body-1-16 text-color-neutral-500" dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

export default LegalModal; 