import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import useIsMobile from "../../hook/useIsMobile";
import styles from "./PlanOvalo10.module.css";
import Chip from '../Chip/Chip';

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const PlanOvalo10 = ({ data }) => {
    const isMobile = useIsMobile();
    const [selectedItem, setSelectedItem] = useState(0);
    const chipContainerRef = useRef(null);

    const scrollChips = (direction) => {
        if (chipContainerRef.current) {
            const container = chipContainerRef.current;
            const scrollAmount = 200; // Cantidad de píxeles a desplazar
            const currentScroll = container.scrollLeft;
            const newScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount;
            
            container.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    };

    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>;
    }

    if (isMobile) {
        return (
            <div className={styles.sliderContainer}>
                <div className={styles.card}>
                    <h2 className={styles.mainTitle}>
                        10 cosas que tenés que saber sobre <span className="text-color-secondary">Plan Ovalo</span>
                    </h2>
                    
                    <div className={styles.chipNavigationContainer}>
                        <div className={styles.chipContainer} ref={chipContainerRef}>
                            {data.map((item, index) => (
                                <Chip
                                    key={index}
                                    label={item.chip}
                                    active={index === selectedItem}
                                    onClick={() => setSelectedItem(index)}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className={styles.content}>
                        <h2 className='H2' style={{textAlign: 'left', marginTop: '16px'}}>{data[selectedItem].title}</h2>
                        <p className='body-1-16' style={{textAlign: 'left', marginBottom: '40px'}}>{data[selectedItem].text}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.card}>
                <h2 className={styles.mainTitle}>
                    10 cosas que tenés que saber sobre <span className="text-color-secondary">Plan Ovalo</span>
                </h2>
                
                <div className={styles.chipNavigationContainer}>
                    <button 
                        className={styles.navButton}
                        onClick={() => scrollChips('left')}
                        aria-label="Scroll izquierda"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth={2.4}
                            stroke="currentColor"
                            fill="none"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    
                    <div className={styles.chipContainer} ref={chipContainerRef}>
                        {data.map((item, index) => (
                            <Chip
                                key={index}
                                label={item.chip}
                                active={index === selectedItem}
                                onClick={() => setSelectedItem(index)}
                            />
                        ))}
                    </div>
                    
                    <button 
                        className={styles.navButton}
                        onClick={() => scrollChips('right')}
                        aria-label="Scroll derecha"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth={2.4}
                            stroke="currentColor"
                            fill="none"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5L15.75 12 8.25 19.5"
                            />
                        </svg>
                    </button>
                </div>
                
                <div className={styles.content}>
                    <h2 className='H2' style={{textAlign: 'center', marginTop: '16px'}}>{data[selectedItem].title}</h2>
                    <p className='body-1-16' style={{textAlign: 'center', marginBottom: '80px'}}>{data[selectedItem].text}</p>
                </div>
            </div>
        </div>
    );
};

export default PlanOvalo10;
