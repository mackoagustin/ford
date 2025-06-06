import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FordCredirCarCard from '../FordCreditCarCard/FordCreditCarCard';
import useIsMobile from "../../hook/useIsMobile";
import styles from './FordCreditCarCardSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const FordCreditCarCardSlider = ( { items }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={70}
        slidesPerView={1.2}
        loop={true}
        pagination={{ clickable: true }}
        className={styles.wraperSwiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`}>
            <FordCredirCarCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {items.map((item, index) => (
        <FordCredirCarCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default FordCreditCarCardSlider;
