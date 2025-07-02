import React from 'react';
import VehicleCarCardSlider from '../components/VehicleCarCardSlider/VehicleCarCardSlider';
import styles from './Vehicles.module.css'
//import useIsMobile from '../hook/useIsMobile';
import BannerEmpty from '../components/BannerEmpty/BannerEmpty';
import BannerCard from '../components/BannerCard/BannerCard';
import BannerMl from '../components/BannerML/BannerML'
import bannerData from "../data/banners.json";
import Footer from '../components/Footer/Footer';

const Vehicles = () => {
  //const isMobile =  useIsMobile();
  const selectedBAnner = bannerData.banners[2]

  return (
    <div>
      <BannerEmpty data={selectedBAnner} />
      <div className= {styles.px16}>

        <div className={styles.wraperSection}>
          <h2 className='H2'>Deportivos</h2>
          <VehicleCarCardSlider category="deportivo" />
        </div>

        <div className= {styles.wraperSection}>
          <h2 className='H2'>Electrificados</h2>
          <VehicleCarCardSlider category="electrificado" />
        </div>

        <div className= {styles.wraperSection}>
          <h2 className='H2'>Ford Pro</h2>
          <VehicleCarCardSlider category="fordPro" />
        </div>

        <div className= {styles.wraperSection}>
          <h2 className='H2'>Furgón</h2>
          <VehicleCarCardSlider category="furgon" />
        </div>

        <div className= {styles.wraperSection}>
          <h2 className='H2'>Mustang</h2>
          <VehicleCarCardSlider category="mustang" />
        </div>

        <div className= {styles.wraperSection}>
          <h2 className='H2'>Pick-Ups</h2>
          <VehicleCarCardSlider category="pick-up" />
        </div>



        <div className= {styles.wraperSection}>
           <h2 className='H2'>SUV's</h2>
          <VehicleCarCardSlider category="suv" />
        </div>
       
       
        
        {/* <div className= {styles.wraperSection}>
          <h2 className='H2'>Vehículos Comerciales</h2>
          <VehicleCarCardSlider category="comerciales" />
        </div>

        <div className= {styles.wraperSection}>
           <h2 className='H2'>Mustang</h2>
          <VehicleCarCardSlider category="mustang" />
        </div> */}
        
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
