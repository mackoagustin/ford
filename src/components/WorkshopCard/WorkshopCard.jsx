import React from "react";
import styles from './WorkshopCard.module.css';
import Button from "../Button/Button";

const WorkshopCard = ({ item }) => {
  if (!item) {
    return <div>No location data available</div>;
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} 
          src={item.image} 
          alt="Location" 
          loading="lazy"
          onClick={() => window.open(item.google_maps_link, '_blank')}
          style={{ cursor: 'pointer' }}
        />

      <div className={styles.info}>
        <div className={`${styles.locationName} H4`}>
          {item.locationWorkshop}
          <br />
          {item.locationWorshopName}
        </div>

        <div className={`${styles.address} body-1-16`}>
          <a
            href={item.google_maps_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.address}
          </a>
        </div>

        <div className={`${styles.hours} body-1-16 ${styles.pt16}`}>

            WhatsApp: 
            <a 
              href={`https://wa.me/${item.workshop.whatsappNumberLink2}?text=${encodeURIComponent(item.workshop.wsMessage)}`} 
              className={styles.whatsappLink}
            >
              {item.whatsapp2}
            </a>
        </div>
        <div className={`${styles.hours} body-1-16 `}>

          WhatsApp: 
          <a 
            href={`https://wa.me/${item.workshop.whatsappNumberLink}?text=${encodeURIComponent(item.workshop.wsMessage)}`} 
            className={styles.whatsappLink}
          >
            {item.whatsapp}
          </a>
          </div>
        
        <div className={`${styles.hours} body-1-16 ${styles.pt16}`}>
        Tel:  
        <a href={`tel:${item.workshop.phone}`} className={styles.phoneLink}>
         {item.workshop.phone}
        </a>
        <br />
        </div>


        
      </div>
    </div>
  );
};

export default WorkshopCard;
