import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PlanOvaloCard from "../PlanOvaloCard/PlanOvaloCard";
import useIsMobile from "../../hook/useIsMobile";
import styles from './PlanOvaloSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const PlanOvaloSlider = ( { items }) => {
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
            <PlanOvaloCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {items.map((item, index) => (
        <PlanOvaloCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default PlanOvaloSlider;
