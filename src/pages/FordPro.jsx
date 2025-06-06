// src/pages/FordPro.jsx
import React, { useState } from 'react';
import BannerFordPro from '../components/BannerFordPro/BannerFordPro';
import FordProVehicleSlider from '../components/FordProVehicleSlider/FordProVehicleSlider';
import FordProSlider from '../components/FordProSlider/FordProSlider';
import style from './FordPro.module.css';
import useScreenSize from '../hook/useScreenSize';
import vehicleData from '../data/vehicles.json';
import fordProtData from '../data/fordPro.json';
import Chip from '../components/Chip/Chip';
import Footer from '../components/Footer/Footer';

function FordPro() {
  const screenSize = useScreenSize();

  const allFordProItems = fordProtData.fordPro;

  const [selectedItem, setSelectedItem] = useState(allFordProItems[0].title);

  const displayedItems = allFordProItems.filter(item => item.title === selectedItem);

  const itemNames = allFordProItems.map(item => item.title);

  const fordProVehicles = vehicleData.vehicles.filter(v => v.fordPro === true);

  return (
    <div>
      <BannerFordPro />
      <div className={style.wraperBody}>
        <div className={style.contentWrapper}>
          {screenSize === 'mobile' ? (
            <>
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H3">
                ¿Qués es <span className="text-color-secondary"> Ford Pro™?</span>
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
                Ford Pro es un ecosistema que incluye pilares de productos y servicios, diseñados para satisfacer las necesidades del cliente comercial. Toda la innovación, tecnología y conectividad de Ford Pro ayudarán a acelerar la productividad del cliente comercial y a mantener su negocio siempre en movimiento.
              </p>
            </div>

            <div className={`${style.wraperVideo} ${style["px-16"]}`}>
              <iframe
              src="https://www.youtube.com/embed/Gkd5tqGb2EU?si=xXaKq3u39T68RtKm&controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '971px',
                maxHeight: '546px',
                minWidth: '32px',
                minHeight: '250px'
              }}
              ></iframe>
            </div>
            </>
          ) : (
            <>
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
                  <h3 className={`H3 ${style.textCenter}`}>
                    ¿Qués es <span className="text-color-secondary"> Ford Pro™?</span>
                  </h3>
                  <p className={`text-color-neutral-500 subtitle-20 ${style.textCenter}`}>
                    Ford Pro es un ecosistema que incluye pilares de productos y servicios, diseñados para satisfacer las necesidades del cliente comercial. Toda la innovación, tecnología y conectividad de Ford Pro ayudarán a acelerar la productividad del cliente comercial y a mantener su negocio siempre en movimiento.
                  </p>
              </div>

              <div className={style.wraperVideo}>
              <iframe
              src="https://www.youtube.com/embed/Gkd5tqGb2EU?si=xXaKq3u39T68RtKm&controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: '100%',
                maxWidth: '971px',
                height: '546px'
              }}
              ></iframe>
            </div>
              </>
          )}
        </div>
        

 
        

        <div className={style.contentWrapper}>
          {screenSize === 'mobile' ? (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className="H3">
                ¿Cuáles son los
                <span className="text-color-secondary"> pilares </span>
                que forman
                <span className="text-color-secondary"> Ford Pro? </span>
              </h3>
              <p className="text-color-neutral-500 subtitle-20">
                Ford Pro se compone de distintos pilares que dan soporte al cliente comercial, ya sea un pequeño o mediano emprendedor o un gran flotista, entregando soluciones completas que van desde la adquisición, uso diario hasta la renovación del vehículo o la flota.
              </p>
            </div>
          ) : (
            <div className={`${style["pt-60"]} ${style["px-16"]}`}>
              <h3 className={`H3 ${style.textCenter}`}>
                ¿Cuáles son los
                <span className="text-color-secondary"> pilares </span>
                que forman
                <span className="text-color-secondary"> Ford Pro? </span>
              </h3>
              <p className={`text-color-neutral-500 subtitle-20 ${style.textCenter}`}>
                Ford Pro se compone de distintos pilares que dan soporte al cliente comercial, ya sea un pequeño o mediano emprendedor o un gran flotista, entregando soluciones completas que van desde la adquisición, uso diario hasta la renovación del vehículo o la flota.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {screenSize === 'mobile' ? (
        <>
          <div className={`${style["pt-42"]} ${style["px-16"]} ${style.sliderContainer}`}>
            <FordProSlider data={allFordProItems} />
          </div>
          <div className={`${style["pt-42"]} ${style["px-16"]} ${style.sliderContainer}`}>
            <FordProVehicleSlider data={fordProVehicles} />
          </div>
        </>
      ) : (
        <>
          <div className={`${style["pt-42"]} ${style["px-16"]} ${style.chipContainer}`}>
            {itemNames.map(name => (
              <Chip
                key={name}
                label={name}
                active={name === selectedItem}
                onClick={() => setSelectedItem(name)}
              />
            ))}
          </div>
          <div className={`${style["pt-42"]} ${style["px-16"]} ${style.sliderContainer}`} >
            <FordProSlider data={displayedItems} />
          </div>

          
          <div className={`${style["pt-42"]} ${style["px-16"]} ${style.sliderContainer}`} >
          <div className= {style.wraperSection}>
            <h2 className='H2'>Vehículos <span className='text-color-secondary'>Ford Pro™</span> </h2>
          </div>
            <FordProVehicleSlider data={fordProVehicles} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default FordPro;
