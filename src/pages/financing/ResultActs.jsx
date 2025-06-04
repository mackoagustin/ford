import styles from './AdjudicationActs.module.css';
import bannerData from '../../data/banners.json';
import useIsMobile from '../../hook/useIsMobile';
import BannerAdjudicationActs from '../../components/BannerAdjudicationActs/BannerAdjudicationsActs';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import AdminPlanOvaloCardSlider from '../../components/AdminPlanOvaloCardSlider/AdminPlanOvaloCardSlider';
import adminPlanOvalo from '../../data/adminPlanOvalo.json';

const ResultActs = () => {

    const selectedBanner = bannerData.banners[15];
    const isMobile = useIsMobile();
    const adminPlanOvaloItems = adminPlanOvalo.adminPlanOvalo;
    const selectedAdminPlanIndices = [2,0]; 

    return (
        <>
            <BannerAdjudicationActs data={selectedBanner} />
            {isMobile ? (
                <>
                    <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
                        <div>
                            <h3 className='H3 text-color-dark'>Descargá la información sobre ganadores todos los grupos del acto de adjudicación N°475.</h3>
                        </div>             
                    </div>
                    <div className={styles["px-16"]}>
                        <Button
                                as="a"
                                href="https://www.planovalo.com.ar/ovalo/Informacion/ResultadosActoAdjudicacion"
                                variant="primaryFull"
                            >
                            Resultados del acto
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
                    <div className={`${styles["px-16"]} ${styles["pt16"]}`}>
                        <Button
                                as="a"
                                href="https://www.planovalo.com.ar/ovalo/Informacion/ResultadosActoAdjudicacion"
                                variant="secondaryFull"
                            >
                            Resultados definitivo acto anterior
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
                    <div className={styles.wraperForm}>
                        <h3 className="H3 text-color-dark">
                        ¿Necesitás
                        <span className="text-color-secondary"> asesoramiento?</span>
                        </h3>
                        <p className="body-1-16 text-color-neutral-500">
                        Completá los datos y nos pondremos en contacto a la brevedad.
                        </p>
                        <Form />
                    </div>
                </>
            ) : (
                <>
                    <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
                        <div>
                            <h3 className='H3 text-color-dark text-center'>Descargá la información sobre ganadores todos <br /> los grupos del acto de adjudicación N°475.</h3>
                        </div>             
                    </div>

                    <div className={styles.wraperRow}>
                    <div className={styles["px-16"]}>
                        <Button
                                as="a"
                                href="https://www.planovalo.com.ar/ovalo/Informacion/ResultadosActoAdjudicacion"
                                variant="primaryFull"
                            >
                            Resultados del acto
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
                    <div className={`${styles["px-16"]}`}>
                        <Button
                                as="a"
                                href="https://www.planovalo.com.ar/ovalo/Informacion/ResultadosActoAdjudicacion"
                                variant="secondaryFull"
                            >
                            Resultados definitivo acto anterior
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
                    
                    <div className={styles.wraperForm}>
                        <h3 className="H3 text-color-dark">
                        ¿Necesitás
                        <span className="text-color-secondary"> asesoramiento?</span>
                        </h3>
                        <p className="body-1-16 text-color-neutral-500">
                        Completá los datos y nos pondremos en contacto a la brevedad.
                        </p>
                        <Form />
                    </div>
                </>
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

export default ResultActs;

