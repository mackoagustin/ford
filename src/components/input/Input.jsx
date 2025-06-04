import React from "react";
import style from "./Input.module.css";

const Input = ({ label, name, value, onChange, placeholder, type = "text", error }) => {
  return (
      <div className={style["custom-input"]}>
        <div className={style["label-wrapper"]}>
          <label htmlFor={name} className={`${style.label} body-1-12`}>
            {label}
          </label>
        </div>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${style["input-field"]} ${error ? style["input-error"] : ""}`}
        />
        {error && (
          <span className={style["error-message"]}>
            {error}
          </span>
        )}
      </div>
  );
};

export default Input;
