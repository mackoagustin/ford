import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import style from "./FormPdf.module.css";
import { provinciasArgentinas} from "../../data/province";
import Textarea from "../Textarea/Textarea";
import useIsMobile from "../../hook/useIsMobile";


const FormPdf = () => {
  const [formData, setFormData] = useState({
    name: "",
    cellphone: "",
    email: "",
    province: "",
    message: "",
    pdfFile: null
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

  // Función para validar archivo
  const validateFile = (file) => {
    if (!file) return 'El archivo es requerido';
    
    // Validar tipo de archivo
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return 'Formato de archivo no válido. Solo se permiten PDF, DOC, DOCX, JPG';
    }
    
    // Validar tamaño (3MB = 3 * 1024 * 1024 bytes)
    const maxSize = 3 * 1024 * 1024;
    if (file.size > maxSize) {
      return 'El archivo es muy grande. Máximo 3MB';
    }
    
    return '';
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
      
      case 'pdfFile':
        return validateFile(value);
      
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, pdfFile: file });
    
    // Validar archivo en tiempo real si ya se intentó enviar
    if (isSubmitted) {
      const fileError = validateFile(file);
      setErrors(prev => ({
        ...prev,
        pdfFile: fileError
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
    <form onSubmit={handleSubmit} className={style["form-wraper"]}>
      <Input
        label="Nombre y apellido"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresá nombre y apellido"
        error={errors.name}
      />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@mail.com"
          error={errors.email}
        />
      <Input
        label="Teléfono/celular"
        name="cellphone"
        value={formData.cellphone}
        onChange={handleChange}
        placeholder="Nro. de teléfono (sin el 15)"
        error={errors.cellphone}
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
        error={errors.province}
      />

      {/* Campo de carga de PDF con diseño personalizado */}
      <div className={`${style.fileWrapper} ${errors.pdfFile ? style.error : formData.pdfFile && !errors.pdfFile ? style.success : ''}`}>
        <div className={style.fileIcon}>
            <img src="/icons/icon/upload.png" alt="upload"/>
        </div>
        <div className={style.fileText}>
          <span className={style.fileTextLink}>Cargar</span>
          <span className={style.fileTextNeutral}> </span>
          <span className={style.fileTextDark}>archivo PDF, DOC, DOCX, JPG<br/></span>
          <span className={style.fileTextNeutral}>(max. 3MB)</span>
        </div>
        <input
          type="file"
          name="pdfFile"
          accept=".pdf,.doc,.docx,.jpg,.jpeg"
          onChange={handleFileChange}
          className={style.fileInput}
        />
        {formData.pdfFile && !errors.pdfFile && (
          <div className={style.fileSuccess}>
            <svg className={style.checkIcon} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Archivo cargado: {formData.pdfFile.name}
          </div>
        )}
        {errors.pdfFile && (
          <span className={style.fileError}>{errors.pdfFile}</span>
        )}
      </div>

      <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
        error={errors.message}
      />
      
      

      <div className={style.buttonWrapper}>
        <Button type="submit" variant="primary">
          Enviar
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
    <form  onSubmit={handleSubmit} className={style["form-wraper"]}>
      <div className={style.wraperInput}> 
        <Input
        label="Nombre y apellido"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingresá nombre y apellido"
        error={errors.name}
      />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@mail.com"
          error={errors.email}
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
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
        error={errors.province}
      />
      </div>

       {/* Campo de carga de PDF con diseño personalizado */}
       <div className={`${style.fileWrapper} ${errors.pdfFile ? style.error : formData.pdfFile && !errors.pdfFile ? style.success : ''}`}>
        <div className={style.fileIcon}>
            <img src="/icons/icon/upload.png" alt="upload"/>
        </div>
        <div className={style.fileText}>
          <span className={style.fileTextLink}>Cargar</span>
          <span className={style.fileTextNeutral}> </span>
          <span className={style.fileTextDark}>archivo PDF, DOC, DOCX, JPG<br/></span>
          <span className={style.fileTextNeutral}>(max. 3MB)</span>
        </div>
        <input
          type="file"
          name="pdfFile"
          accept=".pdf,.doc,.docx,.jpg,.jpeg"
          onChange={handleFileChange}
          className={style.fileInput}
        />
        {formData.pdfFile && !errors.pdfFile && (
          <div className={style.fileSuccess}>
            <svg className={style.checkIcon} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Archivo cargado: {formData.pdfFile.name}
          </div>
        )}
        {errors.pdfFile && (
          <span className={style.fileError}>{errors.pdfFile}</span>
        )}
      </div>

      
      <div className={style.wraperTextarea}>
          <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
        error={errors.message}
      />
      </div>
      
     
      <div className={style.buttonWrapper}>
        <Button type="submit" variant="primary">
          Enviar 
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


export default FormPdf;
