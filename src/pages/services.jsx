import React from "react";
import Banner from "../components/Banner/Banner";
import LocationSlider from "../components/LocationSlider/LocationSlider";
import Form from "../components/Form/Form";
import bannerData from "../data/banners.json";
import useIsMobile from "../hook/useIsMobile";

import style from "./services.module.css";

const Services = () => {
  const isMobile = useIsMobile();
  const selectedBanner = bannerData.banners[1];

  return (
    <div>
      <Banner data={selectedBanner} />
      <div className={style.contentWrapper}>
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

        <div className={`${style["pt-42"]} ${style["px-16"]}`}>
          <LocationSlider />
        </div>

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
            <h3 className="H3 text-color-dark">¿Necesitás asesoramiento?</h3>
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
