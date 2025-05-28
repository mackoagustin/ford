import React from "react";
import styles from './BannerVehicleDetail.module.css';
import Button from "../Button/Button";
import useIsMobile from "../../hook/useIsMobile";

const BannerDoubleButton = ({data}) => {
    const isMobile = useIsMobile();

    if (!data) {
        return <div>No data avaible</div>
    }

    return (
           <div className={styles.banner}>
              <img 
                src={data.image} 
                alt="Banner" 
                className={styles.backgroundImage} 
                loading="lazy"
              />

              <div className={styles.overlay} />

              <div className={styles.content}>
                <div className={styles.textGroup}>
                  <h1 className={`${styles.title} display4`}>
                    {data.title}
                  </h1>
                  <p className={styles["title-grey"]}>{data.subtitle}</p>

          {isMobile ? (
            <>
              <Button
                as="a"
                href={data.ctaLink}
                variant="primaryFull"
              >
                {data.ctaText}
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
                
               <Button
                as="a"
                href={data.ctaLinkSecond}
                variant="secondaryFull"
              >
                {data.ctaTextSecond}
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
            </>
          ) : (
            <div className= {styles.wraperbuttons}>
                <Button
                as="a"
                href={data.ctaLink}
                variant="primary"
              >
                {data.ctaText}
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

               <Button
                as="a"
                href={data.ctaLinkSecond}
                variant="secondary"
              >
                {data.ctaTextSecond}
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
    </div>
    )
}

export default BannerDoubleButton