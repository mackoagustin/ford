import React from 'react';
import { styles as style } from './index'
import Footer from '../../../components/Footer/Footer';
import BannerKnowUS from '../../../components/BannerKnowUs/BannerKnowUs';
import bannerData from "../../../data/banners.json";
import useIsMobile from '../../../hook/useIsMobile';
import Form from '../../../components/Form/Form';


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
            <h3 className="subtitle-20 text-color-neutral-500">
              Somos un Concesionario Ford Premium con un respaldo de más de 10 años de trayectoria.
            </h3>
            <p className="text-color-neutral-500 body-1-16">
            Nuestra misión es darle a nuestros clientes todas las facilidades para que la compra de su auto sea lo más confortable y grata posible.
            </p>
          </div>

          <div className={style.wraperImage}>
           <img src="/img/knowUs/people.png" alt="People Ford"  className= {style.image}/>
          </div>

          <div className={style.wraperText}>
            <p className=' text-color-neutral-500 body-1-16 '>En <span className='text-color-secondary'>Auto Special</span> contamos con un equipo preparado para ajustarse a lo que cada persona necesite, con un servicio de venta y postventa de automotores y tres sucursales en las zonas de Agronomía, Villa Pueyrredón y José Ingenieros.</p>
          </div>

          <div className={style.wraperText}>
            <p className='text-color-neutral-500 H3'>Queremos superarnos día a día manteniendo nuestros altos valores de <span className='text-color-secondary'>responsabilidad social</span>, niveles de <span className='text-color-secondary'>calidad, atención al cliente</span> y el <span className='text-color-secondary'>precio</span> más conveniente para uno.</p>
          </div>

          <div className={style.wraperForm}>
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

        </>
          
        ) : (
          <>
           <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className={`subtitle-20 text-color-neutral-500  ${style.textCenter}`}>
              Somos un Concesionario Ford Premium con un respaldo de más de 10 años de <br/> trayectoria.

              </h3>
              <p className={`text-color-neutral-500 body-1-16 ${style.textCenter}`}>
              Nuestra misión es darle a nuestros clientes todas las facilidades para que la compra de su auto sea lo <br/> más confortable y grata posible.
              </p>
            </div>

            <div className={style.wraperImage}>
              <img src="/img/knowUs/people.png" alt="People Ford"  className= {style.image}/>
              <img src="/img/knowUs/button.png" alt="People Ford"  className= {style.image}/>
            </div>

            <div className={style.wraperText}>
              <p className=' text-color-neutral-500 body-1-16 text-center '>En <span className='text-color-secondary'>Auto Special</span> contamos con un equipo preparado para ajustarse a lo que cada persona necesite, con un servicio de venta y postventa de automotores y tres sucursales en las zonas de Agronomía, Villa Pueyrredón y José Ingenieros.</p>
            </div>

            <div className={style.wraperText}>
              <p className='text-color-neutral-500 H3 text-center'>Queremos superarnos día a día manteniendo nuestros altos valores de <span className='text-color-secondary'>responsabilidad social</span>, niveles de <span className='text-color-secondary'>calidad, atención al cliente</span> y el <span className='text-color-secondary'>precio</span> más conveniente para uno.</p>
            </div>


            <div className={style.wraperForm}>
              <h3 className={`H3 text-color-dark ${style.mb0} `}>
                ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
              </h3>
              <p className={`body-1-16 text-color-neutral-500 ${style.mt8}`}>
                Completá los datos y nos pondremos en contacto a la brevedad.
              </p>
              <div>
                <Form />
              </div>
            </div>

          </>
        )}


      <Footer />
    </div>
  );
}

export default KnowUs;
