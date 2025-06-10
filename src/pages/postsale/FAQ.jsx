// src/pages/Home.jsx
import React from 'react';
import styles from './FAQ.module.css';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import BannerAdjudicationActs from '../../components/BannerAdjudicationActs/BannerAdjudicationsActs';
import Accordion from '../../components/Accordion/Accordion';
import faqData from '../../data/faq.json';
import useIsMobile from '../../hook/useIsMobile';

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
   


    <Footer />
    </>
  );
}

export default FAQ;
