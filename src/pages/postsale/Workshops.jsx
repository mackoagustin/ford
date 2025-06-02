// src/pages/Home.jsx
import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import locationData from '../../data/locations.json';
import useIsMobile from '../../hook/useIsMobile';
import BannerWorkshop from '../../components/BannerWorkshop/BannerWorkshop';
import styles from './Workshop.module.css';
import WorkshopSlider from '../../components/WorkshopSlider/WorkshopSlider';
import Form from '../../components/Form/Form';


function Workshops() {

  const selectedBanner = bannerData.banners[11];
  const isMobile = useIsMobile();
  const items = locationData.locations[0]

  return (
    <>
      <BannerWorkshop data={selectedBanner} />

      {isMobile ? (
        <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
              <h3 className="H2 text-color-dark"> Repuestos 
              <span className='text-color-secondary'> originales</span> y servicios
              <span className='text-color-secondary'> especializados</span>
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
              Auto Special cuenta con tres concesionarias Ford en Agronomía, 3 de Febrero y Palermo. Todas nuestras sucursales cuentan con repuestos originales Ford y talleres especializados para brindarte el mejor servicio. Además, nuestros talleres son oficiales, lo que significa que están equipados con las herramientas y técnicos especializados para brindar el mejor servicio a tu vehículo.
              </p>
        </div>
      ) : (
        <div className={`${styles["pt-60"]} ${styles["px-16"]} `}>
          <div className={styles.wraperText}> 
            <h3 className="H2 text-color-dark text-center"> Respuesto
              <span className='text-color-secondary'> originales</span> y servicios
              <span className='text-color-secondary'> especializados</span>
            </h3>
              
            <p className="text-color-neutral-500 subtitle-20 text-center">
            Auto Special cuenta con tres concesionarias Ford en Agronomía, 3 de Febrero y Palermo. Todas nuestras sucursales cuentan con repuestos originales Ford y talleres especializados para brindarte el mejor servicio. Además, nuestros talleres son oficiales, lo que significa que están equipados con las herramientas y técnicos especializados para brindar el mejor servicio a tu vehículo.
            </p>
          </div>
        </div>
      )}


      <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
      <WorkshopSlider items={items} />
      </div>


      <div className={styles.wraperForm}>
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <br />
              <span className="text-color-secondary">solicitar turno?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
          </div>
      <Footer />
    </>
  );
}

export default Workshops;
