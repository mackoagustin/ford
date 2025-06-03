import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AdminPlanOvaloCard from "../AdminPlanOvaloCard/AdminPlanOvaloCard";
import useIsMobile from "../../hook/useIsMobile";
import styles from './AdminPlanOvaloCardSlider.module.css';
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const AdminPlanOvaloCardSlider = ( { items }) => {
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
            <AdminPlanOvaloCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={styles.flex}>
      {items.map((item, index) => (
        <AdminPlanOvaloCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export default AdminPlanOvaloCardSlider;
