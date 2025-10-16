import React from "react";
import styles from  "./PlanOvaloCard.module.css";
import Button from '../Button/Button';

const PlanOvaloCard = ( { item }) => {
    
  if (!item) {
    return <div>No data available</div>;
  }

  // Validar que features existe y es un array
  const features = Array.isArray(item.features) ? item.features : [];

  return (
    <div className= {styles.card}>
      <div className={styles.wrapperImageText}>
      <img  
        className={styles.image} 
        src={item.image} 
        alt= {item.title} 
        loading="lazy"
      />
      <div  className={styles.info}>
          <h3 className={`${styles.locationName} H3`}>{item.title}</h3>
          <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3px'}}>
                <p className="text-color-primary subtitle-20" >{item.text}</p>
                <p className="text-color-primary subtitle-20" style={{fontWeight: 'bold'}} >{item.price}</p>
              </div>
              <p className="text-color-primary subtitle-20"  >{item.cuotes}</p>
          </div>
          
         {features.length > 0 && (
          <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-secondary)', margin: '4px 0 4px 0' }}></div>
           )}

          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li 
              key={index} 
              className={`text-color-primary body-1-16 ${styles.featuresListLi}`} 
              >{feature}</li>
            ))}
          </ul>
          
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          as="a"
          href="#formulario-asesoramiento"
          rel="noopener noreferrer"
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('formulario-asesoramiento').scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
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
      
    </div>
  )
}

export default PlanOvaloCard




