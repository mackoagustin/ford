import React from 'react';
import BannerFordCredit from '../../components/BannerFordCredit/BannerFordCredit';
import bannerData from "../../data/banners.json";
import styles from "./FordCredit.module.css";
import FordCreditCarCardSlider from '../../components/FordCreditCardCardSlider/FordCreditCarCardSlider';
 

function FordCredit() {

  const selectedBanner = bannerData.banners[3]

  return (
    <div>
      <BannerFordCredit data = {selectedBanner} />

      <div className= {styles.px16}>
        <div className= {styles.wraperSection}>
           <h2 className='H2'> <span className='text-color-secondary'>Planes vigentes </span> de suscripción</h2>
       
        </div>
      </div>

      <FordCreditCarCardSlider />

    </div>
  )
}

export default FordCredit;
