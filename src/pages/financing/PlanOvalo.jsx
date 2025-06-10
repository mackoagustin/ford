import React from 'react';
import BannerFordCredit from '../../components/BannerFordCredit/BannerFordCredit';
import bannerData from "../../data/banners.json";
import styles from "./PlanOvalo.module.css";
import PlanOvaloSlider from '../../components/PlanOvaloSlider/PlanOvaloSlider';
import Form from '../../components/Form/Form';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import creditPlanes from '../../data/creditPlans.json';
import AdminPlanOvaloCardSlider from '../../components/AdminPlanOvaloCardSlider/AdminPlanOvaloCardSlider';
import adminPlanOvalo from '../../data/adminPlanOvalo.json';
import Accordion from '../../components/Accordion/Accordion';
import faqData from '../../data/faq.json';

function PlanOvalo() {
  const isMobile = useIsMobile();
  const selectedBanner = bannerData.banners[3]
  const items = creditPlanes.creditPlans;
  const adminPlanOvaloItems = adminPlanOvalo.adminPlanOvalo;

  const selectedAdminPlanIndices = [0, 1, 2]; 

  const faqGeneral = faqData.faq.filter(item => item.category === 'general');
  const faqEco = faqData.faq.filter(item => item.category === 'eco');
  const faqKa = faqData.faq.filter(item => item.category === 'ka');

  return (
    <div>
      <BannerFordCredit data = {selectedBanner} />

      <div className= {styles.px16}>
        <div className= {styles.wraperSection}>
           <h2 className='H2'> <span className='text-color-secondary'>Planes vigentes </span> de suscripción</h2>
       
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <PlanOvaloSlider items={items} />
      </div>

      <div className= {`${styles.px16} ${styles.wraperLegal}`}>
        <div className={styles.legalText}>
          <p className="body-1-16">*Los precios pueden sufrir modificaciones sin previo aviso. Imágenes no contractuales. </p>
        </div>
        <div className={styles.legalButton}>
        <Button
            as="a"
            href="https://www.autospecial.com.ar/legalesplanes"
            target="_blank"
            rel="noopener noreferrer"
            variant="quarter"
        >
          Legales
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

      {/* FAQ */}
      <div className={styles.faqWrapper}>
        <div className={styles.px16}>
          <div className={`${styles.wraperSection} ${styles.pt80}`}>
            <h2 className={`H2 ${styles.px16}`}>Información general</h2>
            <div>
                    {faqGeneral.map((item, index) =>(
                <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
                variant={index === 0 ? 'parent' : 'child'}
                />
              ))}
            </div>
          </div>
          <div className={`${styles.wraperSection} ${styles.pt80}`}>
            <h2 className={`H2 ${styles.px16}`}>Información importante clientes planes de ECOSPORT</h2>
            <div>
                {faqEco.map((item, index) =>(
                    <Accordion
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    variant={index === 0 ? 'parent' : 'child'}
                    />
                ))}
            </div>
          </div>
          <div className={`${styles.wraperSection} ${styles.pt80}`}>
            <h2 className={`H2 ${styles.px16}`}>Información importante clientes planes de KA, KA+ Y KA Freestyle</h2>
            <div>
                {faqKa.map((item, index) =>(
                    <Accordion
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    variant={index === 0 ? 'parent' : 'child'}
                    />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}></div>
      {/* Formulario de asesoramiento */}
      {isMobile ? (
          <div className={styles.wraper}>
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
          <div className={styles.wraper}>
            <h3 className={`H3 text-color-dark ${styles.mb0} `}>
              ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className={`body-1-16 text-color-neutral-500 ${styles.mt8}`}>
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <div>
              <Form />
            </div>
      
          </div>
        )}
      {/* Administración Plan Ovalo */}
      <div className= {styles.px16} style={{paddingTop: '80px'}}>
        <div className= {styles.wraperSection}>
          <h2 className='H2'>Administración <span className='text-color-secondary'>Plan Ovalo</span> </h2>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <AdminPlanOvaloCardSlider 
          items={adminPlanOvaloItems} 
          selectedIndices={selectedAdminPlanIndices} 
        />
      </div>



      <Footer />
    </div>
  )
}

export default PlanOvalo;
