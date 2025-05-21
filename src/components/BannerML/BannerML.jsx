import React from "react";
import Button from "../Button/Button";
import style from './BannerML.module.css';
import useIsMobile from '../../hook/useIsMobile'

const BannerML = () => {
    const ismobile = useIsMobile ()
    return (
        <div>
            {ismobile ? (
               <div className={style.wraper}>
                    <div className={style.info}>
                        <img className={style.image} src="public/img/logo/mercadolibre.png" alt="Logo Mercado libre" />
                        <h3 className={style.title}> <span className="text-color-dark"> Venta</span>  de vehículos usados</h3>
                        <p className={style.text}>Explorá los modelos disponibles en nuestra tienda oficial en MercadoLibre.</p>
                        <div className={style.buttonWraper}>
                             <Button
                        as="a"
                        href="https://listado.mercadolibre.com.ar/autospecial"
                        variant="secondary"
                        >
                        Ir a mercadoLibre
                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.4}
                                            stroke="currentColor"
                                            fill="none"
                                            className={style["button-icon"]}
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
            ) : (
                <div className={style.wraper}>
                    <div className={style.info}>
                        <img className={style.image} src="public/img/logo/mercadolibre.png" alt="Logo Mercado libre" />
                        <h3 className={style.title}> <span className="text-color-dark"> Venta</span>  de vehículos usados</h3>
                        <p className={style.text}>Explorá los modelos disponibles en nuestra tienda oficial en MercadoLibre.</p>
                        <div className={style.buttonWraper}>
                             <Button
                        as="a"
                        href="https://listado.mercadolibre.com.ar/autospecial"
                        variant="secondary"
                        >
                        Ir a mercadoLibre
                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.4}
                                            stroke="currentColor"
                                            fill="none"
                                            className={style["button-icon"]}
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

export default BannerML
