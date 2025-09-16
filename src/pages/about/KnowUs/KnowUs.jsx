import React from 'react';
import { styles as style } from './index'
import Footer from '../../../components/Footer/Footer';
import BannerKnowUS from '../../../components/BannerKnowUs/BannerKnowUs';
import KnowUsSlider from '../../../components/KnowUsSlider/KnowUsSlider';
import bannerData from "../../../data/banners.json";
import useIsMobile from '../../../hook/useIsMobile';
import Button from "../../../components/Button/Button";


function KnowUs() {

  const selectedBanner = bannerData.banners[4]
  const isMobile = useIsMobile();

  return (
    <div>
      <BannerKnowUS  data = {selectedBanner}/>
      <div className={style.contentWrapper}>

      </div>
       {/* Texto de introducción */}
       {isMobile ? (
        <>
          <div className={`${style["pt-60"]} ${style["px-16"]}`}>
            <h3 className="H3 text-color-neutral-500">
              Somos <span className='text-color-secondary'>Auto Special Ford</span> un concesionario oficial premium con un respaldo de más de <span className='text-color-secondary'>20 años de trayectoria</span>. 
            </h3>
            <p className="text-color-neutral-500 body-1-16">
              Contamos con 5 sucursales ubicadas en Capital Federal y en Provincia de Buenos aires. Nuestro equipo está integrado por más de 100 profesionales con vocación al cliente. 
            </p>
          </div>

          <div className={`${style["pt-60"]} ${style["px-16"]}`}>
            <KnowUsSlider />
          </div>

          <div style={{padding: '32px 16px', margin: '0 auto'}}>
              <p className={`text-color-neutral-500 body-1-16 ${style.textCenter}`}>
                Nuestra misión es darle a nuestros clientes todas las facilidades para que la compra de su auto sea lo más confortable y grata posible. Queremos superarnos día a día manteniendo nuestros altos valores de responsabilidad social, niveles de calidad, atención al cliente y el precio más conveniente para uno.
              </p>
            </div>


          <div style= {{margin: '0 auto', textAlign: 'center', paddingTop: '48px', paddingBottom: '60px'}}>
            <Button
              as="a"
              href="https://www.lanacion.com.ar/"
              rel="noopener noreferrer"
              variant="primary"
            >
              Sumate al equipo
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
         

        </>
          
        ) : (
          <>
           <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className={`H3 text-color-neutral-500  ${style.textCenter}`}>
                Somos <span className='text-color-secondary'>Auto Special Ford</span> un concesionario oficial premium <br /> con un respaldo de más de <span className='text-color-secondary'>20 años de trayectoria</span>. 
              </h3>
              <p className={`text-color-neutral-500 body-1-16 ${style.textCenter}`}>
              Contamos con 5 sucursales ubicadas en Capital Federal y en Provincia <br /> de Buenos aires. Nuestro equipo está integrado por más de 100 profesionales con vocación al cliente. 
              </p>
            </div>

            <div style={{maxWidth: '1170px',paddingTop: '32px', margin: '0 auto'}}>
              <KnowUsSlider />
            </div>

            <div style={{maxWidth: '972px',paddingTop: '48px', margin: '0 auto'}}>
              <p className={`text-color-neutral-500 body-1-16 ${style.textCenter}`}>
                Nuestra misión es darle a nuestros clientes todas las facilidades para que la compra de su auto sea lo más confortable y grata posible. Queremos superarnos día a día manteniendo nuestros altos valores de responsabilidad social, niveles de calidad, atención al cliente y el precio más conveniente para uno.
              </p>
            </div>


            <div style= {{margin: '0 auto', textAlign: 'center', paddingTop: '48px'}}>
              <Button
                as="a"
                href="https://www.lanacion.com.ar/"
                rel="noopener noreferrer"
                variant="primary"
              >
                Sumate al equipo
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
           
          </>
        )}


      <Footer />
    </div>
  );
}

export default KnowUs;
