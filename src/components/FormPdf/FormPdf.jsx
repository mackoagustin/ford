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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, pdfFile: file });
    } else {
      alert("Por favor, selecciona un archivo PDF válido.");
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
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
      />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@mail.com"
        />
      <Input
        label="Teléfono/celular"
        name="cellphone"
        value={formData.cellphone}
        onChange={handleChange}
        placeholder="Nro. de teléfono (sin el 15)"
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
      />

      {/* Campo de carga de PDF con diseño personalizado */}
      <div className={style.fileWrapper}>
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
        {formData.pdfFile && (
          <span className={style.fileName}>{formData.pdfFile.name}</span>
        )}
      </div>

      <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
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
      />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@mail.com"
        />
      </div>

      <div className={style.wraperInput}>
        <Input
        label="Teléfono/celular"
        name="cellphone"
        value={formData.cellphone}
        onChange={handleChange}
        placeholder="Nro. de teléfono (sin el 15)"
      />
      <Select
        label="Provincia"
        name="province"
        value={formData.province}
        onChange={handleChange}
        options={provinciasArgentinas}
        placeholder="Seleccioná tu provincia"
      />
      </div>

       {/* Campo de carga de PDF con diseño personalizado */}
       <div className={style.fileWrapper}>
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
        {formData.pdfFile && (
          <span className={style.fileName}>{formData.pdfFile.name}</span>
        )}
      </div>

      
      <div className={style.wraperTextarea}>
          <Textarea
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribí tu mensaje"
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
