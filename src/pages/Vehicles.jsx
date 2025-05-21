import React from 'react';
import VehicleCarCardSlider from '../components/VehicleCarCardSlider/VehicleCarCardSlider';
import styles from './Vehicles.module.css'
import useIsMobile from '../hook/useIsMobile';
import Banner from '../components/Banner/Banner';
import bannerData from "../data/banners.json";

const Vehicles = () => {
  const isMobile =  useIsMobile();
  const selectedBAnner = bannerData.banners[1]

  return (
    <div>
      <Banner data={selectedBAnner} />
      <div className= {styles.px16}>
        <h2>Vehículos SUV</h2>
        <VehicleCarCardSlider category="suv" />

        <h2>Vehículos Sedán</h2>
        <VehicleCarCardSlider category="pick-up" />

        <h2>Vehículos Comerciales</h2>
        <VehicleCarCardSlider category="comerciales" />

        <h2>Mustang</h2>
        <VehicleCarCardSlider category="mustang" />

        <h2>Futuros</h2>
        <VehicleCarCardSlider category="futuros" />
      </div>
    </div>
    
  );
};

export default Vehicles;
