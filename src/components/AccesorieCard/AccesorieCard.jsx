import React from "react";
import styles from './AccesorieCard.module.css';
import { useNavigate } from "react-router-dom";

const AccesorieCard = ( { item }) => {
  const navigate = useNavigate();

  if (!item) {
    return <div className= {styles.Button}>No data available</div>;
  }

  const handleClick = () => {
    navigate(`/vehiculos/${item.id}`);
  };

  return (
    <div className= {styles.card}>
        <img  
          className={styles.image} 
          src={item.image} 
          alt= {item.title} 
          loading="lazy"
        />
        <div  className={styles.info}>
            <h4 className={`${styles.locationName} H4`}>{item.title}</h4>
            <p className="text-color-neutral-600 body-1-16" >{item.text}</p>
        </div> 
    </div>
 
  );
};

export default AccesorieCard;
 