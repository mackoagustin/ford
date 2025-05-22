import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FordProVehicleCard from '../ForProVehicleCard/FordProVehicleCard';
import useIsMobile from "../../hook/useIsMobile";
import styles from "./FordProVehicleSlider.module.css";
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const FordProVehicleSlider = ({ data }) => {
  const isMobile = useIsMobile();

  if (!data || data.length === 0) {
    return <div>No hay vehículos Ford Pro para mostrar.</div>;
  }

  const flexContainerClass =
    data.length <= 2
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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <FordProVehicleCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={`${styles.flex} ${flexContainerClass}`}>
      {data.map((item) => (
        <FordProVehicleCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FordProVehicleSlider;
