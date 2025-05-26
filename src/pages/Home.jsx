// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import SliderVehicle from '../components/SliderVehicle/SliderVehicle';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from './Home.module.css';
import vehiclesData from '../data/vehicles.json';

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
      <Footer />
    </div>
  );
}

export default Home;
