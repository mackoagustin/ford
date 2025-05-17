import React from 'react';
import styles from './Chip.module.css';

export default function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      data-property-1={active ? 'Selected' : 'Default'}
      className={`${styles.chip} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
    >
      <div className={styles.inner}>
        <div className={styles.text}>{label}</div>
      </div>
    </button>
  );
}
