import React, { useState, useEffect, useRef } from 'react';
import Form from '../Form/Form';
import styles from './Map.module.css';
import useIsMobile from '../../hook/useIsMobile';

const Map = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const mapRef = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isMapLoaded) {
                    setIsInView(true);
                    // Cargar el mapa después de 1 segundo para evitar bloqueos
                    setTimeout(() => {
                        setIsMapLoaded(true);
                    }, 1000);
                }
            },
            { threshold: 0.1 }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, [isMapLoaded]);

    return (
        <>
            {isMobile ? (
                <div ref={mapRef}>
                    {isMapLoaded ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d105104.34619637256!2d-58.44009197220344!3d-34.591242397394296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAuto%20Special%20S.A.!5e0!3m2!1ses-419!2sar!4v1748976654088!5m2!1ses-419!2sar"
                            width="100%"
                            height="865"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Puntos de servicio de Auto Special"
                        ></iframe>
                    ) : (
                        <div style={{ width: '100%', height: '865px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>Cargando mapa...</div>
                        </div>
                    )}
            
                    <div className={styles.wraper}>
                        <h3 className="H3 text-color-dark">
                        ¿Necesitás
                        <br />
                        <span className="text-color-secondary">asesoramiento?</span>
                        </h3>
                        <p className="body-1-16 text-color-neutral-500">
                        Completá los datos y nos pondremos en contacto a la brevedad.
                        </p>
                    <Form />
                    </div>
                </div>
            ) : (
                <div className={styles.mapContainer} ref={mapRef}>
                    {isMapLoaded ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d105104.34619637256!2d-58.44009197220344!3d-34.591242397394296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAuto%20Special%20S.A.!5e0!3m2!1ses-419!2sar!4v1748976654088!5m2!1ses-419!2sar"
                            width="100%"
                            height="865"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Puntos de servicio de Auto Special"
                        ></iframe>
                    ) : (
                        <div style={{ width: '100%', height: '865px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div>Cargando mapa...</div>
                        </div>
                    )}
                <div className={styles.wraperForm}>
                         <h3 className={`H3 text-color-dark ${styles.textContainer}`}>
                            ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
                        </h3>
                    <Form />
                </div>
            </div>
            )}
        </>
    );
};

export default Map;
