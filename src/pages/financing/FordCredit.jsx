import React, { useState } from 'react';
import BannerFordCredit from '../../components/BannerFordCredit/BannerFordCredit';
import bannerData from "../../data/banners.json";
import styles from "./FordCredit.module.css";
import OportunitiesSlider from '../../components/OpportunitiesSlider/OportunitiesSlider';
import Form from '../../components/Form/Form';
import useIsMobile from '../../hook/useIsMobile';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import FinanceSlider from '../../components/FinanceSlider/FinanceSlider';
import Chip from '../../components/Chip/Chip';
import financing from '../../data/fordCredit.json';
import LegalModal from '../../components/LegalModal/LegalModal';


function FordCredit() {
  const isMobile = useIsMobile();
  const selectedBanner = bannerData.banners[13]
  const items = financing.credit;
  const finance = financing;
  const [selectedBenefit, setSelectedBenefit] = useState(0);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);


  return (
    <div>
      <BannerFordCredit data = {selectedBanner} />

      {/* Title */}
      {isMobile ? (
         <div className={`${styles["pt-60"]} ${styles["px-16"]}`}>
         <p className="text-color-neutral-500 subtitle-20">Descubrí las oportunidades del mes y conocé las formas de financiamiento más convenientes para vos.</p>
       </div>
      ) : (
         <div className={`${styles["pt-60"]} ${styles["px-16"]} ${styles.wraperTitle}`}>
         <p className="text-color-neutral-500 subtitle-20 text-center">Descubrí las oportunidades del mes y conocé las formas de financiamiento más convenientes para vos.</p>
       </div>
      )}
     

      <div className= {styles.px16}>
        <div className= {styles.wraperSection}>
           <h2 className='H2'> <span className='text-color-secondary'>Oportunidades </span> del mes</h2>
       
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <OportunitiesSlider items={items} />
      </div>

     
      <div className={`${styles.legalButton} ${styles.px16}`}>        
        <Button
            variant="quarter"
            onClick={() => setIsLegalModalOpen(true)}
        >
          Ver Legales
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth={2.4}
            stroke="currentColor"
            fill="none"
            className={styles["button-icon"]}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5L15.75 12 8.25 19.5"
            />
          </svg>
        </Button>
      </div>


    
      {isMobile ? (
        <div className={`${styles["background-color-neutral-100"]}  ${styles["pt-60"]} ${styles["pb-60"]}`}>
          <div className= {styles["px-16"]}>
            <h3 className='H3'>¿Por qué <span className="text-color-secondary">financiar?</span></h3>
            <p className='subtitle-16 text-color-neutral-500'>Si estás pensando en comprar un vehículo nuevo, Ford te acerca diferentes formas de financiación que se adaptan a todas las necesidades. Realizando un pago inicial como anticipo, te ofrecemos la posibilidad de financiar hasta un 60% en un plazo de hasta 60 meses, con cuotas fijas en pesos y sin gastos de otorgamiento.</p>
          </div>
         
          <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
                <FinanceSlider data={finance} />
          </div>
        </div>

       
      ) : (
        <div className={styles.sliderBenefits}>
          <div className= {`${styles["px-16"]} ${styles.wraperTitle}`}>
            <h3 className='H3'>¿Por qué <span className="text-color-secondary">financiar?</span></h3>
            <p className='subtitle-20 text-color-neutral-500 text-center'>Si estás pensando en comprar un vehículo nuevo, Ford te acerca diferentes formas de financiación que se adaptan a todas las necesidades. Realizando un pago inicial como anticipo, te ofrecemos la posibilidad de financiar hasta un 60% en un plazo de hasta 60 meses, con cuotas fijas en pesos y sin gastos de otorgamiento.</p>
          </div>
        <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.chipContainer}`}>
           {finance.credit.map((item, index) => (
               <Chip
                   key={index}
                   label={item.financing.vehicle}
                   active={index === selectedBenefit}
                   onClick={() => setSelectedBenefit(index)}
               />
           ))}
            </div>
            <div className={`${styles["pt-42"]} ${styles["px-16"]} ${styles.sliderContainer}`}>
                <FinanceSlider data={[finance.credit[selectedBenefit]]} />
            </div>
        </div>

      )}







      {isMobile ? (
          <div className={styles.wraper}>
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <br />
              <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form />
          </div>
        ) : (
          <div className={styles.wraper}>
            <h3 className={`H3 text-color-dark ${styles.mb0} `}>
              ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className={`body-1-16 text-color-neutral-500 ${styles.mt8}`}>
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <div>
              <Form backgroundColor="white" />
            </div>
      
          </div>
        )}
      <Footer />
      
      <LegalModal 
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        title="Legales"
        content="Legales <br/>
            • [1] LEGAL RANGER - Tasa 0% a 24 meses - Financiación UVA <br/>
            • C.F.T.N.A.: 8,49% <br/>
            • (*) PROMOCIÓN VÁLIDA PARA LA CARTERA DE CONSUMO DESDE EL 01/05/2025 AL 31/05/2025 EN LA REPÚBLICA ARGENTINA PARA LA FINANCIACIÓN EN LA COMPRA DE VEHÍCULOS RANGER SUJETO A CONDICIONES PREVIAS DE CONTRATACIÓN, APROBACIÓN Y OTORGAMIENTO POR PARTE DE INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ARGENTINA) S.A. (ICBC). PRÉSTAMO PRENDARIO EN PESOS EN 24 CUOTAS MENSUALES. TASA NOMINAL ANUAL: 0,00%. TASA EFECTIVA ANUAL: 0,00%. COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA): 8,49%. SISTEMA DE AMORTIZACIÓN FRANCÉS. LAS CUOTAS CORRESPONDIENTES A ESTA FINANCIACIÓN INCLUYEN CAPITAL, INTERESES, IVA SOBRE INTERESES Y SEGURO DEL VEHÍCULO. PRÉSTAMO A TASA FIJA ACTUALIZABLE MEDIANTE LA APLICACIÓN DEL COEFICIENTE DE ESTABILIZACIÓN DE REFERENCIA (“CER”) CONFORME LEY 25827, PUBLICADO EN FORMA PERIODICA POR EL BANCO CENTRAL DE LA REPÚBLICA ARGENTINA (“BCRA”) Y EXPRESADO EN UNIDAD DE VALOR ADQUISITIVO (“UVA”). AL MOMENTO DE LA LIQUIDACIÓN DEL PRÉSTAMO SE INFORMARÁ AL CLIENTE CUANTAS UVA EQUIVALE EL MONTO OTORGADO Y EN FUNCIÓN DE ELLO, CUÁL SERÁ LA CUOTA PURA EN UVA A ABONAR MENSUALMENTE. LOS SALDOS DE CAPITAL ADEUDADOS SE ACTUALIZARÁN MEDIANTE LA APLICACIÓN DEL COEFICIENTE DE ESTABILIZACIÓN DE REFERENCIA (CER) Y SE EXPRESARÁN EN CANTIDAD DE “UVA”. EL IMPORTE DE CAPITAL A REEMBOLSAR SERÁ EL EQUIVALENTE EN PESOS DE LA CANTIDAD DE “UVA” ADEUDADA AL MOMENTO DE CADA UNO DE LOS VENCIMIENTOS, CALCULADO AL VALOR DE LA “UVA” DE LA FECHA CORRESPONDIENTE. VÁLIDO PARA TODAS LAS VERSIONES DE RANGER EXCEPTO RANGER RAPTOR. LAS IMÁGENES SON DE CARACTER ILUSTRATIVO. EJEMPLO PARA  RANGER DC LTD 2.0L BIT 4X4 10AT D CON UN COSTO DE PRIMA MENSUAL DEL SEGURO DEL VEHÍCULO $148.091 CON COBERTURA TERCEROS COMPLETO BÁSICO RADICADO EN LA CIUDAD AUTONOMA DE BUENOS AIRES. PRECIO SUGERIDO CONTADO: $65.229.120. LOS PRECIOS TIENEN IVA INCLUÍDO. NO INCLUYEN GASTOS, FLETE NI SEGURO DEL FLETE. NO INCLUYE GASTOS DE PATENTAMIENTO. MONTO MÁXIMO A FINANCIAR SOBRE PRECIO: $39.137.472 EQUIVALENTE A 30.062.97 UVA SEGÚN COTIZACIÓN DEL 01/01/2025 PUBLICADA POR EL BCRA, DE $ 1301,85 POR UVA. ANTICIPO: $26.091.648. PRÉSTAMO PRENDARIO CON CUOTAS DE $1.630.728 MÁS IVA SOBRE INTERESES.EQUIVALENTE A 1.252.62 UVA SEGÚN COTIZACIÓN DEL 01/01/2025 PUBLICADA POR EL BCRA, DE $ 1301,85 POR UVA. LA FINANCIACIÓN SE APLICARÁ SOBRE EL MEJOR PRECIO ACORDADO ENTRE EL CLIENTE Y EL CONCESIONARIO. STOCK: 40 UNIDADES. ORIGEN DEL PRODUCTO: ARGENTINA. PARA MAS INFORMACION CONSULTE EN NUESTRA RED DE CONCESIONARIOS OFICIALES FORD O INGRESE A WWW.FORD.COM.AR. FORD ARGENTINA S.C.A. FRENCH 3155 PISO 1°, CIUDAD AUTÓNOMA DE BUENOS AIRES. CUIT 30-67851968-1. ICBC ES UNA SOCIEDAD ANÓNIMA BAJO LA LEY ARGENTINA, SUS ACCIONISTAS LIMITAN SU RESPONSABILIDAD AL CAPITAL APORTADO (LEY N° 25738). FLORIDA 99, CABA. CUIT 30709447846.<br/>
            • [2] LEGAL RANGER - Tasa 0% con 12 cuotas fijas <br/>
            • C.F.T.N.A.: 12,87%<br/>
            • (*) PROMOCIÓN VÁLIDA PARA LA CARTERA DE CONSUMO DESDE EL 01/05/2025 al 31/05/2025 EN LA REPÚBLICA ARGENTINA PARA LA FINANCIACIÓN EN LA COMPRA DE VEHÍCULOS RANGER SUJETO A CONDICIONES PREVIAS DE CONTRATACIÓN, APROBACIÓN Y OTORGAMIENTO POR PARTE DE INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ARGENTINA) S.A. (ICBC). PRÉSTAMO PRENDARIO EN PESOS EN 12 CUOTAS MENSUALES. TASA NOMINAL ANUAL: 0,00%. TASA EFECTIVA ANUAL: 0,00%. COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA): 12,87%. SISTEMA DE AMORTIZACIÓN FRANCÉS. LAS CUOTAS CORRESPONDIENTES A ESTA FINANCIACIÓN INCLUYEN CAPITAL, INTERESES, IVA SOBRE INTERESES Y SEGURO DEL VEHÍCULO. TASA FIJA. VÁLIDO PARA TODAS LAS VERSIONES DE RANGER EXCEPTO RANGER RAPTOR. LAS IMÁGENES SON DE CARACTER ILUSTRATIVO. EJEMPLO PARA  RANGER DC LTD 2.0L BIT 4X4 10AT D CON UN COSTO DE PRIMA MENSUAL DEL SEGURO DEL VEHÍCULO $148.091 CON COBERTURA TERCEROS COMPLETO BÁSICO RADICADO EN LA CIUDAD AUTONOMA DE BUENOS AIRES. PRECIO SUGERIDO CONTADO: $65.229.120. LOS PRECIOS TIENEN IVA INCLUÍDO. NO INCLUYEN GASTOS, FLETE NI SEGURO DEL FLETE. NO INCLUYE GASTOS DE PATENTAMIENTO. MONTO MÁXIMO A FINANCIAR SOBRE PRECIO: $25.000.000. ANTICIPO: $40.229.120. PRÉSTAMO PRENDARIO CON CUOTAS DE $2.083.345 MÁS IVA SOBRE INTERESES. LA FINANCIACIÓN SE APLICARÁ SOBRE EL MEJOR PRECIO ACORDADO ENTRE EL CLIENTE Y EL CONCESIONARIO. STOCK: 40 UNIDADES. ORIGEN DEL PRODUCTO: ARGENTINA. PARA MAS INFORMACION CONSULTE EN NUESTRA RED DE CONCESIONARIOS OFICIALES FORD O INGRESE A WWW.FORD.COM.AR. FORD ARGENTINA S.C.A. FRENCH 3155 PISO 1°, CIUDAD AUTÓNOMA DE BUENOS AIRES. CUIT 30-67851968-1. ICBC ES UNA SOCIEDAD ANÓNIMA BAJO LA LEY ARGENTINA, SUS ACCIONISTAS LIMITAN SU RESPONSABILIDAD AL CAPITAL APORTADO (LEY N° 25738).<br/>
            • [3] LEGAL RANGER FLOTA - Leasing 100% a 36 meses<br/>
            • C.F.T.: 77.02%<br/>
            • (*) PROMOCIÓN VÁLIDA PARA CARTERA COMERCIAL PARA PERSONAS JURÍDICAS O PERSONAS FÍSICAS CON ACTIVIDAD COMERCIAL DEL 01/05/2025 al 31/05/2025 EN LA REPÚBLICA ARGENTINA PARA LA ADQUISICIÓN EN LEASING DE VEHÍCULOS FORD SUJETO A CONDICIONES PREVIAS DE CONTRATACIÓN Y APROBACIÓN CREDITICIA DE BANCO COMAFI.S.A. Y FORD ARGENTINA S.C.A. CONTRATO DE LEASING A 36 MESES. (35 CANONES MENSUALES CON UN CANON DE OPCIÓN DE COMPRA) CON UN FEE EQUIVALENTE A 1,8% DE LA SUMA DE LOS CANONES. TASA NOMINAL ANUAL: 48,00%. TASA EFECTIVA ANUAL: 60,10%. COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA): 58,49% COSTO FINANCIERO TOTAL (CFTEA): 77,02%. LOS CÁNONES CORRESPONDIENTES A ESTA FINANCIACIÓN INCLUYEN CAPITAL, INTERESES E IVA SOBRE EL CÁNON. NO INCLUYEN SEGURO DEL VEHÍCULO. SISTEMA DE AMORTIZACIÓN FRANCÉS CON AMORTIZACIÓN MENSUAL. TASA FIJA. EJEMPLO PARA UNA FINANCIACIÓN DE UN VALOR DE $1.000.000 (+ IVA). FEE DE OTORGAMIENTO: $33.319 (+ IVA). CÁNON INICIAL: $0,00 (+ IVA). CÁNON: $52.887 (+ IVA). OPCIÓN DE COMPRA: $52.887 (+ IVA). NO INCLUYE GASTOS DE PATENTAMIENTO.  LA FINANCIACIÓN SE APLICARÁ SOBRE EL MEJOR PRECIO ACORDADO ENTRE EL CLIENTE Y EL CONCESIONARIO.  PARA MAS INFORMACION CONSULTE EN NUESTRA RED DE CONCESIONARIOS OFICIALES FORD O INGRESE A WWW.FORD.COM.AR. FORD ARGENTINA S.C.A. FRENCH 3155 PISO 1°, CIUDAD AUTÓNOMA DE BUENOS AIRES. CUIT 30-67851968-1. BANCO COMAFI S.A. AV. ROQUE S. PEÑA 660, CABA. CUIT: 30-60473101-8.<br/>
            • [4] LEGAL TRANSIT VAN/MINIBUS/CHASIS – Tasa 0% a 24 meses – Financiación UVA<br/>
            • C.F.T.N.A.: 0,00%<br/>
            • (*) PROMOCIÓN VÁLIDA PARA LA CARTERA DE CONSUMO DESDE EL 01/05/2025 AL 31/05/2025 EN LA REPÚBLICA ARGENTINA PARA LA FINANCIACIÓN EN LA COMPRA DE VEHÍCULOS TRANSIT SUJETO A CONDICIONES PREVIAS DE CONTRATACIÓN, APROBACIÓN Y OTORGAMIENTO POR PARTE DE INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ARGENTINA) S.A. (ICBC). PRÉSTAMO PRENDARIO EN PESOS EN 24 CUOTAS MENSUALES. TASA NOMINAL ANUAL: 0,00%. TASA EFECTIVA ANUAL: 0,00%. COSTO FINANCIERO TOTAL NOMINAL ANUAL (CFTNA): 0,00%. SISTEMA DE AMORTIZACIÓN FRANCÉS. LAS CUOTAS CORRESPONDIENTES A ESTA FINANCIACIÓN INCLUYEN CAPITAL, INTERESES E IVA SOBRE INTERESES. NO INCLUYE SEGURO DEL VEHÍCULO. PRÉSTAMO A TASA FIJA ACTUALIZABLE MEDIANTE LA APLICACIÓN DEL COEFICIENTE DE ESTABILIZACIÓN DE REFERENCIA (“CER”) CONFORME LEY 25827, PUBLICADO EN FORMA PERIODICA POR EL BANCO CENTRAL DE LA REPÚBLICA ARGENTINA (“BCRA”) Y EXPRESADO EN UNIDAD DE VALOR ADQUISITIVO (“UVA”). AL MOMENTO DE LA LIQUIDACIÓN DEL PRÉSTAMO SE INFORMARÁ AL CLIENTE CUANTAS UVA EQUIVALE EL MONTO OTORGADO Y EN FUNCIÓN DE ELLO, CUÁL SERÁ LA CUOTA PURA EN UVA A ABONAR MENSUALMENTE. LOS SALDOS DE CAPITAL ADEUDADOS SE ACTUALIZARÁN MEDIANTE LA APLICACIÓN DEL COEFICIENTE DE ESTABILIZACIÓN DE REFERENCIA (CER) Y SE EXPRESARÁN EN CANTIDAD DE “UVA”. EL IMPORTE DE CAPITAL A REEMBOLSAR SERÁ EL EQUIVALENTE EN PESOS DE LA CANTIDAD DE “UVA” ADEUDADA AL MOMENTO DE CADA UNO DE LOS VENCIMIENTOS, CALCULADO AL VALOR DE LA “UVA” DE LA FECHA CORRESPONDIENTE. VÁLIDO PARA TODAS LAS VERSIONES DE TRANSIT EXCEPTO E-TRANSIT. LAS IMÁGENES SON DE CARACTER ILUSTRATIVO. EJEMPLO PARA TRANSIT VAN L2H2.PRECIO SUGERIDO CONTADO: $56.838.200. LOS PRECIOS TIENEN IVA INCLUÍDO. NO INCLUYEN GASTOS, FLETE NI SEGURO DEL FLETE. NO INCLUYE GASTOS DE PATENTAMIENTO. MONTO MÁXIMO A FINANCIAR SOBRE PRECIO: $34.102.920 EQUIVALENTE A 26.195.74 UVA SEGÚN COTIZACIÓN DEL 01/01/2025 PUBLICADA POR EL BCRA, DE $ 1301,85 POR UVA. ANTICIPO: $22.735.280. PRÉSTAMO PRENDARIO CON CUOTAS DE $1.420.955 MÁS IVA SOBRE INTERESES. EQUIVALENTE A 1.091.49 UVA SEGÚN COTIZACIÓN DEL 01/01/2025 PUBLICADA POR EL BCRA, DE $ 1301,85 POR UVA. LA FINANCIACIÓN SE APLICARÁ SOBRE EL MEJOR PRECIO ACORDADO ENTRE EL CLIENTE Y EL CONCESIONARIO. STOCK: 40 UNIDADES. ORIGEN DEL PRODUCTO: URUGUAY. PARA MAS INFORMACION CONSULTE EN NUESTRA RED DE CONCESIONARIOS OFICIALES FORD O INGRESE A WWW.FORD.COM.AR. FORD ARGENTINA S.C.A. FRENCH 3155 PISO 1°, CIUDAD AUTÓNOMA DE BUENOS AIRES. CUIT 30-67851968-1. ICBC ES UNA SOCIEDAD ANÓNIMA BAJO LA LEY ARGENTINA, SUS ACCIONISTAS LIMITAN SU RESPONSABILIDAD AL CAPITAL APORTADO (LEY N° 25738). FLORIDA 99, CABA. CUIT 30709447846."
      />
    </div>
  )
}

export default FordCredit;
