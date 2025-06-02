import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import useIsMobile from '../../hook/useIsMobile';
import styles from './Parts.module.css';
import BannerTest from '../../components/BannerTest/BannerTest';
import Form from '../../components/Form/Form';


function Parts() {

  const selectedBanner = bannerData.banners[8];
  const isMobile = useIsMobile();

  return (
    <>
      <BannerTest data={selectedBanner} />

      {isMobile ? (
        <>

          <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
              <h3 className="H2 text-color-dark">
                Experimenta los <span className='text-color-secondary'>últimos modelos 0km </span>
                de Ford con nuestro Test Drive
              </h3>
                <p className="text-color-dark subtitle-20">
                  Un test drive es la oportunidad de probar un vehículo antes de comprarlo.
                </p>
              <div className={styles.pt16}>
                <p className='text-color-neutral-500 body-1-16'>
                  En Auto Special, ofrecemos test drive en los últimos modelos 0km de Ford. Es una oportunidad para experimentar el rendimiento, la comodidad y las características de un vehículo antes de tomar una decisión de compra. Además, nuestros asesores estarán disponibles para responder todas tus preguntas y brindarte una experiencia única en nuestra concesionaria oficial Ford.
                </p>
              </div>
          </div>

          <div className={styles.wraperForm}>
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <span className="text-color-secondary"> agendar un test drive?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
          </div>

        </>
   
      ) : (
        <>
          <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
              <div className={styles.wraperText}>
                <h3 className="H2 text-color-dark text-center"> 
                  Experimenta los <span className='text-color-secondary'>últimos modelos 0km </span>
                  de Ford <br /> con nuestro Test Drive
                </h3>

                <p className="text-color-dark subtitle-20">
                  Un test drive es la oportunidad de probar un vehículo antes de comprarlo.
                </p>

                <div className={styles.pt16}>
                  <p className='text-color-neutral-500 body-1-16 text-center'>
                    En Auto Special, ofrecemos test drive en los últimos modelos 0km de Ford. Es una oportunidad para experimentar el rendimiento, la comodidad y las características de un vehículo antes de tomar una decisión de compra. Además, nuestros asesores estarán disponibles para responder todas tus preguntas y brindarte una experiencia única en nuestra concesionaria oficial Ford.
                  </p>
                </div>

              </div>
          </div>

          <div className={styles.wraperForm}>
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <span className="text-color-secondary"> agendar un test drive?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
          </div>
        </>
       
      )}
      <Footer />
    </>
  );
}

export default Parts;
