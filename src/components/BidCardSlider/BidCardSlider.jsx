import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BidCard from "../BidCard/BidCard";
import useIsMobile from "../../hook/useIsMobile";
import styles from './BidCardSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const BidCardSlider = ( { items }) => {
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
            <BidCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {items.map((item, index) => (
        <BidCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default BidCardSlider;
