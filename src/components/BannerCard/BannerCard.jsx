import React from "react";
import styles from './BannerCard.module.css'
import Button from "../Button/Button"; 
import useIsMobile from '../../hook/useIsMobile'

const BannerCard = () => {

    const isMobile = useIsMobile();

    return (
        <div>
            {isMobile ? (
                <div className={styles.wraper}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>Test Drive</h3>
                        <div className={styles.wraperText}>
                            <p className={styles.text}>Experimentá los últimos modelos 0km de Ford con nuestro Test Drive.</p>
                        </div>
                        <Button
                        as="a"
                        href=""
                        variant="secondary"
                        >
                        Consultar por WhatsApp
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
            ): (
                    <div className={styles.wraper}>
                    <div className={styles.info}>
                        <div className={styles.wraperTitle}>
                             <h3 className={styles.title}>Test <span className={styles.blueText}> Drive </span></h3>
                        </div>
                       
                        <div className={styles.wraperText}>
                            <p className={styles.text}>Experimentá los últimos modelos 0km de Ford con nuestro Test Drive.</p>
                        </div>
                        <Button
                        as="a"
                        href=""
                        variant="secondary"
                        >
                        Consultar por WhatsApp
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

export default BannerCard