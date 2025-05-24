import React from "react";
import styles from  "./FordCreditCarCard.module.css";
import Button from '../Button/Button';

const FordCredirCarCard = ( { item }) => {
    
  if (!item) {
    return <div>No data available</div>;
  }
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
        <p className="text-color-neutral-600 body-1-16" >{item.subtitle}</p>
        <ul className={styles.featuresList}>
            {item.features.map ((feature, index) => (
                <li key={index} className="text-color-neutral-600 body-1-16">
                    <span className={styles.bullet}>•</span>
                    {feature}
                </li>
            ))}
        </ul>
    </div>
    <div className={styles.buttonWrapper}>
      <Button
        as="a"
        href={item.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
      >
        {item.ctaText}
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
  )
}

export default FordCredirCarCard




