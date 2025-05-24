// src/components/Banner/Banner.jsx
import React from "react";
import styles from "./Banner.module.css"; 
import Button from "../Button/Button"; 

const Banner = ({ data }) => {
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
          <h1 className={`${styles.title} display4`}>
            {data.title}
            <br />
            <span className={styles["title-blue"]}>{data.subtitle}</span>
          </h1>
            <Button
              as="a"
              href={data.ctaLink}
              variant="primary"
            >
              {data.ctaText}
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
