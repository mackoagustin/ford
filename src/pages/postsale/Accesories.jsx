// src/pages/Home.jsx
import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import BannerWorkshop from '../../components/BannerWorkshop/BannerWorkshop';
import styles from './Accesories.module.css';
import useIsMobile from '../../hook/useIsMobile';

import Form from '../../components/Form/Form';

function Accesories() {
  const selectedBanner = bannerData.banners[12];
  const isMobile = useIsMobile();
  return (
    <>
      <BannerWorkshop data={selectedBanner} />

      {isMobile ? (
           <div className={`${styles["pt-80"]} ${styles["px-16"]} ${styles["pb-60"]}`}>
            <p className="text-color-neutral-500 subtitle-20">
            La amplia gama de Accesorios permiten sumar dinamismo, deportividad y exclusividad a tu Ford. Solo los Accesorios desarrollados por Ford Argentina cuentan con garantía y aseguran mantener la calidad integral del vehículo ya que quien diseña el producto también diseña los Accesorios.
            </p>
           </div>
      ) : (
        <div className={`${styles["pt-80"]} ${styles["px-16"]} `}>
          <div className={styles.wraperText}>      
            <p className="text-color-neutral-500 subtitle-20 text-center">
            La amplia gama de Accesorios permiten sumar dinamismo, deportividad y exclusividad a tu Ford. Solo los Accesorios desarrollados por Ford Argentina cuentan con garantía y aseguran mantener la calidad integral del vehículo ya que quien diseña el producto también diseña los Accesorios.
            </p>
          </div>
        </div>
      )}
     
       {/* Formulario */}
       {isMobile ? (
          <div className={styles.wraper }>
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
        ) : (
          <div className={styles.wraper}>
            <h3 className={`H3 text-color-dark ${styles.mb0} `}>
              ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className={`body-1-16 text-color-neutral-500 ${styles.mt8}`}>
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <div>
              <Form />
            </div>
          </div>
         )} 




       {/* Banner VISA */}
       <div className={styles.wraperVisa}>
         {isMobile ? (
        <div className={styles.visaBanner}>
          <img 
            src="/icons/icon/visa.png" 
            alt="VISA" 
            className={styles.visaLogo}
          />
          <div className={styles.visaTextContainer}>
            <span className="text-color-white subtitle-20">
              Pagá con VISA en 3 o 6 cuotas{" "}
            </span>
            <span className="text-color-white subtitle-20 font-weight-700">
              sin interés
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.visaBannerDesktop}>
          <img 
            src="/icons/icon/visa.png" 
            alt="VISA" 
            className={styles.visaLogo}
          />
          <div className={styles.visaTextContainerDesktop}>
            <span className="text-color-white subtitle-20">
              Pagá con VISA en 3 o 6 cuotas       sin interés{" "}
            </span>
          </div>
        </div>
       )}
       </div>
       
       <Footer />
    </>
  );
}

export default Accesories;
