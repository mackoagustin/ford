import React from "react";
import styles from './KnowUsCard.module.css';
import Button from "../Button/Button";

const KnowUsCard = ({ knowUs }) => {
  if (!knowUs) {
    return <div>No knowUs data available</div>;
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={knowUs.image} alt="Know Us" />

      <div className={styles.info}>
        <div className={`${styles.locationName} H5`}>{knowUs.title}</div>

        <div className={`${styles.address} body-1-16`}>
          <a
            href={knowUs.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {knowUs.linkDetail}
          </a>
        </div>

        {/* <div className={styles.buttonWrapper}>
          <Button
            as="a"
            href={knowUs.link}
            rel="noopener noreferrer"
            variant="secondary"
          >
            Ver más
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

export default KnowUsCard;
