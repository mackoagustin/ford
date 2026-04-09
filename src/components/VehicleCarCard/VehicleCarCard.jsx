import React, { useState } from "react";
import styles from './VehicleCarCard.module.css';
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
// import QuoterModal from "../QuoterModal/QuoterModal";

const VehiclesCard = ( { item }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!item) {
    return <div className= {styles.Button}>No data available</div>;
  }

  const pathSegment = item.slug ?? item.id;

  const handleClick = () => {
    navigate(`/vehiculos/${pathSegment}`);
  };

  const handleImageClick = () => {
    navigate(`/vehiculos/${pathSegment}`);
  };

  return (
    <div className= {styles.card}>
        <img  
          className={styles.image} 
          src={item.image} 
          alt= {item.title} 
          loading="lazy"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
        <div  className={styles.info}>
            <h4 className={`${styles.locationName} H4`} style={{ marginTop: '0px', marginBottom: '0px' }}>{item.title}</h4>
            <p className="text-color-neutral-600 body-1-16"  style={{ marginTop: '0px', marginBottom: '0px' }}>{item.text}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            as="a"
            href={`/vehiculos/${pathSegment}`}
            rel="noopener noreferrer"
            variant="primary"
          >
            {item.ctaPrimaryText}
          </Button> 
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('formulario-asesoramiento').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            {item.ctaSecondaryText}
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
        {/* <QuoterModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
 
  );
};

export default VehiclesCard;
