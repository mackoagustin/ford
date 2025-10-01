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
          >
            {location.address}
          </a>
        </div>

        <div className={`${styles.hours} body-1-16`}>
          {location.hours.monday_friday}<br />
          {location.hours.saturday}
        </div>

        <div className={styles.contact}>
          <div className="body-1-16">
            WhatsApp: 
            {location.whatsapp ? (
              <a 
                href={`https://wa.me/${location.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'underline',
                  marginLeft: '4px'
                }}
              >
                {location.whatsapp}
              </a>
            ) : (
              <span style={{ marginLeft: '4px' }}>No disponible</span>
            )}
          </div>
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

        {/* <div className={styles.buttonWrapper}>
          <Button
            as="a"
            href={location.google_maps_link}
            rel="noopener noreferrer"
            variant="secondary"
          >
            Abrir en maps
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
        </div> */}
      </div>
    </div>
  );
};

export default LocationCard;
