import React from "react";
import styles from "./FordPassApp.module.css";

const FordPassApp = () => {
  return (
    <div className={styles.container} id="ford-pass-app">
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <div className={styles.title}>
              <p className={styles.titleWhite}>
                ¿Sabés que podés autoagendarte desde la  <span className={styles.titleBlue}>app Ford? </span>
              </p>
             
            </div>
          </div>
          
          <div className={styles.descriptionGroup}>
            <div className={styles.description}>
              Así es, y además podés pedir con Pickup & Delivery que te lo pasemos a buscar y una vez hecho el servicio te lo llevemos.
              <span className={styles.desktopText}>
            
                Descargá la app:
              </span>
            </div>
          </div>

       
          
          <div className={styles.appButtons}>
          <a href="https://apps.apple.com/us/app/ford/id1095418609" target="_blank">
          <img src="/img/system/ios.png" alt="iOS App Store" className={styles.appleIcon} />
          </a>
          
          <a href="https://play.google.com/store/apps/details?id=com.ford.fordpass" target="_blank">
          <img src="/img/system/android.png" alt="iOS App Store" className={styles.appleIcon} />
          </a>
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default FordPassApp;
