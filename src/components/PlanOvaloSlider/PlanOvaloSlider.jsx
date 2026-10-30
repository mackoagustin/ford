import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PlanOvaloCard from "../PlanOvaloCard/PlanOvaloCard";
import useIsMobile from "../../hook/useIsMobile";
import styles from './PlanOvaloSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const PlanOvaloSlider = ( { items, onConsult, hideConsult = false }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={70}
        slidesPerView={1.3}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.wraperSwiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`}>
            <PlanOvaloCard item={item} onConsult={onConsult} hideConsult={hideConsult} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {items.map((item, index) => (
        <PlanOvaloCard key={`${item.title}-${index}`} item={item} onConsult={onConsult} hideConsult={hideConsult} />
      ))}
    </div>
  );
};

export default PlanOvaloSlider;
