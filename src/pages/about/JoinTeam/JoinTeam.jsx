import React from 'react';
import { styles as style } from './index'
import Footer from '../../../components/Footer/Footer';
import BannerJoinTeam from '../../../components/BannerJoinTeam/BannerJoinTeam';
import bannerData from "../../../data/banners.json";
import useIsMobile from '../../../hook/useIsMobile';
import FormPdf from '../../../components/FormPdf/FormPdf';
import Button from '../../../components/Button/Button';

function JoinTeam() {
    const selectedBanner = bannerData.banners[5]
    const isMobile = useIsMobile();
  
    return (
      <div>
        <BannerJoinTeam  data = {selectedBanner}/>
        <div className={style.contentWrapper}>
  
        </div>

         {/* Texto de introducción */}
         {isMobile ? (
          <>
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H2 text-color-dark">
                  Nuestra <span className='text-color-secondary'>empresa</span> 
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
              Somos un grupo humano, con actuación en el rubro automotriz, orientados al servicio y la excelencia hacia nuestros clientes.
              </p>
            </div>
  
            <div className={style.wraperText}>
              <p className='text-color-neutral-500 body-1-16'>
                Si buscás crecer a nivel profesional, sentís que tenés potencial y muchas ganas de sumarte a una empresa en constante evolución, vos también podés formar parte de Auto Special.
              </p>
              <p className='text-color-neutral-500 body-1-16'>
                Brindamos la posibilidad de que dejes tus datos personales y experiencia laboral, los cuales pasarán a integrar nuestra base de datos de Recursos Humanos.
              </p>
              <p className='text-color-neutral-500 body-1-16'>
              Esta información será de uso confidencial y estará disponible para futuras búsquedas en las áreas a las que te postules.
              </p>
            </div>


            <div style= {{margin: '0 auto', textAlign: 'center', paddingTop: '48px', paddingBottom: '48px'}}>
              <Button
                as="a"
                href="/quienes-somos/conocenos"
                rel="noopener noreferrer"
                variant="primary"
              >
                Conocenos
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


            <div className={style.wraperForm}>
            <h3 className="H3 text-color-dark">
              Ponete en contacto con el 
              <span className="text-color-secondary"> departamento de RR.HH.</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
            Completá los datos, adjuntá tu CV y nos pondremos en contacto a la brevedad.
            </p>
            <FormPdf 
              origen="WEB AUTOSPECIAL" 
              suborigen="Sumate al Equipo - RR.HH." 
            />
          </div>
  
          </>
            
          ) : (
            <>
             <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H2 text-color-dark text-center">
                  Nuestra <span className='text-color-secondary'>empresa</span> 
              </h3>
              <p className="text-color-neutral-500 subtitle-20 text-center">
              Somos un grupo humano, con actuación en el rubro automotriz, orientados al <br/>servicio y la excelencia hacia nuestros clientes.
              </p>
            </div>
  
  
            <div className={style.wraperText}>
              <p className='text-color-neutral-500 body-1-16 text-center'>
                Si buscás crecer a nivel profesional, sentís que tenés potencial y muchas ganas de sumarte a una empresa en constante evolución, vos también podés formar parte de Auto Special.
              </p>
              <p className='text-color-neutral-500 body-1-16 text-center'>
                Brindamos la posibilidad de que dejes tus datos personales y experiencia laboral, los cuales pasarán a integrar nuestra base de datos de Recursos Humanos.
              </p>
              <p className='text-color-neutral-500 body-1-16 text-center'>
              Esta información será de uso confidencial y estará disponible para futuras búsquedas en las áreas a las que te postules.
              </p>
            </div>


            <div style= {{margin: '0 auto', textAlign: 'center', paddingTop: '48px', paddingBottom: '0px'}}>
              <Button
                as="a"
                href="/quienes-somos/conocenos"
                rel="noopener noreferrer"
                variant="primary"
              >
                Conocenos
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
            
            <div className={style.wraperForm} style={{borderRadius: '16px'}}>
            <h3 className="H3 text-color-dark">
              Ponete en contacto con el 
              <span className="text-color-secondary"> departamento de RR.HH.</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
            Completá los datos, adjuntá tu CV y nos pondremos en contacto a la brevedad.
            </p>
            <FormPdf 
              origen="WEB AUTOSPECIAL" 
              suborigen="Sumate al Equipo - RR.HH." 
            />
          </div>
            </>

           
          )}


  
        <Footer />
      </div>
       )
}   

export default JoinTeam;
