// src/pages/Home.jsx
import React from 'react';
import styles from './FAQ.module.css';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import BannerAdjudicationActs from '../../components/BannerAdjudicationActs/BannerAdjudicationsActs';
import Accordion from '../../components/Accordion/Accordion';
import faqData from '../../data/faq.json';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../../components/Button/Button';

function FAQ() {
  const selectedBanner = bannerData.banners[16];
  // Filtrar solo las preguntas de categoría "general"
  const faq = faqData.faq.filter(item => item.category === 'faq');
  const isMobile = useIsMobile();

  return (
    <>
      <BannerAdjudicationActs data={selectedBanner} />
      {isMobile ? (
        <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
          <p className={`${styles["pt-60"]} ${styles["px-16"]} H2 text-color-dark`}>Preguntas frecuentes</p>
        </div>
      ) : (
        <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
          <div className={styles.wraperText}>
          <p className={`${styles["pt-60"]} ${styles["px-16"]} H2 text-color-dark`}>Preguntas frecuentes</p>
          </div>
        </div>
      )}

      <div className={styles.wraperAccordion}>
        {faq.map((item, index) =>(
          <Accordion
          key={index}
          question={item.question}
          answer={item.answer}
          variant={index === 0 ? 'parent' : 'child'}
          />
        ))}
      </div>
   
      {isMobile ? (
         <div className={styles.wraperInfo}>
         <div className={styles.px16}>
           <h2 className={`H2 text-center ${styles.px16}`}>Manuales del propietario, garantías y más información</h2>
         </div>
 
         <div className={styles.wraperButton}>
           <Button
             as="a"
             href=""
             target="_blank"
             rel="noopener noreferrer"
             variant="primary"
           >
             Descargar manuales
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
      ) : (
        <div className={styles.wraperInfo}>
        <div className={styles.px16}>
          <h2 className={`H2 text-center ${styles.px16}`}>Manuales del propietario, garantías y más <br/> información</h2>
        </div>

        <div className={styles.wraperButton}>
          <Button
            as="a"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Descargar manuales
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
      )}
     

    <Footer />
    </>
  );
}

export default FAQ;
