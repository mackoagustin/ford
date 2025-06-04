import React from "react";
import style from "./Textarea.module.css";

const Textarea = ({ label, name, value, onChange, placeholder, error }) => {
  return (
    <div className={style["textarea-wrapper"]}>
      {label && (
        <div className={style["label-wrapper"]}>
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
        <span className={style["error-message"]}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Textarea;
