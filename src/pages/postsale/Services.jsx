import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../../components/Banner/Banner";
import LocationSlider from "../../components/LocationSlider/LocationSlider";
import Form from "../../components/Form/Form";
import Chip from "../../components/Chip/Chip";
import chipData from "../../data/chipOptions.json"
import bannerData from "../../data/banners.json";
import useIsMobile from "../../hook/useIsMobile";

import 'swiper/css';
import style from "./services.module.css";

const Services = () => {
  const isMobile = useIsMobile();
  const selectedBanner = bannerData.banners[1];
  const chipOptions = chipData.chips;

  const [selectedChip, setSelectedChip] = useState("Todos");


  return (
    <div>
      <Banner data={selectedBanner} />
      <div className={style.contentWrapper}>
        {/* Texto de introducción */}
        {isMobile ? (
          <div className={`${style["pt-60"]} ${style["px-16"]}`}>
            <h3 className="H3">
              Encontrá el <span className="text-color-secondary">concesionario oficial</span> de Ford y{" "}
              <span className="text-color-secondary">puntos de servicio multimarca</span> que más te convenga.
            </h3>
            <p className="text-color-neutral-500 subtitle-20">
              Seleccioná el servicio de tu interés para conocer las sucursales:
            </p>
          </div>
        ) : (
          <div className={`${style["pt-60"]} ${style["px-16"]}`}>
            <h3 className={`H3 ${style.textCenter}`}>
              Encontrá el <span className="text-color-secondary">concesionario oficial</span> de Ford y{" "}
              <span className="text-color-secondary">puntos</span>
              <br />
              <span className="text-color-secondary">de servicio multimarca</span> que más te convenga.
            </h3>
            <p className={`text-color-neutral-500 subtitle-20 ${style.textCenter}`}>
              Seleccioná el servicio de tu interés para conocer las sucursales:
            </p>
          </div>
        )}

         {/* Chips de selección */}
       {isMobile ? (
          <Swiper
            slidesPerView="auto"
            freeMode={true}
          >
          {chipOptions.map(option => (
            <SwiperSlide key={option} style={{ width: 'auto', paddingLeft: '16px' }}>
              <Chip
                label={option}
                active={selectedChip === option}
                onClick={() => setSelectedChip(option)}
              />
            </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className= {` ${style.flex}`} >
              {chipOptions.map(option => (
                <Chip
                  key={option}
                  label={option}
                  active={selectedChip === option}
                  onClick={() => setSelectedChip(option)}
                />
              ))}
            </div>
        )}

        {/* Slider */}
        <div className={`${style["pt-42"]} ${style["px-16"]}`}>
          <LocationSlider selectedCategory={selectedChip} />

        </div>

        {/* Formulario */}
        {isMobile ? (
          <div className={style.wraper}>
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <br />
              <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
          </div>
        ) : (
          <div className={style.wraper}>
            <h3 className={`H3 text-color-dark ${style.mb0} `}>
              ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className={`body-1-16 text-color-neutral-500 ${style.mt8}`}>
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
