import React from 'react';
import Footer from '../components/Footer/Footer';
import termsContent from '../data/terminosCondiciones.html?raw';
import styles from './TermsAndConditions.module.css';

function TermsAndConditions() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: termsContent }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
