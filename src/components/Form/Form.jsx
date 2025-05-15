import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import style from "./Form.module.css";
import { provinciasArgentinas} from "../../data/province";
import Textarea from "../Textarea/Textarea";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    cellphone: "",
    email: "",
    province: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className= {style["form-wraper"]} >
      <Input
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresá tu nombre"
      />
      <Input
        label="Apellido"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Ingresá tu apellido"
      />
      <Input
        label="Teléfono/celular"
        name="cellphone"
        value={formData.cellphone}
        onChange={handleChange}
        placeholder="Nro. de teléfono (sin el 15)"
      />
      <Input
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="nombre@mail.com"
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
      />
      <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
      />
      <div className={style.checkboxWrapper}>
        <label className={style.customCheckbox}>
          <input type="checkbox" name="subscribe" />
          <span className={style.checkmark}></span>
          Acepto recibir información y novedades en mi email.
        </label>
      </div>


      <div className={style.buttonWrapper}>
        <Button
          as="a"
          href=""
          variant="primary"
        >
          Enviar consulta
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
              d="M8.25 4.5L15.75 12 8.25 19.5"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
};

export default Form;
