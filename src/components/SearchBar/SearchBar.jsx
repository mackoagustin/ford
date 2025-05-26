import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import vehiclesData from '../../data/vehicles.json';
import useIsMobile from '../../hook/useIsMobile';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    
    // Filtrar vehículos 
    const filtered = vehiclesData.vehicles.filter(vehicle => 
      vehicle.title.toLowerCase().includes(value.toLowerCase())
    );
    
    setFilteredVehicles(filtered);
    setShowResults(value.length > 0);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(`.${styles.searchContainer}`)) {
      setShowResults(false);
    }
  };

  const handleResultClick = (detailLink) => {
    navigate(detailLink);
    setShowResults(false);
    setSearchText('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
   
  <div className={styles.flexCol}>
    <div className={styles.searchContainer}>
      <div className={styles.searchInputContainer}>
        <div className={styles.searchContent}>
          <img src="/icons/icon/search.png" alt="" className={styles.searchIcon} />
          <input
            type="text"
            className={`${styles.searchInput} body-1-14`}
            placeholder="Buscá un vehículo"
            value={searchText}
            onChange={handleSearchChange}
            onFocus={() => setShowResults(searchText.length > 0)}
          />
        </div>
      </div>
      <a href="/vehiculos" className={styles.showAllButton}>
        <span className={`${styles.showAllText} body-1-14`}>Mostrar todos</span>
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
      </a>
      {showResults && (
        <div className={styles.searchResults}>
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle, index) => (
              <div 
                key={index} 
                className={`${styles.resultItem} body-1-14`}
                onClick={() => handleResultClick(vehicle.detailLink)}
              >
                {vehicle.title}
              </div>
            ))
          ) : (
            <div className={`${styles.noResults} body-1-14`}>No se encontraron resultados</div>
          )}
        </div>
      )}
    </div>
    <div className= {styles.flexRow}>
      <a href="/vehiculos" className={styles.showAllButtonMo}>
        <span className={`${styles.showAllText} body-1-14`}>Mostrar todos</span>
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
      </a>
    </div>
   
    </div>
    
  );
};

export default SearchBar; 