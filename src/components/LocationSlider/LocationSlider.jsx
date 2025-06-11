import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import locationData from "../../data/locations.json";
import LocationCard from "../LocationCard/LocationCard";
import useIsMobile from "../../hook/useIsMobile"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import styles from "./LocationSlider.module.css"; 

import { Pagination } from "swiper/modules";

const LocationSlider = ({ selectedCategory }) => {
  const isMobile = useIsMobile();

  // Filtrado por categoría
  const filteredLocations = selectedCategory === "Todos"
    ? locationData.locations
    : locationData.locations.filter(
        (location) => 
          Array.isArray(location.category) 
            ? location.category.includes(selectedCategory)
            : location.category === selectedCategory 
      );

  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.1}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {filteredLocations.map((location, index) => (
          <SwiperSlide key={index}>
            <LocationCard location={location} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.grid}>
      {filteredLocations.map((location, index) => (
        <LocationCard key={index} location={location} />
      ))}
    </div>
  );
};

  
export default LocationSlider;
