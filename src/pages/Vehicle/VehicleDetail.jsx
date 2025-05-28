import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import vehiclesData from '../../data/vehicleTest.json';
import vehicleBannersData from '../../data/vehicleBanners.json';
import BannerVehicleDetail from '../../components/BannerVehicleDetail/BannerVehicleDetail';
import styles from './VehicleDetail.module.css';
import useIsMobile from '../../hook/useIsMobile';

const VehicleDetail = () => {
    const { id } = useParams();
    const vehicle = vehiclesData.vehicles.find(item => item.id === id);
    const vehicleBanner = vehicleBannersData.vehicleBanners[id];
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const isMobile = useIsMobile();

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
            {isMobile ? (
                <div>
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
                </div>
            ) : (
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
                </div>
            )}


                 {/* galeria imágenes */}
            { isMobile ? (
                 <div className={styles.wraperImages}>
                 <Swiper
                     modules={[Pagination]}
                     spaceBetween={16}
                     slidesPerView={1.2}
                     pagination={{ clickable: true }}
                     className={styles.swiper}
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
            ) : (
               <div className={styles.galleryImages}>
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
            )}
           

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

        </div>
    );
};

export default VehicleDetail;

