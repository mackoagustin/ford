import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
    const isMobile = useIsMobile();

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
          

        </div>
    );
};

export default VehicleDetail;

