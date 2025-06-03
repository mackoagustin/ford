import React from 'react';
import Footer from '../../components/Footer/Footer';
import bannerData from '../../data/banners.json';
import useIsMobile from '../../hook/useIsMobile';
import BannerAdjudicationActs from '../../components/BannerAdjudicationActs/BannerAdjudicationsActs';
import styles from './AdjudicationActs.module.css';
import dibData from '../../data/dib.json';
import BidCardSlider from '../../components/BidCardSlider/BidCardSlider';
import AdminPlanOvaloCardSlider from '../../components/AdminPlanOvaloCardSlider/AdminPlanOvaloCardSlider';
import adminPlanOvalo from '../../data/adminPlanOvalo.json';
import Form from '../../components/Form/Form';

function AdjudicationActs() {
    const selectedBanner = bannerData.banners[14];
    const isMobile = useIsMobile();
    const dib = dibData.dib;
    const adminPlanOvaloItems = adminPlanOvalo.adminPlanOvalo;
    const selectedAdminPlanIndices = [1, 2]; 

    return (
        <>
        <BannerAdjudicationActs data={selectedBanner} />

        {/* Acto de Adjudicación */}
        {isMobile ? (
            <div className={`${styles["pt-60"]} ${styles["px-16"]} ${styles["pb-60"]}`}>
                <div className={styles.wraperCard}>
                    <p className="H2 text-color-white text-center">Llamado de <span className="text-color-primary">Acto de Adjudicación</span></p>
                    <p className='subtitle-20 text-color-white text-center'>El próximo Acto de Adjudicación se realizará el día:</p>
                    <p className="display4 text-color-primary text-center">13 mayo 2025</p>
                </div>

                <div className={styles.pt32}>
                    <h2 className="H2 text-color-dark">¿Qué es un Acto de Adjudicación?</h2>
                    <p className="subtitle-20 text-color-neutral-500">Los actos de adjudicación son una forma de adquirir un vehículo mediante un proceso de subasta pública. En estos actos, Ford ofrece una amplia variedad de modelos a precios accesibles. Además, contarás con toda la seguridad y garantía de adquirir un vehículo de un concesionario oficial Ford. ¡No pierdas la oportunidad de conseguir tu auto ideal en nuestros actos de adjudicación!</p>
                </div>
            </div>
        ) : (
            <div className={`${styles["pt-60"]} ${styles["px-16"]} ${styles["pb-60"]} ${styles.wraperSection}`}>
                <div className={styles.wraperCard}>
                    <p className="H2 text-color-white text-center">Llamado de <span className="text-color-primary">Acto de Adjudicación</span></p>
                    <p className='subtitle-20 text-color-white text-center'>El próximo Acto de Adjudicación se realizará el día:</p>
                    <p className="display4 text-color-primary text-center">13 mayo 2025</p>
                </div>

                <div className={styles.pt32}>
                    <h2 className={`H2 text-color-dark text-center ${styles.tittle}`}>¿Qué es un Acto de Adjudicación?</h2>
                    <p className="subtitle-20 text-color-neutral-500 text-center">Los actos de adjudicación son una forma de adquirir un vehículo mediante un proceso de subasta pública. En estos actos, Ford ofrece una amplia variedad de modelos a precios accesibles. Además, contarás con toda la seguridad y garantía de adquirir un vehículo de un concesionario oficial Ford. ¡No pierdas la oportunidad de conseguir tu auto ideal en nuestros actos de adjudicación!</p>
                </div>
            </div>
        )}

        {/* Licitar */}
        {isMobile ? (
            <div div className={`${styles["pt-60"]} ${styles["px-16"]} ${styles["pb-60"]} ${styles.back} ${styles.mt60}`}>
                <h2 className={`H2 text-color-dark ${styles.m0}`}>¿Queres <span className="text-color-secondary">licitar?</span></h2>
                <p className='subtitle-20 text-color-neutral-500'>Plan Ovalo ofrece tres formas para licitar:</p>
                <BidCardSlider items={dib} />
            </div>
        ) : (

            <div div className={`${styles["pt-60"]} ${styles["px-16"]} ${styles["pb-60"]} ${styles.back} ${styles.mt60}`}>
                <div className={styles.wraperBid}>
                    <h2 className={`H2 text-color-dark ${styles.m0}`}>¿Queres <span className="text-color-secondary">licitar?</span></h2>
                    <p className='subtitle-20 text-color-neutral-500'>Plan Ovalo ofrece tres formas para licitar:</p>
                    <BidCardSlider items={dib} />
                </div>  
            </div>
        )}

        {/* Formulario */}
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
        <div className= {styles.px16}>
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
        </>
    )
}

export default AdjudicationActs;