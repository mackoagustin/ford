import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import postData from '../../data/postSale.json';
import PostCard from '../PostSaleCard/PostSaleCard';
import useIsMobile from "../../hook/useIsMobile"; 
import "swiper/css"; 
import "swiper/css/pagination"; 

import { Pagination } from "swiper/modules";

const PostSaleSlider = () => {
  const isMobile = useIsMobile();
  const posts = postData.postsale;
  if (isMobile) {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        pagination={{ clickable: true }}
      >
        {posts.map((data, index) => (
          <SwiperSlide key={index}>
            <PostCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default PostSaleSlider;
