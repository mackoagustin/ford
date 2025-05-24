import React from "react";
import styles from './BannerFordCredit.module.css';

const BannerFordCredit = ( { data }) => {

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
                    <span className={styles["title-blue"]}>{data.subtitle}</span>
                    <br />
                    <span className={styles.description}>{data.description}</span>
                </h1>
            </div>
          </div>
        </div>
      );
}

export default BannerFordCredit