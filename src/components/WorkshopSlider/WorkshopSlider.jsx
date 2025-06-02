import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import locationData from "../../data/locations.json";
import WorkshopCard from "../WorkshopCard/WorkshopCard";
import useIsMobile from "../../hook/useIsMobile"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import styles from "./WorkshopSlider.module.css"; 

import { Pagination } from "swiper/modules";

const WorkshopSlider = ({  }) => {
  const isMobile = useIsMobile();

  // Filtrado de ubicaciones que son talleres
  const filteredLocations = locationData.locations.filter(location => location.isWorkshop === true);


  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.1}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {filteredLocations.map((item, index) => (
          <SwiperSlide key={index}>
            <WorkshopCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.grid}>
      {filteredLocations.map((item, index) => (
        <WorkshopCard key={index} item={item} />
      ))}
    </div>
  );
};

  
export default WorkshopSlider;
