import React from "react";
import styles from './WorkshopCard.module.css';
import Button from "../Button/Button";

const WorkshopCard = ({ item }) => {
  if (!item) {
    return <div>No location data available</div>;
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.image} alt="Location" />

      <div className={styles.info}>
        <div className={`${styles.locationName} H4`}>{item.location}</div>

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
            {item.workshop.responsible}<br />
            {item.workshop.email}<br />

            {item.workshop.whatsapp && (
                <>
                WhatsApp: {item.workshop.whatsapp} <br />
                </>
            )}
          
        </div>
        
        <div className={`${styles.hours} body-1-16 ${styles.pt16}`}>
            Turnos: {item.workshop.turnos}<br />
            WhatsApp: {item.workshop.whatsappTurnos} <br />
        </div>


        <div className={`${styles.hours} body-1-16 ${styles.pt16}`}>
          {item.hours.monday_friday}<br />
          {item.hours.saturday}
        </div>

        <div className={`${styles.hours} body-1-16 ${styles.pt16}`}>
          Tel: {item.workshop.phone}<br />
        </div>

        <div className={`${styles.buttonWrapper} ${styles.pt16}`}>
          <Button
            as="a"
            href={item.google_maps_link}
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
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
