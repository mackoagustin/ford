import React from "react";
import styles from  "./BannerHome.module.css"
import Button from "../Button/Button";
import useIsMobile from "../../hook/useIsMobile";

const BannerHome = () => {

    const isMobile = useIsMobile();

    return ( 
     <div>
      <div>
           {isMobile ? (
                <div className={styles.wraper}>
                    <img 
                      src="/img/banners/fordPro.png" 
                      alt="Ford Pro" 
                      className={styles.image} 
                      loading="lazy"
                    />
                    <div className={styles.content}>
                        <img 
                          src="/img/logo/ford_pro_2.png" 
                          alt="Ford Pro" 
                          className={styles.imageLogo} 
                          loading="lazy"
                        />
                        <p className={styles.subTitle}>Tu negocio en movimiento.</p>
                        <div>
                        <Button
                            as="a"
                            href=""
                            variant="quarter"
                        >
                            Saber más
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
                    </div>
                    
                </div>
           ):(
             <div className={styles.wraper}>
                    <img 
                      src="/img/banners/fordPro.png" 
                      alt="Ford Pro" 
                      className={styles.image} 
                      loading="lazy"
                    />
                    <div className={styles.content}>
                        <img 
                          src="/img/logo/ford.png" 
                          alt="Ford Pro" 
                          className={styles.imageLogo} 
                          loading="lazy"
                        />
                        <p className={styles.subTitle}>Tu negocio en movimiento.</p>

                         <Button
                            as="a"
                            href=""
                            variant="quarter"
                        >
                            Saber más
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
                    
                </div>
           )}
        </div>
    </div>
     )
}

export default BannerHome