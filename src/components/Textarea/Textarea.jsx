import React from "react";
import style from "./Textarea.module.css";

const Textarea = ({ label, name, value, onChange, placeholder, error, backgroundColor = "var(--color-neutral-100)" }) => {
  return (
    <div 
      className={style["textarea-wrapper"]}
      style={{ backgroundColor }}
    >
      {label && (
        <div 
          className={style["label-wrapper"]}
          style={{ backgroundColor }}
        >
          <label htmlFor={name} className={style["label"]}>
            {label}
          </label>
        </div>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${style["textarea-field"]} ${error ? style["textarea-error"] : ""}`}
        rows={4}
      />
      {error && (
        <span 
          className={style["error-message"]}
          style={{ backgroundColor }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Textarea;
