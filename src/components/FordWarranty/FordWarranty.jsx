import React from "react";
import styles from "./FordWarranty.module.css";
import logo from "../../assets/logo/protect.png";
import Button from "../Button/Button";

const FordWarranty = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="Ford logo" className={styles.logo} />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={`${styles.text} subtitle-20`}>
                            Contá con la tranquilidad de extender la garantía de tu Ford hasta el quinto año desde la compra, sin límite de kilometraje. Adquirilo en nuestros concesionarios.
                        </p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button
                            as="a"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                        >
                            Conocer más
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth={2.4}
                                stroke="currentColor"
                                fill="none"
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
        </div>
    );
};

export default FordWarranty;
