import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AdminPlanOvaloCard from "../AdminPlanOvaloCard/AdminPlanOvaloCard";
import useIsMobile from "../../hook/useIsMobile";
import styles from './AdminPlanOvaloCardSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const AdminPlanOvaloCardSlider = ({ items, selectedIndices = null }) => {
  const isMobile = useIsMobile();

  // Filtrar items si se proporcionan índices específicos
  const filteredItems = selectedIndices 
    ? items.filter((item, index) => selectedIndices.includes(index))
    : items;

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
        {filteredItems.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`}>
            <AdminPlanOvaloCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {filteredItems.map((item, index) => (
        <AdminPlanOvaloCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default AdminPlanOvaloCardSlider;
