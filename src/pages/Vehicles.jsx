import React from 'react';
import VehicleCarCardSlider from '../components/VehicleCarCardSlider/VehicleCarCardSlider';
import styles from './Vehicles.module.css'
//import useIsMobile from '../hook/useIsMobile';
import BannerEmpty from '../components/BannerEmpty/BannerEmpty';
import BannerCard from '../components/BannerCard/BannerCard';
import bannerData from "../data/banners.json";

const Vehicles = () => {
  //const isMobile =  useIsMobile();
  const selectedBAnner = bannerData.banners[2]

  return (
    <div>
      <BannerEmpty data={selectedBAnner} />
      <div className= {styles.px16}>
        <div className= {styles.wraperSection}>
           <h2 className='H2'>SUV’s</h2>
          <VehicleCarCardSlider category="suv" />
        </div>
       
        <div className= {styles.wraperSection}>
          <h2 className='H2'>Pick-Ups</h2>
          <VehicleCarCardSlider category="pick-up" />
        </div>
        
        <div className= {styles.wraperSection}>
          <h2 className='H2'>Vehículos Comerciales</h2>
          <VehicleCarCardSlider category="comerciales" />
        </div>

        <div className= {styles.wraperSection}>
           <h2 className='H2'>Mustang</h2>
          <VehicleCarCardSlider category="mustang" />
        </div>
     
        <div className= {styles.wraperSection}>
          <h2 className='H2'>Futuros</h2>
          <VehicleCarCardSlider category="futuros" />
        </div>
        
      </div>

      <BannerCard />
    </div>
    
  );
};

export default Vehicles;
