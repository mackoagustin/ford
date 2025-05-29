import React from 'react';
import BannerFordCredit from '../../components/BannerFordCredit/BannerFordCredit';
import bannerData from "../../data/banners.json";
import styles from "./FordCredit.module.css";
import FordCreditCarCardSlider from '../../components/FordCreditCardCardSlider/FordCreditCarCardSlider';
import Form from '../../components/Form/Form';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

function FordCredit() {
  const isMobile = useIsMobile();
  const selectedBanner = bannerData.banners[3]

  return (
    <div>
      <BannerFordCredit data = {selectedBanner} />

      <div className= {styles.px16}>
        <div className= {styles.wraperSection}>
           <h2 className='H2'> <span className='text-color-secondary'>Planes vigentes </span> de suscripción</h2>
       
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <FordCreditCarCardSlider />

       
      </div>

      <div className= {`${styles.px16} ${styles.wraperLegal}`}>
        <div className={styles.legalText}>
          <p className="body-1-16">*Los precios pueden sufrir modificaciones sin previo aviso. Imágenes no contractuales. </p>
        </div>
        <div className={styles.legalButton}>
        <Button
            as="a"
            href="https://www.autospecial.com.ar/legalesplanes"
            target="_blank"
            rel="noopener noreferrer"
            variant="quarter"
        >
          Legales
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth={2.4}
            stroke="currentColor"
            fill="none"
            className={styles["button-icon"]}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5L15.75 12 8.25 19.5"
            />
          </svg>
        </Button>
        </div>
       
      </div>

      {isMobile ? (
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
      <Footer />
    </div>
  )
}

export default FordCredit;
