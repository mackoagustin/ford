import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import vehicleData from '../../data/vehicles.json';
import VehicleCardCard from '../VehicleCarCard/VehicleCarCard';
import useIsMobile from "../../hook/useIsMobile";
import styles from './VehicleCarCardSlide.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const VehicleCarCardSlider = ({ category }) => {
  const isMobile = useIsMobile();

  
  const filteredVehicles = vehicleData.vehicles.filter(
    (item) => item.category === category
  );

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.wraperSwiper}
      >
        {filteredVehicles.map((item) => (
          <SwiperSlide key={item.title}>
            <VehicleCardCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return null; // o algo si quieres mostrarlo en desktop más adelante
};

export default VehicleCarCardSlider;
