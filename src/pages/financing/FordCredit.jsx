import React from 'react';
import BannerFordCredit from '../../components/BannerFordCredit/BannerFordCredit';
import bannerData from "../../data/banners.json";
import styles from "./FordCredit.module.css";
import FordCreditCarCardSlider from '../../components/FordCreditCardCardSlider/FordCreditCarCardSlider';
import Form from '../../components/Form/Form';
import useIsMobile from '../../hook/useIsMobile';

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
    </div>
  )
}

export default FordCredit;
