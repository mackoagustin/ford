import { Swiper, SwiperSlide } from "swiper/react";
import FordProCard from "../FordProCard/FordProCard";
import useIsMobile from "../../hook/useIsMobile"; 
import styles from "./FordProSlider.module.css"; // corregido
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const FordProSlider = ({ data }) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1.2}
                loop={true}
                pagination={{ clickable: true }}         
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <FordProCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

    return (
        <div className={styles.desktopContainer}>
            {data.map((item, index) => (
                <FordProCard key={index} data={item} />
            ))}
        </div>
    );
};

export default FordProSlider;
