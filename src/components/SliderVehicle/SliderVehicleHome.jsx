import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import vehiclesData from '../../data/vehicles.json';
import Chip from '../Chip/Chip';
import './SliderVehicle.css';
import useIsMobile from '../../hook/useIsMobile';

const SliderVehicleHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [vehicleCount, setVehicleCount] = useState(0);
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  // Categorías de visualización que quieres mostrar
  const displayCategories = [
    { key: 'todos', label: 'Todos', filterValue: 'todos' },
    { key: 'suvs', label: 'SUV\'s', filterValue: 'suv' },
    { key: 'pick-ups', label: 'Pick-Ups', filterValue: 'pick-up' },
    { key: 'deportivos', label: 'Deportivos', filterValue: 'deportivo' },
    { key: 'furgon', label: 'Furgón', filterValue: 'furgon' },
    { key: 'electrificados', label: 'Electrificados', filterValue: 'electrificado' },
    { key: 'ford-pro', label: 'Ford Pro', filterValue: 'fordPro' }
  ];

  useEffect(() => {
    // Filtrar vehículos por categoría seleccionada
    let filtered = selectedCategory === 'todos'
      ? vehiclesData.vehicles
      : vehiclesData.vehicles.filter(vehicle => {
          if (Array.isArray(vehicle.categories)) {
            return vehicle.categories.includes(selectedCategory);
          }
          return vehicle.category === selectedCategory;
        });
    
    // Reordenar específicamente para Home: Bronco primero, Territory segundo
    filtered = filtered.sort((a, b) => {
      if (a.id === "nueva_bronco") return -1;
      if (b.id === "nueva_bronco") return 1;
      if (a.id === "Nueva Territory") return -1;
      if (b.id === "Nueva Territory") return 1;
      return 0;
    });
    
    setFilteredVehicles(filtered);
    setVehicleCount(filtered.length);
    
    //  filtrar
    if (swiperRef.current && filtered.length > 0) {
      swiperRef.current.slideTo(1);
    }

    if (swiperRef.current && filtered.length <3) {
        swiperRef.current.slideTo(0);
      }

  }, [selectedCategory, vehiclesData.vehicles]);

  return (
    <div className="slider-vehicle-container">
      {isMobile ? (
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          className="chips-swiper"
        >
          {displayCategories.map((category) => (
            <SwiperSlide key={category.key} style={{ width: 'auto' }}>
              <Chip
                label={category.label}
                active={selectedCategory === category.filterValue}
                onClick={() => setSelectedCategory(category.filterValue)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="chips-container">
          {displayCategories.map((category) => (
            <Chip
              key={category.key}
              label={category.label}
              active={selectedCategory === category.filterValue}
              onClick={() => setSelectedCategory(category.filterValue)}
            />
          ))}
        </div>
      )}

      {/* Resultados */}
      <p className="result-count">
        {`Resultado: (${vehicleCount} ${vehicleCount === 1 ? 'vehículo)' : 'vehículos)'}`}
      </p>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        className="vehicle-swiper"
        watchSlidesProgress={true}
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
            centeredSlides: true
          }
        }}
      >
        {filteredVehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <a href={vehicle.detailLink} className="vehicle-slide" style={{textDecoration: 'none'}}>
              <img src={vehicle.image} alt={vehicle.title} className="vehicle-image" loading="lazy" />
              <div className="slide-content">
                <h3 className='H3'>{vehicle.title}</h3>
                <p className='body-1-16 text-color-neutral-500'>{vehicle.text}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderVehicleHome;
