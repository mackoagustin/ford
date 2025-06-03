import React, { useState } from 'react';
import BannerFordCredit from '../../components/BannerFordCredit/BannerFordCredit';
import bannerData from "../../data/banners.json";
import styles from "./FordCredit.module.css";
import PlanOvaloSlider from '../../components/PlanOvaloSlider/PlanOvaloSlider';
import Form from '../../components/Form/Form';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import FinanceSlider from '../../components/FinanceSlider/FinanceSlider';
import Chip from '../../components/Chip/Chip';
import financing from '../../data/fordCredit.json';


function FordCredit() {
  const isMobile = useIsMobile();
  const selectedBanner = bannerData.banners[13]
  const items = financing.credit;
  const finance = financing;
  const [selectedBenefit, setSelectedBenefit] = useState(0);


  return (
    <div>
      <BannerFordCredit data = {selectedBanner} />

      <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
        <p className="text-color-neutral-500 subtitle-20">Descubrí las oportunidades del mes y conocé las formas de financiamiento más convenientes para vos.</p>
      </div>

      <div className= {styles.px16}>
        <div className= {styles.wraperSection}>
           <h2 className='H2'> <span className='text-color-secondary'>Oportunidades </span> del mes</h2>
       
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <PlanOvaloSlider items={items} />

       
      </div>

     
      <div className={`${styles.legalButton} ${styles.px16}`}>        <Button
            as="a"
            href="https://www.autospecial.com.ar/legalesplanes"
            target="_blank"
            rel="noopener noreferrer"
            variant="quarter"
        >
          Ver Legales
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


    
      {isMobile ? (
        <div className={`${styles["background-color-neutral-100"]}  ${styles["pt-60"]} ${styles["pb-60"]}`}>
          <div className= {styles["px-16"]}>
            <h3 className='H3'>¿Por qué <span className="text-color-secondary">financiar?</span></h3>
            <p className='subtitle-16 text-color-neutral-500'>Si estás pensando en comprar un vehículo nuevo, Ford te acerca diferentes formas de financiación que se adaptan a todas las necesidades. Realizando un pago inicial como anticipo, te ofrecemos la posibilidad de financiar hasta un 60% en un plazo de hasta 60 meses, con cuotas fijas en pesos y sin gastos de otorgamiento.</p>
          </div>
         
          <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
                <FinanceSlider data={finance} />
          </div>
        </div>

       
      ) : (
        <div className={styles.sliderBenefits}>
          <div className= {`${styles["px-16"]} ${styles.wraperTitle}`}>
            <h3 className='H3'>¿Por qué <span className="text-color-secondary">financiar?</span></h3>
            <p className='subtitle-20 text-color-neutral-500 text-center'>Si estás pensando en comprar un vehículo nuevo, Ford te acerca diferentes formas de financiación que se adaptan a todas las necesidades. Realizando un pago inicial como anticipo, te ofrecemos la posibilidad de financiar hasta un 60% en un plazo de hasta 60 meses, con cuotas fijas en pesos y sin gastos de otorgamiento.</p>
          </div>
        <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.chipContainer}`}>
           {finance.credit.map((item, index) => (
               <Chip
                   key={index}
                   label={item.financing.vehicle}
                   active={index === selectedBenefit}
                   onClick={() => setSelectedBenefit(index)}
               />
           ))}
            </div>
            <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
                <FinanceSlider data={[finance.credit[selectedBenefit]]} />
            </div>
        </div>

      )}







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
      <Footer />
    </div>
  )
}

export default FordCredit;
