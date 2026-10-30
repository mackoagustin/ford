import React from "react";
import styles from './LocationCard.module.css';
// import Button from "../Button/Button";

const LocationCard = ({ location }) => {
  if (!location) {
    return <div>No location data available</div>;
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={location.image} alt="Location" />

      <div className={styles.info}>
        <div className={`${styles.locationName} H4`}>{location.location}</div>

        <div className={`${styles.address} body-1-16`}>
          <a
            href={location.google_maps_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            {location.address}
          </a>
        </div>

        {location.hours ? (
           <div className={`${styles.hours} body-1-16`}>
           <p style={{ fontWeight: '900' }}>Ventas</p>
           {location.hours.monday_friday}<br />
           {location.hours.saturday}
         </div>
        ) : null}
       

        {location.postventa ? (
          <div className={`${styles.postventa} body-1-16`}>
          <p style={{ fontWeight: '900' }}>Posventa</p>
          {location.postventa.day}
        </div>
        ) : null}
        

        <div className={styles.contact}>
          <div className="body-1-16">
            WhatsApp: 
            {location.workshop ? (
              <a 
              href={`https://wa.me/${location.workshop.whatsappNumberLink}?text=${encodeURIComponent(location.workshop.wsMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              style={{ 
                color: 'inherit', 
                textDecoration: 'underline',
                marginLeft: '4px'
              }}>
                {location.whatsapp}
              </a>
            ) : (
              <span style={{ marginLeft: '4px' }}>No disponible</span>
            )}
          </div>
          {location.whatsapp2 ? (
          <div className="body-1-16">
            WhatsApp: 
            {location.workshop ? (
              <a 
              href={`https://wa.me/${location.workshop.whatsappNumberLink2}?text=${encodeURIComponent(location.workshop.wsMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              style={{ 
                color: 'inherit', 
                textDecoration: 'underline',
                marginLeft: '4px'
              }}>
                {location.whatsapp2}
              </a>
            ) : (
                <span style={{ marginLeft: '4px' }}>No disponible</span>
              )}
            </div>
          ) : null}
          <div className="body-1-16"> tel:&nbsp;
            {location.phone ? (
              <a 
                href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'underline'
                }}
              >
                {location.phone}
              </a>
            ) : (
              <span>No disponible</span>
            )}
          </div>
          {/* <div className="body-1-16">{location.email}</div> */}
        </div>

       
      </div>
    </div>
  );
};

export default LocationCard;
