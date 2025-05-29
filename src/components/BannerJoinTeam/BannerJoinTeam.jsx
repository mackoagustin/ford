// src/components/Banner/Banner.jsx
import React from "react";
import styles from "./BannerJoinTeam.module.css"; 

const BannerJoinTeam = ({ data }) => {
  if (!data) {
    return <div>No data available</div>; 
  }

  return (
    <div className={styles.banner}>
      <img 
        src={data.image} 
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
            </div>
        </div>
    </div>
  );
};

export default BannerJoinTeam;
