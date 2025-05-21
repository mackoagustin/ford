// src/pages/FordPro.jsx
import React from 'react';
import BannerFordPro from '../components/BannerFordPro/BannerFordPro';
import FordProSlider from '../components/FordProSlider/FordProSlider';
import style from './FordPro.module.css';
import useIsMobile from '../hook/useIsMobile';

function FordPro() {

  const isMobile = useIsMobile ();
  return (
    <div className={style.wraperBody}>
      <BannerFordPro />

      <div className={style.contentWrapper}>
         {/* Texto de introducción */}
          {isMobile ? (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H3">
                ¿Qués es <span className="text-color-secondary"> Ford Pro™?</span> 
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
                Ford Pro es un ecosistema que incluye pilares de productos y servicios, diseñados para satisfacer las necesidades del cliente comercial. Toda la innovación, tecnología y conectividad de Ford Pro ayudarán a acelerar la productividad del cliente comercial y a mantener su negocio siempre en movimiento.
              </p>
            </div>
          ) : (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className={`H3 ${style.textCenter}`}>
                ¿Qués es <span className="text-color-secondary"> Ford Pro™?</span> 
              </h3>
              <p className={`text-color-neutral-500 subtitle-20 ${style.textCenter}`}>
                Ford Pro es un ecosistema que incluye pilares de productos y servicios, diseñados para satisfacer las necesidades del cliente comercial. Toda la innovación, tecnología y conectividad de Ford Pro ayudarán a acelerar la productividad del cliente comercial y a mantener su negocio siempre en movimiento.
              </p>
            </div>
          )}
        
      </div>

      <div className={style.contentWrapper}>
         {/* Texto de introducción */}
          {isMobile ? (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H3">
               ¿Cuáles son los 
               <span className="text-color-secondary"> pilares </span> 
               que forman
                <span className="text-color-secondary"> Ford Pro? </span> 
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
              Ford Pro se compone de distintos pilares que dan soporte al cliente comercial, ya sea un pequeño o mediano emprendedor o un gran flotista, entregando soluciones completas que van desde la adquisición, uso diario hasta la renovación del vehículo o la flota.              </p>
            </div>
          ) : (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className={`H3 ${style.textCenter}`}>
                ¿Cuáles son los 
               <span className="text-color-secondary"> pilares </span> 
               que forman
                <span className="text-color-secondary"> Ford Pro? </span> 
              </h3>
              <p className={`text-color-neutral-500 subtitle-20 ${style.textCenter}`}>
              Ford Pro se compone de distintos pilares que dan soporte al cliente comercial, ya sea un pequeño o mediano emprendedor o un gran flotista, entregando soluciones completas que van desde la adquisición, uso diario hasta la renovación del vehículo o la flota.              </p>
            </div>
          )}
        
      </div>
      
      <div  className={`${style["pt-42"]} ${style["px-16"]}`}>
        <FordProSlider />
      </div>
        
    </div>
  )
}

export default FordPro;
