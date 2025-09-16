import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import knowUsData from "../../data/knowUs.json";    
import KnowUsCard from "../KnowUsCard/KnowCard";
import useIsMobile from "../../hook/useIsMobile"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import styles from "./KnowUsSlider.module.css"; 

import { Pagination } from "swiper/modules";

const KnowUsSlider = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.1}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {knowUsData.knowUs.map((knowUs, index) => (
          <SwiperSlide key={index}>
            <KnowUsCard knowUs={knowUs} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.grid}>
      {knowUsData.knowUs.map((knowUs, index) => (
        <KnowUsCard key={index} knowUs={knowUs} />
      ))}
    </div>
  );
};

export default KnowUsSlider;
