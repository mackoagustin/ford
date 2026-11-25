import React from "react";
import styles from './BannerFordCredit.module.css';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../Button/Button';

const BannerFordCredit = ( { data }) => {
    const isMobile = useIsMobile();

    if (!data) {
        return <div>No data available</div>; 
      }

    return (
        <div className={styles.banner}>
          <img 
            src={isMobile && data.image_mobile ? data.image_mobile : data.image}
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
            {(data.ctaText || data.ctaTextSecond) && (
              <div className={styles.buttons}>
                {data.ctaText && (
                  <Button as="a" href={data.ctaLink} variant="secondary">
                    {data.ctaText}
                  </Button>
                )}
                {data.ctaTextSecond && (
                  <Button as="a" href={data.ctaLinkSecond} variant="secondary">
                    {data.ctaTextSecond}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      );
}

export default BannerFordCredit
