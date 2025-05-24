import styles from './BannerFordPro.module.css'
import Button from "../Button/Button";
import useIsMobile from "../../hook/useIsMobile";


const BannerFordPro = () => {

    const isMobile =  useIsMobile();

    return (

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
                          src="/img/logo/ford.png" 
                          alt="Ford Pro" 
                          className={styles.imageLogo} 
                          loading="lazy"
                        />
                        <h1 className={styles.title}>Ford Pro™</h1>
                        <p className={styles.subTitle}>Tu negocio en movimiento.</p>

                         <Button
                            as="a"
                            href=""
                            variant="primary100"
                        >
                            Solicitar cotización
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
                        <h1 className={styles.title}>Ford Pro™</h1>
                        <p className={styles.subTitle}>Tu negocio en movimiento.</p>

                         <Button
                            as="a"
                            href=""
                            variant="primary"
                        >
                            Solicitar cotización
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
    )
}

export default BannerFordPro