import React from 'react';
import VehicleCarCardSlider from '../components/VehicleCarCardSlider/VehicleCarCardSlider';
import styles from './Vehicles.module.css'

const Vehicles = () => {
  return (
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
  );
};

export default Vehicles;
