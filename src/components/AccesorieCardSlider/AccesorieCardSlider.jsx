import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import vehicleData from '../../data/vehicles.json';
import AccesorieCard from '../AccesorieCard/AccesorieCard';
import useIsMobile from "../../hook/useIsMobile";
import styles from './AccesorieCardSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const AccesoireCardSlider = ({ category }) => {
  const isMobile = useIsMobile();

  const filteredVehicles = vehicleData.vehicles.filter(
    (item) => item.category === category && item.isAccesory === true
  );

  const flexContainerClass =
    filteredVehicles.length <= 2
      ? styles.flexStart
      : styles.spaceBetween;

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={60}
        slidesPerView={1.2}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.wraperSwiper}
      >
        {filteredVehicles.map((item) => (
          <SwiperSlide key={item.id}>
            <AccesorieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={`${styles.flex} ${flexContainerClass}`}>
      {filteredVehicles.map((item) => (
        <AccesorieCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AccesoireCardSlider;
