import React from "react";
import styles from './BannerFordAssistance.module.css'
import Button from "../Button/Button"; 
import dataAssistance from '../../data/banners.json'
import useIsMobile from '../../hook/useIsMobile'

const BannerFordAssistance = () => {

    const data = dataAssistance.banners[7]

    const isMobile = useIsMobile();

    return (
        <div>
            {isMobile ? (
                <div className={styles.wraper}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{data.title}</h3>
                        <p className={styles.text}>{data.subtitle}</p>
                        <div className={styles.buttonWrapper}>
                            <Button
                                as="a"
                                href={data.ctaLink}
                                variant="secondary"
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
                        </div>
                    </div>
                </div>
            ): (
                <div className={styles.wraper}>
                    <div className={styles.info}>
                        <div className={styles.wraperTitle}>
                            <h3 className={styles.title}>{data.title}</h3>
                        </div>
                        <div className={styles.wraperText}>
                            <p className={styles.text}>{data.subtitle}</p>
                        </div>
                        <div className={styles.buttonWrapper}>
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
                </div>
            )}
        </div>
    )
}

export default BannerFordAssistance