import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import useIsMobile from '../../hook/useIsMobile';
import styles from './Parts.module.css';
import BannerTest from '../../components/BannerTest/BannerTest';
import FormParts from '../../components/FormParts/FormParts';


function Parts() {

  const selectedBanner = bannerData.banners[17];
  const isMobile = useIsMobile();

  return (
    <>
      <BannerTest data={selectedBanner} />

      {isMobile ? (
        <>


          <div className={styles.wraperForm}>
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <span className="text-color-secondary"> comprar o consultar </span>
              por un repuesto?
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <FormParts />
          </div>

        </>
   
      ) : (
        <>
     

          <div className={styles.wraperForm} style={{borderRadius: '16px'}}>
            <h3 className="H3 text-color-dark">
                ¿Necesitás
                <span className="text-color-secondary"> comprar o consultar </span>
                por un repuesto?
              </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <FormParts />
          </div>
        </>
       
      )}
      <div style={{marginTop: '80px'}}>
      <Footer />
      </div>
     
    </>
  );
}

export default Parts;
