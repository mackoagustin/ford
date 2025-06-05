import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import style from "./Form.module.css";
import { provinciasArgentinas} from "../../data/province";
import Textarea from "../Textarea/Textarea";
import useIsMobile from "../../hook/useIsMobile";


const Form = ({ backgroundColor = "var(--color-neutral-100)" }) => {
  const [formData, setFormData] = useState({
    name: "",
    cellphone: "",
    email: "",
    province: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Función para validar email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar teléfono (solo números, 8-10 dígitos)
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{8,10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Función para validar campos
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!validateEmail(value)) return 'Ingresa un email válido';
        return '';
      
      case 'cellphone':
        if (!value.trim()) return 'El teléfono es requerido';
        if (!validatePhone(value)) return 'Ingresa número válido';
        return '';
      
      case 'province':
        if (!value) return 'Selecciona una provincia';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  // Función para validar todo el formulario
  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (isSubmitted && errors[name]) {
      const fieldError = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    if (validateForm()) {
      console.log("Formulario válido, enviando:", formData);
      // Aquí puedes agregar la lógica para enviar el formulario
      alert("Formulario enviado correctamente!");
    } else {
      console.log("Formulario tiene errores:", errors);
    }
  };

  const isMobile = useIsMobile();

 return isMobile ? (
    <form 
      onSubmit={handleSubmit} 
      className={style["form-wraper"]}
      style={{ backgroundColor }}
    >
      <Input
        label="Nombre y apellido"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresá nombre y apellido"
        error={errors.name}
        backgroundColor={backgroundColor}
      />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@mail.com"
          error={errors.email}
          backgroundColor={backgroundColor}
        />
      <Input
        label="Teléfono/celular"
        name="cellphone"
        value={formData.cellphone}
        onChange={handleChange}
        placeholder="Nro. de teléfono (sin el 15)"
        error={errors.cellphone}
        backgroundColor={backgroundColor}
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
        error={errors.province}
        backgroundColor={backgroundColor}
      />
      <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
        error={errors.message}
        backgroundColor={backgroundColor}
      />
      <div className={style.checkboxWrapper}>
        <label className={style.customCheckbox}>
          <input type="checkbox" name="subscribe" />
          <span className={style.checkmark}></span>
          Acepto recibir información y novedades en mi email.
        </label>
      </div>

      <div className={style.buttonWrapper}>
        <Button type="submit" variant="primary">
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
  ) : (
    <form  
      onSubmit={handleSubmit} 
      className={style["form-wraper"]}
      style={{ backgroundColor }}
    >
      <div className={style.wraperInput}> 
        <Input
        label="Nombre y apellido"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresá nombre y apellido"
        error={errors.name}
        backgroundColor={backgroundColor}
      />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@mail.com"
          error={errors.email}
          backgroundColor={backgroundColor}
        />
      </div>

      <div className={style.wraperInput}>
        <Input
        label="Teléfono/celular"
        name="cellphone"
        value={formData.cellphone}
        onChange={handleChange}
        placeholder="Nro. de teléfono (sin el 15)"
        error={errors.cellphone}
        backgroundColor={backgroundColor}
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
        error={errors.province}
        backgroundColor={backgroundColor}
      />
      </div>
      <div className={style.wraperTextarea}>
          <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
        error={errors.message}
        backgroundColor={backgroundColor}
      />
      </div>
      
      <div className={style.checkboxWrapper}>
        <label className={style.customCheckbox}>
          <input type="checkbox" name="subscribe" />
          <span className={style.checkmark}></span>
          Acepto recibir información y novedades en mi email.
        </label>
      </div>

      <div className={style.buttonWrapper}>
        <Button type="submit" variant="primary">
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
