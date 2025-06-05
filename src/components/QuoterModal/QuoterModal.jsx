import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './QuoterModal.module.css';
import Form from '../Form/Form';
import useIsMobile from '../../hook/useIsMobile';

const QuoterModal = ({ isOpen, onClose }) => {
    const isMobile = useIsMobile();

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
                <div className={styles.modalBody}>
                    {/* Contenido estilo Branches */}
                    {isMobile ? (
                        <div className={styles.wraper}>
                            <h3 className="H3 text-color-dark">
                                Solicitar <span className="text-color-secondary">Cotización</span>
                            </h3>
                            <p className="body-1-16 text-color-neutral-500">
                                Completá los datos y nos pondremos en contacto a la brevedad.
                            </p>
                            <Form />
                        </div>
                    ) : (
                        <div className={styles.wraper}>
                            <h3 className={`H3 text-color-dark ${styles.mb0}`}>
                            Solicitar <span className="text-color-secondary">Cotización</span>
                            </h3>
                            <p className={`body-1-16 text-color-neutral-500 ${styles.mt8}`}>
                                Completá los datos y nos pondremos en contacto a la brevedad.
                            </p>
                            <div>
                                <Form  backgroundColor="white"/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

export default QuoterModal;