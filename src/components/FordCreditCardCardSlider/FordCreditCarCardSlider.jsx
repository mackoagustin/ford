import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import creditPlanes from '../../data/creditPlans.json';
import FordCredirCarCard from '../FordCreditCarCard/FordCreditCarCard';
import useIsMobile from "../../hook/useIsMobile";
import styles from './FordCreditCarCardSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const FordCreditCarCardSlider = () => {
  const isMobile = useIsMobile();

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
        {creditPlanes.creditPlans.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`}>
            <FordCredirCarCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {creditPlanes.creditPlans.map((item, index) => (
        <FordCredirCarCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default FordCreditCarCardSlider;
