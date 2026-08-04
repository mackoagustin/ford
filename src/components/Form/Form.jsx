import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import style from "./Form.module.css";
import { provinciasArgentinas} from "../../data/province";
import vehiclesData from "../../data/vehicles.json";
import Textarea from "../Textarea/Textarea";
import useIsMobile from "../../hook/useIsMobile";
import useFormSubmit from "../../hooks/useFormSubmit";
import { useNavigate } from "react-router-dom";


const Form = ({ 
  backgroundColor = "var(--color-neutral-100)",
  origen = "WEB AUTOSPECIAL",
  suborigen = "Formulario General",
  showCuit = false,
  onlyFordProVehicles = false
}) => {
  const [formData, setFormData] = useState({
    name: "",
    cellphone: "",
    email: "",
    cuit: "",
    province: "",
    vehicle: "",
    message: "",
    origen: origen,
    suborigen: suborigen
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hook para manejar envío al backend
  const { submitForm, loading, error: submitError, success, resetState } = useFormSubmit();
  const navigate = useNavigate();

  // Función para validar email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para validar teléfono (más flexible, 8-12 dígitos)
  const validatePhone = (phone) => {
    // Eliminar espacios, guiones y paréntesis
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    // Aceptar números de 8 a 12 dígitos
    const phoneRegex = /^\+?\d{8,12}$/;
    return phoneRegex.test(cleanPhone);
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

      case "cuit":
        if (!showCuit) return "";
        if (!value.trim()) return "El CUIT es requerido";
        if (!/^\d{11}$/.test(value.replace(/\D/g, ""))) return "Ingresá un CUIT válido de 11 dígitos";
        return "";
      
      case 'cellphone':
        if (!value.trim()) return 'El teléfono es requerido';
        if (!validatePhone(value)) return 'Ingresa número válido';
        return '';
      
      case 'province':
        if (!value) return 'Selecciona una provincia';
        return '';
      
      case 'vehicle':
        if (!value) return 'Selecciona un vehículo';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    if (validateForm()) {
      console.log("Formulario válido, enviando:", formData);

      const result = await submitForm(formData, false); // false = sin archivos
      
      if (result.success) {
        const shouldTrackGtmEvent =
          formData.suborigen === "Ford Credit" || formData.suborigen === "Plan Óvalo";

        if (shouldTrackGtmEvent) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "envio_form_ok",
            origen: formData.origen,
            suborigen: formData.suborigen
          });
        }

        navigate("/formulario-enviado");
        // No limpiar formulario para mostrar estado "Enviada"
        // setFormData({
        //   name: "",
        //   cellphone: "",
        //   email: "",
        //   province: "",
        //   message: ""
        // });
        // setIsSubmitted(false);
        // setErrors({});
        
        // Remover alert - el estado visual será manejado por el componente
        // alert("¡Formulario enviado exitosamente! Te contactaremos pronto.");
      } else {
        // Mostrar errores específicos del backend si los hay
        if (result.details && result.details.length > 0) {
          console.log("Errores del backend:", result.details);
        }
      }
    } else {
      console.log("Formulario tiene errores:", errors);
    }
  };

  const isMobile = useIsMobile();

  // Vehiculos incluidos en form Pro
  const vehiclesForSelect = onlyFordProVehicles
    ? vehiclesData.vehicles.filter(vehicle => vehicle.fordPro === true)
    : vehiclesData.vehicles;

    const filteredVehicles = vehiclesForSelect.filter(vehicle => vehicle.id !== "nueva_ranger");

    const vehicleOptions = onlyFordProVehicles
    ? [
        { value: "ranger_xl_chasis", label: "Nueva Ranger XL Chasis" },
        { value: "ranger_xl_doble_cabina", label: "Nueva Ranger XL Doble Cabina" },
        { value: "ranger_xl_cabina_simple", label: "Nueva Ranger XL Cabina Simple" },
        ...filteredVehicles.map(vehicle => ({
          value: vehicle.id,
          label: vehicle.title
        }))
      ]
    : vehiclesForSelect.map(vehicle => ({
        value: vehicle.id,
        label: vehicle.title
      }));

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
      {showCuit && (
          <Input
            label="CUIT / CUIL"
            name="cuit"
            value={formData.cuit}
            onChange={handleChange}
            placeholder="Ej: 20123456789"
            error={errors.cuit}
            backgroundColor={backgroundColor}
          />
        )}
      <Select
        label="Vehículo"
        name="vehicle"
        value={formData.vehicle}
        onChange={handleChange}
        options={vehicleOptions}
        placeholder="Seleccioná tu vehículo"
        error={errors.vehicle}
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

      {/* Mostrar errores del backend */}
      {submitError && (
        <div style={{ 
          color: '#d32f2f',
          padding: '12px 16px',
          backgroundColor: '#ffebee',
          borderLeft: '4px solid #f44336',
          borderRadius: '6px',
          margin: '16px 0',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.4',
          boxShadow: '0 2px 4px rgba(244, 67, 54, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ fontSize: '16px', flexShrink: 0 }}>⚠️</span>
            <span>{submitError}</span>
          </div>
        </div>
      )}

      <div className={style.buttonWrapper}>
        <Button 
          type="submit" 
          variant="primary" 
          disabled={loading || success}
          style={{
            backgroundColor: success ? '#4caf50' : undefined,
            borderColor: success ? '#4caf50' : undefined,
            cursor: success ? 'default' : undefined
          }}
        >
          {loading ? 'Enviando consulta' : success ? 'Enviada' : 'Enviar consulta'}
          {loading && (
            <img 
              src="/icons/icon/progress_activity.png"
              alt="Enviando consulta"
              width="20"
              height="20"
              style={{ marginLeft: '8px' }}
            />
          )}
          {!loading && !success && (
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
          )}
          {success && (
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
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
      <div className={style.wraperInput}>
        {showCuit && (
          <Input
            label="CUIT / CUIL "
            name="cuit"
            value={formData.cuit}
            onChange={handleChange}
            placeholder="Ej: 20123456789"
            error={errors.cuit}
            backgroundColor={backgroundColor}
          />
        )}
        <Select
          label="Vehículo"
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          options={vehicleOptions}
          placeholder="Seleccioná tu vehículo"
          error={errors.vehicle}
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

      {/* Mostrar errores del backend */}
      {submitError && (
        <div style={{ 
          color: '#d32f2f',
          padding: '12px 16px',
          backgroundColor: '#ffebee',
          borderLeft: '4px solid #f44336',
          borderRadius: '6px',
          margin: '16px 0',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.4',
          boxShadow: '0 2px 4px rgba(244, 67, 54, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ fontSize: '16px', flexShrink: 0 }}>⚠️</span>
            <span>{submitError}</span>
          </div>
        </div>
      )}

      <div className={style.buttonWrapper}>
        <Button 
          type="submit" 
          variant="primary" 
          disabled={loading || success}
          style={{
            backgroundColor: success ? '#4caf50' : undefined,
            borderColor: success ? '#4caf50' : undefined,
            cursor: success ? 'default' : undefined
          }}
        >
          {loading ? 'Enviando consulta' : success ? 'Enviada' : 'Enviar consulta'}
          {loading && (
            <img 
              src="/icons/icon/progress_activity.png"
              alt="Enviando consulta"
              width="20"
              height="20"
              style={{ marginLeft: '8px' }}
            />
          )}
          
          {!loading && !success && (
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
          )}
          {success && (
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
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            
          )}
        </Button>
      </div>
    </form>
  );
};


export default Form;
