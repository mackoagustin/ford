import {Swiper, SwiperSlide} from "swiper/react";
import FinanceCard from "../FinanceCard/FinanceCard";
import useIsMobile from "../../hook/useIsMobile";
import styles from "./FinanceSlider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";



const FincanceSlider = ({ data }) => { 

    // Verificar si data tiene la propiedad credit (caso móvil) o si es un array (caso desktop)
    const financeData = data.credit ? data.credit.map(item => item.financing) : data.map(item => item.financing);
    const isMobile = useIsMobile();

    if(isMobile) {
        return (
            <Swiper 
                modules={[Pagination]} 
                spaceBetween={16} 
                slidesPerView={1.2} 
                loop={true} 
                pagination={{ clickable: true }}
            >
                {financeData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <FinanceCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }


    return (
        <div className={styles.sliderContainer}>
            {financeData.map((item, index) => (
                <FinanceCard key={index} data={item} />
            ))}
        </div>
    )
}

export default FincanceSlider; 