import React from "react";
import styles from "./Select.module.css"; 

const Select = ({ label, name, value, onChange, options, placeholder, error, backgroundColor = "var(--color-neutral-100)" }) => {
  return (
    <div className={styles["select-group"]}>
      {label && (
        <div 
          className={styles["label-wrapper"]}
          style={{ backgroundColor }}
        >
          <label htmlFor={name} className={styles["label"]}>
            {label}
          </label>
        </div>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles["select-field"]} ${error ? styles["select-error"] : ""}`}
        style={{ backgroundColor }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((provincia) => (
          <option key={provincia} value={provincia}>
            {provincia}
          </option>
        ))}
      </select>
      {/* Chevron */}
      <div className={styles["select-chevron"]}>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  strokeWidth={2.4}
  stroke="currentColor"
  fill="none"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19 9l-7 7-7-7"
  />
</svg>


      </div>
      {error && (
        <span 
          className={styles["error-message"]}
          style={{ backgroundColor }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Select;
