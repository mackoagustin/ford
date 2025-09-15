import React from 'react';
import VehicleCarCardSliderOrdered from '../components/VehicleCarCardSlider/VehicleCarCardSliderOrdered';
import styles from './Vehicles.module.css'
//import useIsMobile from '../hook/useIsMobile';
import BannerEmpty from '../components/BannerEmpty/BannerEmpty';
import BannerCard from '../components/BannerCard/BannerCard';
import BannerMl from '../components/BannerML/BannerML'
import bannerData from "../data/banners.json";
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';

const Vehicles = () => {
  //const isMobile =  useIsMobile();
  const selectedBAnner = bannerData.banners[2]

  return (
    <div>
      <BannerEmpty data={selectedBAnner} />
      <div className= {styles.px16}>


      <div className={styles.wraperSection}>
        <h2 className='H2'>SUV's</h2>
        <VehicleCarCardSliderOrdered category="suv" />
      </div>
    
      <div className= {styles.wraperSection}>
        <h2 className='H2'>Pick-Ups</h2>
        <VehicleCarCardSliderOrdered category="pick-up" />
      </div>

      <div className={styles.wraperSection}>
        <h2 className='H2'>Deportivos</h2>
        <VehicleCarCardSliderOrdered category="deportivo" />
      </div>

      <div className= {styles.wraperSection}>
        <h2 className='H2'>Furgón</h2>
        <VehicleCarCardSliderOrdered category="furgon" />
      </div>

      <div className= {styles.wraperSection}>
        <h2 className='H2'>Electrificados</h2>
        <VehicleCarCardSliderOrdered category="electrificado" />
      </div>

      <div className= {styles.wraperSection}>
        <h2 className='H2'>Ford Pro | Ventas Corporativas</h2>
        <VehicleCarCardSliderOrdered category="fordPro" />
      </div>

    </div>

     <div className={styles.wraperForm} id="formulario-asesoramiento">
        <h3 className="H3 text-color-dark">
          ¿Necesitás
          <span className="text-color-secondary"> asesoramiento?</span>
        </h3>
        <p className="body-1-16 text-color-neutral-500">
          Completá los datos y nos pondremos en contacto a la brevedad.
        </p>
        <Form />
      </div>
        
     
      <div className={styles.wraperDisplay}> 
        <BannerCard />
      </div>

      <div className={styles.wraperDisplay}>
        <BannerMl />
      </div>
      <Footer />
    </div>
    
  );
};

export default Vehicles;
