import React from 'react';
import styles from './BannerAdjudicationActs.module.css';
import useIsMobile from '../../hook/useIsMobile';

const BannerAdjudicationActs = ({ data }) => {
    if(!data) {
        return <div>No data available</div>;
    }

    const isMobile = useIsMobile();
    return (
        <> 
        {isMobile ? (
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
                <h1 className={`${styles.title}`}>
                  {data.title}
                </h1>
                {data.description && (
                  <p className={styles.description}>{data.description}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
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
              <h1 className={`${styles.title}`}>
                {data.title}
              </h1>
              {data.description && (
                  <p className={`${styles.description} H3`}>{data.description}</p>
                )}
            </div>
          </div>
        </div>
        )}
      </> 
    )
}

export default BannerAdjudicationActs;