import { Swiper, SwiperSlide } from "swiper/react";
import fordProtData from '../../data/fordPro.json';
import FordProCard from "../FordProCard/FordProCard";
import useIsMobile from "../../hook/useIsMobile"; 
import styles from "./FordProSlider.module.css"; // corregido
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const FordProSlider = () => {
    const isMobile = useIsMobile();
    const data = fordProtData.fordPro;

    if (!isMobile) {
        return <div className={styles.desktopContainer}>Versión de escritorio próximamente.</div>;
    }

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
};

export default FordProSlider;
