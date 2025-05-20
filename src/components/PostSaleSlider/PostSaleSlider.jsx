import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import postData from '../../data/postSale.json';
import PostCard from '../PostSaleCard/PostSaleCard';
import useIsMobile from "../../hook/useIsMobile"; 
import styles from './PostSaleSlider.module.css'
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

  const groupedPosts = [];
  for (let i = 0; i < posts.length; i += 3) {
    groupedPosts.push(posts.slice(i, i + 3));
  }

  return (
    <div className={styles.grid}>
      {groupedPosts.map((group, groupIndex) => (
        <div key={groupIndex} className={styles.groupWrapper}>
          {group.map((data, index) => (
            <PostCard key={index} data={data} groupIndex={groupIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostSaleSlider;
