import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import vehiclesData from '../../data/vehicles.json';
import vehicleBannersData from '../../data/vehicleBanners.json';
import BannerVehicleDetail from '../../components/BannerVehicleDetail/BannerVehicleDetail';
import VehicleBenefitSlider from '../../components/VehicleBenefitSlider/VehicleBenefitSlider';
import Chip from '../../components/Chip/Chip';
import BannerVehicleKnow from '../../components/BannerVehicleKnow/BannerVehicleKnow';
import Footer from '../../components/Footer/Footer';
import styles from './VehicleDetail.module.css';
import Button from '../../components/Button/Button';

const VehicleDetail = () => {
    const { id } = useParams();
    const vehicle = vehiclesData.vehicles.find(item => item.id === id);
    const vehicleBanner = vehicleBannersData.vehicleBanners[id];
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedBenefit, setSelectedBenefit] = useState(0);

    // Mapeo de imágenes de banner por vehículo
    const vehicleBannerImages = {
        "Nueva Territory": "/img/banners/vehicle_detail.png",
        "Nueva Maverick": "/img/banners/vehicle_detail2.png",
        "nueva_ranger": "/img/banners/vehicle_detail3.png",
        "transit_van": "/img/banners/vehicle_detail4.png",
    };



    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!vehicle) {
        return <div>Vehículo no encontrado</div>;
    }

    return (
        <div>
            <BannerVehicleDetail data={vehicleBanner} />
            <div className={styles.wrapperText}>
                <div className={styles.wraperTitle}>
                    <h1 className='H1 text-color-dark' dangerouslySetInnerHTML={{ __html: vehicle.detail.mainSection.title }} />
                </div>
                <div className={styles.contentText}>
                    <p className='H3 text-color-neutral-500'>{vehicle.detail.mainSection.text}</p>
                </div>
            </div>

            {/* feature */}
            <div className={styles.wraperRow}>
                <div className={styles.wraperFeature}>
                    <img 
                        src={vehicle.detail.colors[selectedColorIndex].image} 
                        alt={vehicle.title} 
                        className={styles.carImage}
                    />
                    <p className={`${styles.colorText} subtitle-20 text-color-dark`}>
                        {vehicle.detail.colors[selectedColorIndex].name}
                    </p>
                    <div className={styles.colorImages}>
                        {vehicle.detail.colors.map((color, index) => (
                            <img 
                                key={index}
                                src={color.imageColor} 
                                alt={color.name}
                                className={`${styles.colorImage} ${selectedColorIndex === index ? styles.selected : ''}`}
                                onClick={() => setSelectedColorIndex(index)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div className={styles.wraperSpecifications}>
                        <div className={styles.contentSpecifications}>
                            {vehicle.detail.specifications.map((spec, index) => (
                                <div key={index}>
                                    <p className={` ${styles.specificationsTitle} H4 text-color-white`}>{spec.title}</p>
                                    {spec.feature.map((item, idx) => (
                                        <p 
                                            key={idx}
                                            className='subtitle-20 text-color-dark'>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.technicalSheetButton}>
                        <Button
                            href={vehicle.technicalSheet}
                            target="_blank"
                            variant="secondary"
                            style= {{marginTop: '42px'}}
                        >
                            Descargar ficha técnica
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth={2.4}
                                stroke="currentColor"
                                fill="none"
                                className={styles["button-icon"]}
                                style={{paddingLeft: '8px'}}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </Button>

                        
                    </div>
                </div> 
            </div>

            {/* galeria imágenes - Mobile Swiper */}
            <div className={styles.wraperImagesMobile}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    pagination={{ clickable: true }}
                    className={styles.swiper}
                    style={{paddingBottom: '38px'}}
                >
                    {vehicle.detail.gallery.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img 
                                src={image} 
                                alt={`${vehicle.title} - Imagen ${index + 1}`}
                                className={styles.galleryImage}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* galeria imágenes - Desktop Grid */}
            <div className={styles.galleryImagesDesktop}>
                {vehicle.detail.gallery.map((image, index) => (
                    <div 
                        key={index}
                        className={styles.galleryImageContainer}
                        onClick={() => openModal(index)}
                    >
                        <img 
                            src={image} 
                            alt={`${vehicle.title} - Imagen ${index + 1}`}
                            className={styles.galleryImage}
                        />
                        <div className={styles.zoomIcon} />
                    </div>
                ))}
            </div>
           
            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.closeButton} onClick={closeModal}>×</div>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true
                            }}
                            navigation={true}
                            initialSlide={selectedImageIndex}
                            keyboard={{ enabled: true }}
                            loop={true}
                        >
                            {vehicle.detail.gallery.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img 
                                        src={image} 
                                        alt={`${vehicle.title} - Imagen ${index + 1}`}
                                        className={styles.modalImage}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}

            {/* Slider benefits - Mobile */}
            <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainerMobile}`}>
                <VehicleBenefitSlider data={vehicle.detail.benefits} />

            </div>

            {/* Slider benefits - Desktop */}
            <div className={styles.sliderBenefitsDesktop}>
                <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.chipContainer}`}>
                    {vehicle.detail.benefits.map((item, index) => (
                        <Chip
                            key={index}
                            label={item.title}
                            active={index === selectedBenefit}
                            onClick={() => setSelectedBenefit(index)}
                        />
                    ))}
                </div>
                <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
                    <VehicleBenefitSlider data={[vehicle.detail.benefits[selectedBenefit]]} />
                </div>
            </div>

            {vehicleBannerImages[vehicle.id] && (
                <div className={styles.BannerVehicleKnow}>
                    <BannerVehicleKnow backgroundImage={vehicleBannerImages[vehicle.id]} />
                </div>
            )}
            
            <Footer />

        </div>
    );
};

export default VehicleDetail;

