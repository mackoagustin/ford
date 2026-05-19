// src/components/Banner/Banner.jsx
import React from "react";
import styles from "./BannerKnowUs.module.css"; 
import useIsMobile from "../../hook/useIsMobile";



const BannerKnowUS = ({ data }) => {

  const isMobile = useIsMobile();

  if (!data) {
    return <div>No data available</div>; 
  }

  const bannerImage = isMobile ? (data.imageMobile || data.image) : data.image;

  return (
    <div className={styles.banner}>
      <img 
        src={bannerImage} 
        alt={data.title} 
        className={styles.backgroundImage} 
        loading="lazy"
      />
      <div className={styles.overlay} />
        <div className={styles.content}>
            <div className={styles.textGroup}>
                <h1 className={styles.title}
                   dangerouslySetInnerHTML={{ __html: data.title }}>
                </h1>
            <div className={styles.wraperText}>
                <p className= {styles.description}> {data.description} </p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default BannerKnowUS;
