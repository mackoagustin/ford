// src/pages/Home.jsx
import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import BannerWorkshop from '../../components/BannerWorkshop/BannerWorkshop';
import styles from './Accesories.module.css';
import useIsMobile from '../../hook/useIsMobile';
import AccesoireCardSlider from '../../components/AccesorieCardSlider/AccesorieCardSlider';

function Accesories() {
  const selectedBanner = bannerData.banners[12];
  const isMobile = useIsMobile();
  return (
    <>
      <BannerWorkshop data={selectedBanner} />

      {isMobile ? (
           <div className={`${styles["pt-60"]} ${styles["px-16"]} ${styles["pb-60"]}`}>
            <p className="text-color-neutral-500 subtitle-20">
            La amplia gama de Accesorios permiten sumar dinamismo, deportividad y exclusividad a tu Ford. Solo los Accesorios desarrollados por Ford Argentina cuentan con garantía y aseguran mantener la calidad integral del vehículo ya que quien diseña el producto también diseña los Accesorios.
            </p>
           </div>
      ) : (
        <div className={`${styles["pt-60"]} ${styles["px-16"]} `}>
          <div className={styles.wraperText}>      
            <p className="text-color-neutral-500 subtitle-20 text-center">
            La amplia gama de Accesorios permiten sumar dinamismo, deportividad y exclusividad a tu Ford. Solo los Accesorios desarrollados por Ford Argentina cuentan con garantía y aseguran mantener la calidad integral del vehículo ya que quien diseña el producto también diseña los Accesorios.
            </p>
          </div>
        </div>
      )}

      <div className= {styles.px16}>
      <div className= {styles.wraperSection}>
          <h2 className='H2'>SUV’s</h2>
        <AccesoireCardSlider category="suv" />
      </div>

      <div className= {styles.wraperSection}>
          <h2 className='H2'>Pick-Ups</h2>
        <AccesoireCardSlider category="pick-up" />
      </div>

      <div className= {styles.wraperSection}>
          <h2 className='H2'>Vehículos Comerciales</h2>
        <AccesoireCardSlider category="comerciales" />
      </div>

      <div className= {styles.wraperSection}>
          <h2 className='H2'>Mustang</h2>
        <AccesoireCardSlider category="mustang" />
      </div>
      </div>

     
     
      
     
      <Footer />
    </>
  );
}

export default Accesories;
