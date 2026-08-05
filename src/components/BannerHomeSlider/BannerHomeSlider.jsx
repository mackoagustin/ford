// src/components/BannerHomeSlider/BannerHomeSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './BannerHomeSlider.module.css';
import bannerHomeSlider from '../../data/bannerHomeSlider.json';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../Button/Button';    

const BannerHomeSlider = () => {
    const isMobile = useIsMobile();

    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={!isMobile}
                pagination={{
                    clickable: true,
                    dynamicBullets: !isMobile,
                }}
                autoplay={{
                    delay: 5000000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className={styles.swiper}
            >
                {bannerHomeSlider.bannerHomeSlider.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slide}>
                            <img 
                                src={isMobile && banner.image_mobile ? banner.image_mobile : banner.image}
                                className={styles.image}
                                alt={`Banner Home Slider ${index + 1}`}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                            />
                            <div className={`${styles.contentOverlay} ${banner.align === 'left' ? styles.alignLeft : ''}`}>
                                <div className={styles.textContainer}>
                                    {banner.textUp && (
                                        <h2 className={styles.textUp}>{banner.textUp}</h2>
                                    )}
                                    {banner.textDown && (
                                        <h1 className={styles.textDown}>{banner.textDown}</h1>
                                    )}
                                    {banner.textDown2 && (
                                        <p className={styles.textDown2}>{banner.textDown2}</p>
                                    )}
                                </div>
                                {banner.ctaLink && banner.ctaText && (
                                    <div className={styles.wraperButton}>
                                        <Button
                                            as="a"
                                            href={banner.ctaLink}
                                            variant={isMobile ? "primaryFull" : "primary"}
                                        >
                                            {banner.ctaText}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2.4}
                                                stroke="currentColor"
                                                fill="none"
                                                className={styles["button-icon"]}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 4.5L15.75 12 8.25 19.5"
                                                />
                                            </svg>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerHomeSlider;