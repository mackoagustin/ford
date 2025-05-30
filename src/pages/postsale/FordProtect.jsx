// src/pages/Home.jsx
import React from 'react';
import Footer from '../../components/Footer/Footer';
import BannerFordProtect from '../../components/BannerFordProtect/BannerFordProtect';
import bannerData from '../../data/banners.json';
import useIsMobile from '../../hook/useIsMobile';
import styles from './FordProtect.module.css';
import FordProtectSlider from '../../components/FordProtectSlider/FordProtectSlider';

function FordProtect() {
  const selectedBanner = bannerData.banners[6];
  const isMobile = useIsMobile();
  return (
    <div>
      <BannerFordProtect data={selectedBanner} />

      {isMobile ? (
        <>
           <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
              <h3 className="H2 text-color-dark">
              <span className='text-color-secondary'>Garantía extendida</span> para tu vehículo
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
              Contá con la tranquilidad de extender la garantía de tu Ford hasta el quinto año desde la compra, sin límite de kilometraje. Ford Protect está diseñado exclusivamente para vehículos en período de garantía y se adquiere en concesionarios oficiales Ford.
              </p>
            </div>
            <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
                <FordProtectSlider />
            </div>
        </>
      ) : (
       <>
        <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
          <div className={styles.wraperText}>
            <h3 className="H2 text-color-dark text-center"> 
              <span className='text-color-secondary'>Garantía extendida</span> para tu vehículo
            </h3>
              
            <p className="text-color-neutral-500 subtitle-20 text-center">
              Contá con la tranquilidad de extender la garantía de tu Ford hasta el quinto año desde la compra, sin límite de kilometraje. Ford Protect está diseñado exclusivamente para vehículos en período de garantía y se adquiere en concesionarios oficiales Ford.
            </p>
          </div>
        </div>
             
        <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
          <FordProtectSlider />
        </div>
          
       </>
      )}
      <Footer />
    </div>
  );
}

export default FordProtect;
