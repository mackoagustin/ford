import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import styles from './Parts.module.css';
import BannerTest from '../../components/BannerTest/BannerTest';
import FordPassApp from '../../components/FordPassApp/FordPassApp';

import Form from '../../components/Form/Form';

function RequestTurn() {
  const selectedBanner = bannerData.banners[10];


  return (
    <>
      <BannerTest data={selectedBanner} />


      <FordPassApp />
      
      <div className={styles.wraperForm} style={{marginBottom: '80px', borderRadius: '16px'}}>
            <h3 className="H3 text-color-dark" style={{marginBottom: ' 8px'}}>
              ¿Querés que te lo
              <span className="text-color-secondary"> agendemos nosotros?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500" >
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
      </div>
      
      <Footer />
    </>
  );
}

export default RequestTurn;
