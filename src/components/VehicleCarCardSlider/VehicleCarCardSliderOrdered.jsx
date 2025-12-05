import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import vehicleData from '../../data/vehicles.json';
import VehicleCardCard from '../VehicleCarCard/VehicleCarCard';
import useIsMobile from "../../hook/useIsMobile";
import styles from './VehicleCarCardSlide.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const VehicleCarCardSliderOrdered = ({ category }) => {
  const isMobile = useIsMobile();

  const filteredVehicles = vehicleData.vehicles.filter((item) => {
    if (Array.isArray(item.categories)) {
      return item.categories.includes(category);
    }
    return item.category === category;
  });

  // Ordenar específicamente para la página de vehículos: Territory primero, Bronco segundo
  const orderedVehicles = filteredVehicles.sort((a, b) => {
    if (a.id === "Nueva Territory") return -1;
    if (b.id === "Nueva Territory") return 1;
    if (a.id === "nueva_bronco") return -1;
    if (b.id === "nueva_bronco") return 1;
    return 0;
  });

  const flexContainerClass =
    orderedVehicles.length <= 2
      ? styles.flexStart
      : styles.spaceBetween;

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={63}
        slidesPerView={1.2}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.wraperSwiper}
      >
        {orderedVehicles.map((item) => (
          <SwiperSlide key={item.id}>
            <VehicleCardCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={`${styles.flex} ${flexContainerClass}`}>
      {orderedVehicles.map((item) => (
        <VehicleCardCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default VehicleCarCardSliderOrdered;
