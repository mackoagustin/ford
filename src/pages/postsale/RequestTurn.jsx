import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import styles from './Parts.module.css';
import BannerKnowUS from '../../components/BannerKnowUS/BannerKnowUS';
import FordPassApp from '../../components/FordPassApp/FordPassApp';
import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';

const WHATSAPP_TURNOS =
  'https://wa.me/5491168949307?text=' +
  encodeURIComponent('Hola, quiero solicitar un turno para taller.');

function RequestTurn() {
  const selectedBanner = bannerData.banners[10];


  return (
    <>
      <BannerKnowUS data={selectedBanner} />

      <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
        <h2 className='H2 text-color-dark text-center'>Elegí por dónde solicitar tu turno</h2>
      </div>

      <div className={`${styles.turnChannels} ${styles["px-16"]}`}>
        <a href="#ford-pass-app" className={`${styles.turnChannelCard} ${styles.turnChannelCardFixed}`}>
          <img
            src="/icons/icon/phone.svg"
            alt=""
            className={styles.turnChannelIconImg}
            width={24}
            height={24}
            decoding="async"
          />
          <span className={styles.turnChannelLabel}>App Ford</span>
        </a>

        <a
          href={WHATSAPP_TURNOS}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.turnChannelCard} ${styles.turnChannelCardAuto}`}
        >
          <img
            src="/icons/icon/ws.svg"
            alt=""
            className={styles.turnChannelIconImg}
            width={24}
            height={24}
            decoding="async"
          />
          <span className={styles.turnChannelLabel}>WhatsApp</span>
        </a>

        <Link to="/postventa/talleres" className={`${styles.turnChannelCard} ${styles.turnChannelCardFixed}`}>
          <img
            src="/icons/icon/phone2.svg"
            alt=""
            className={styles.turnChannelIconImg}
            width={24}
            height={24}
            decoding="async"
          />
          <span className={styles.turnChannelLabel}>Teléfono</span>
        </Link>

        <a href="#formulario-turno" className={`${styles.turnChannelCard} ${styles.turnChannelCardFixed}`}>
          <img
            src="/icons/icon/screen.svg"
            alt=""
            className={styles.turnChannelIconImg}
            width={24}
            height={24}
            decoding="async"
          />
          <span className={styles.turnChannelLabel}>Online</span>
        </a>
      </div>

      <FordPassApp />
      
      <div id="formulario-turno" className={styles.wraperForm} style={{marginBottom: '80px', borderRadius: '16px'}}>
            <h3 className="H3 text-color-dark" style={{marginBottom: ' 8px'}}>
              ¿Querés que te lo
              <span className="text-color-secondary"> agendemos nosotros?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500" >
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form 
              origen="WEB AUTOSPECIAL" 
              suborigen="Solicitar Turno" 
            />
      </div>
      
      <Footer />
    </>
  );
}

export default RequestTurn;
