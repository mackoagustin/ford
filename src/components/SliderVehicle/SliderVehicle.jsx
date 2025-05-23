import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import vehiclesData from '../../data/vehicles.json';
import Chip from '../Chip/Chip';
import './SliderVehicle.css';

const SliderVehicle = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [vehicleCount, setVehicleCount] = useState(0);
  const swiperRef = useRef(null);

  // Obtener categorías únicas y agregar 'todos'
  const categories = ['todos', ...new Set(vehiclesData.vehicles.map(vehicle => vehicle.category))];

  useEffect(() => {
    // Filtrar vehículos por categoría seleccionada
    const filtered = selectedCategory === 'todos'
      ? vehiclesData.vehicles
      : vehiclesData.vehicles.filter(
          vehicle => vehicle.category === selectedCategory
        );
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
      <div className="chips-container">
        {categories.map((category) => (
          <Chip
            key={category}
            label={category === 'todos' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>

      {/* Resultados */}
      <p className="result-count">
        {selectedCategory === 'todos' ? 'Mostrando todos los vehículos' : `Resultado: ${vehicleCount}`}
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
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false
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
            spaceBetween: 30,
            centeredSlides: true
          }
        }}
      >
        {filteredVehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <div className="vehicle-slide">
              <img src={vehicle.image} alt={vehicle.title} />
              <h3>{vehicle.title}</h3>
              <p>{vehicle.text}</p>
              <div className="cta-buttons">
                <a href={vehicle.ctaPrimaryLink} className="primary-cta">
                  {vehicle.ctaPrimaryText}
                </a>
                <a href={vehicle.ctaSecondaryLink} className="secondary-cta">
                  {vehicle.ctaSecondaryText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderVehicle;
