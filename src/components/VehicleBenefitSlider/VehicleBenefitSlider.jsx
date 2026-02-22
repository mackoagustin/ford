import { Swiper, SwiperSlide } from "swiper/react";
import VehicleBenefitCard from "../VehicleBenefitCard/VehicleBenefitCard";
import useIsMobile from "../../hook/useIsMobile"; 
import styles from "./VehicleBenefitSlider.module.css";
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";

const VehicleBenefitSlider = ({ data }) => {
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
                        <VehicleBenefitCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

    return (
        <div className={styles.desktopContainer}>
            {data.map((item, index) => (
                <VehicleBenefitCard key={index} data={item} />
            ))}
        </div>
    );
};

export default VehicleBenefitSlider;
