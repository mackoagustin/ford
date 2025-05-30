import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import postData from '../../data/fordProtect.json';
import FordProtectCard from '../FordProtectCard/FordProtectCard';
import useIsMobile from "../../hook/useIsMobile"; 
import styles from './FordProtectSlider.module.css'
import "swiper/css"; 
import "swiper/css/pagination"; 

import { Pagination } from "swiper/modules";

const FordProtectSlider = ({ limit }) => {
  const isMobile = useIsMobile();
  const data = postData.fordProtect;
  
  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        pagination={{ clickable: true }}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <FordProtectCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.grid}>
       {data.map((data, index) => (
        <FordProtectCard key={index} data={data} />
       ))}
    </div>
  );
};

export default FordProtectSlider;
