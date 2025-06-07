// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import SliderVehicle from '../components/SliderVehicle/SliderVehicle';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from './Home.module.css';
import vehiclesData from '../data/vehicles.json';
import BannerHome from '../components/BannerHome/BannerHome';
import useIsMobile from '../hook/useIsMobile';
import PostSaleSlider from '../components/PostSaleSlider/PostSaleSlider';
import Map from '../components/Map/Map';
import Button from '../components/Button/Button';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData.vehicles);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchResults = (results) => {
    setFilteredVehicles(results);
  };

  return (
    <div className={styles['home-container']}>
      <div className={styles['search-section']}>
        <SearchBar isMobile={isMobile} onSearchResults={handleSearchResults} />
      </div>
      <div className={styles['slider-section']}>
        <SliderVehicle vehicles={filteredVehicles} />
      </div>

      <BannerHome />

      <div className={styles.contentWrapper}>
        {isMobile ? (
          <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
            <h3 className="H3">
              Estamos cerca tuyo, para <span className="text-color-secondary">cuidar </span> de tu ford{" "}
              <span className="text-color-secondary">como lo harías vos</span> 
            </h3>
            <p className="text-color-neutral-500 subtitle-20">
              Técnicos capacitados, productos y servicios con precios transparentes, y repuestos originales de Ford, con garantía incluida.
            </p>
          </div>
        ) : (
          <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
            <h3 className={`H3 ${styles.textCenter}`}>
              Estamos cerca tuyo, para <span className="text-color-secondary">cuidar</span> de tu Ford{" "}
              <br />
              <span className="text-color-secondary">como lo harías vos</span>
            </h3>
            <p className={`text-color-neutral-500 subtitle-20 ${styles.textCenter}`}>
              Técnicos capacitados, productos y servicios con precios transparentes, y <br /> repuestos originales de Ford, con garantía incluida.
            </p>
          </div>
        )}
        <div className={`${styles["pt-42"]} ${styles["px-16"]}`}>
          <PostSaleSlider limit={3} specificIndexes={[5, 0, 4]} />
        </div>


        {isMobile ? (
           <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.wraperButton}`}>
           <Button 
             variant="sixth" 
             href="/postventa/servicios">
               Mostrar todos
               <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     strokeWidth={2.4}
                     stroke="currentColor"
                     fill="none"
                 >
                     <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M8.25 4.5L15.75 12 8.25 19.5"
                     />
                 </svg>   
           </Button>
         </div>
        ) : (
          <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.wraperButton}`}>
          <Button 
            variant="sixth" 
            href="/postventa/servicios">
              Mostrar todos
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth={2.4}
                    stroke="currentColor"
                    fill="none"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5L15.75 12 8.25 19.5"
                    />
                </svg>   
          </Button>
        </div>
        )}
       
        
      </div>

      <Map />

      <Footer />
    </div>
  );
}

export default Home;
