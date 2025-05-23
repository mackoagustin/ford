// src/pages/Home.jsx
import React from 'react';
import BannerDoubleButton from '../../components/BannerDoubleButton/BannerDoubleButton';
import bannerData from "../../data/banners.json";
import useIsMobile from '../../hook/useIsMobile';
import PostSaleSlider from '../../components/PostSaleSlider/PostSaleSlider';
import FordWarranty from '../../components/FordWarranty/FordWarranty';
import Footer from '../../components/Footer/Footer';

import style from  './services.module.css'


function Home() {
  const selectedBanner = bannerData.banners[0]
  const isMobile = useIsMobile ();
  return (
    <div>
      <BannerDoubleButton data={selectedBanner} />

      <div className={style.contentWrapper}>
         {/* Texto de introducción */}
          {isMobile ? (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H3">
                Estamos cerca tuyo, para <span className="text-color-secondary">cuidar </span> de tu ford{" "}
                <span className="text-color-secondary">como lo harías vos</span> 
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
                Técnicos capacitados, productos y servicios con precios transparentes, y repuestos originales de Ford, con garantía incluida.
              </p>
            </div>
          ) : (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className={`H3 ${style.textCenter}`}>
                Estamos cerca tuyo, para <span className="text-color-secondary">cuidar</span> de tu Ford{" "}
                <br />
                <span className="text-color-secondary">como lo harías vos</span>
              </h3>
              <p className={`text-color-neutral-500 subtitle-20 ${style.textCenter}`}>
                Técnicos capacitados, productos y servicios con precios transparentes, y <br /> repuestos originales de Ford, con garantía incluida.
              </p>
            </div>
          )}
          <div  className={`${style["pt-42"]} ${style["px-16"]}`}>
             <PostSaleSlider />
          </div>

        <FordWarranty />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
