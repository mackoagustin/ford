import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from "./PlanOvalo.module.css";
import detailStyles from "./PlanOvaloVehicleDetail.module.css";
import PlanOvalo10 from '../../components/PlanOvalo10/PlanOvalo10';
import PlanOvaloSlider from '../../components/PlanOvaloSlider/PlanOvaloSlider';
import VehicleBenefitSlider from '../../components/VehicleBenefitSlider/VehicleBenefitSlider';
import Chip from '../../components/Chip/Chip';
import Form from '../../components/Form/Form';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import useIsMobile from '../../hook/useIsMobile';
import ovaloData from '../../data/plan_ovalo.json';
import faqData from '../../data/faq.json';
import creditPlanes from '../../data/creditPlans.json';
import planOvaloVehicles from '../../data/planOvaloVehicleDetail.json';

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth={2.4}
    stroke="currentColor"
    fill="none"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12 8.25 19.5" />
  </svg>
);

function PlanOvaloVehicleDetail() {
  const { slug } = useParams();
  const isMobile = useIsMobile();
  const vehicle = planOvaloVehicles.vehicles.find((item) => item.slug === slug);

  const ovaloItems = ovaloData.ovalo;
  const faqGeneral = faqData.faq.filter(item => item.category === 'general');

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleTick, setVehicleTick] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleConsult = (vehicleId) => {
    setSelectedVehicle(vehicleId);
    setVehicleTick((n) => n + 1);
  };

  if (!vehicle) {
    return <div>Vehículo no encontrado</div>;
  }

  const otherPlans = creditPlanes.creditPlans.filter(
    (plan) => plan.vehicleId !== vehicle.vehicleId && !plan.planEmpresas
  );

  const getVersionName = (version) => `${version.name} ${version.highlight}`;
  const getVersionFormValue = (version) => version.formValue ?? getVersionName(version);

  const formVehicleOptions = vehicle.formVehicles ?? [
    ...vehicle.versions.map((version) => ({
      value: getVersionName(version),
      label: getVersionName(version)
    })),
    ...otherPlans
      .filter((plan, index, list) => list.findIndex((p) => p.vehicleId === plan.vehicleId) === index)
      .map((plan) => ({ value: plan.vehicleId, label: plan.title }))
  ];

  const defaultFormVehicle = formVehicleOptions[0]?.value;

  const goToForm = (e, vehicleValue) => {
    e.preventDefault();
    if (vehicleValue) handleConsult(vehicleValue);
    document.getElementById('formulario-asesoramiento').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const { banner, plan } = vehicle;

  return (
    <div>
      {/* Banner */}
      <div
        className={`${detailStyles.banner} ${banner.variant === 'quota' ? detailStyles.bannerQuota : ''} ${banner.variant === 'installments' ? detailStyles.bannerInstallments : ''}`}
      >
        <div className={detailStyles.bannerMedia}>
          <picture>
            <source media="(max-width: 768px)" srcSet={banner.imageMobile} />
            <img className={detailStyles.bannerImage} src={banner.imageDesktop} alt={banner.title} />
          </picture>
        </div>
        <div className={detailStyles.bannerContent}>
          {banner.chip ? <span className={detailStyles.bannerChip}>{banner.chip}</span> : null}
          {banner.variant === 'installments' ? (
            <div className={detailStyles.bannerInstallmentsRow}>
              <div className={detailStyles.bannerInstallmentsMain}>
                <h1 className={detailStyles.bannerTitle}>{banner.title}</h1>
                <div className={detailStyles.bannerInstallmentsCount}>
                  <span className={detailStyles.bannerInstallmentsNumber}>{banner.installments}</span>
                  <span className={detailStyles.bannerInstallmentsLabel}>{banner.installmentsLabel}</span>
                </div>
              </div>
              <span className={detailStyles.bannerDivider} />
              <p className={detailStyles.bannerInstallmentsAside}>
                {banner.asideText}
                <br />
                <strong>{banner.asideHighlight}</strong>
              </p>
            </div>
          ) : (
            <h1 className={detailStyles.bannerTitle}>{banner.title}</h1>
          )}
          {banner.variant === 'installments' ? null : banner.variant === 'quota' ? (
            <div className={detailStyles.bannerDiscount}>
              <span className={detailStyles.bannerDiscountValue}>{banner.discount}</span>
              <div className={detailStyles.bannerQuotaAside}>
                {banner.discountNote ? (
                  <span className={detailStyles.bannerDiscountNote}>{banner.discountNote}</span>
                ) : null}
                <div className={detailStyles.bannerQuotaAsideRow}>
                  <span className={detailStyles.bannerDivider} />
                  <p className={detailStyles.bannerDiscountText}>
                    {banner.discountText}
                    <br />
                    <strong>{banner.discountHighlight}</strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={detailStyles.bannerDiscount}>
              <span className={detailStyles.bannerDiscountValue}>{banner.discount}</span>
              <span className={detailStyles.bannerDivider} />
              <p className={detailStyles.bannerDiscountText}>
                {banner.discountText}
                <br />
                <strong>{banner.discountHighlight}</strong>
              </p>
            </div>
          )}
          <Button
            as="a"
            href="#formulario-asesoramiento"
            variant={isMobile ? 'primaryFull' : 'primary'}
            className={detailStyles.bannerButton}
            onClick={(e) => goToForm(e, defaultFormVehicle)}
          >
            {banner.ctaText}
            <ChevronIcon />
          </Button>
        </div>
      </div>

      {/* Beneficios */}
      <div className={detailStyles.container}>
        <div className={`${detailStyles.benefits} ${vehicle.benefits.length === 2 ? detailStyles.benefitsPair : ''}`}>
          {vehicle.benefits.map((benefit, index) => (
            <div key={index} className={detailStyles.benefitCard}>
              <p className={detailStyles.benefitTitle}>
                {benefit.title}&nbsp;<sup>{benefit.note}</sup>
              </p>
              {benefit.text ? <p className={detailStyles.benefitText}>{benefit.text}</p> : null}
            </div>
          ))}
        </div>
      </div>

      {/* Plan */}
      <div className={detailStyles.container}>
        <h2 className={detailStyles.sectionTitle}>
          {plan.title} <span className="text-color-secondary">{plan.highlight}</span>
        </h2>
        <div className={detailStyles.planTable}>
          <div className={detailStyles.planHeader}>
            <p>{plan.conceptLabel}</p>
            <p>{plan.rangeLabel}</p>
          </div>
          {plan.items.map((item, index) => (
            <div key={index} className={detailStyles.planRow}>
              <div>
                <p className={detailStyles.planRowTitle}>{item.title}</p>
                <p className={detailStyles.planRowDescription}>{item.description}</p>
              </div>
              <p className={detailStyles.planRowValue}>{item.value}</p>
            </div>
          ))}
          <div className={detailStyles.planTotal}>
            <div className={detailStyles.planTotalRow}>
              <p className={detailStyles.planRowTitle}>{plan.total.title}</p>
              <p className={detailStyles.planRowValue}>{plan.total.value}</p>
            </div>
            <div className={detailStyles.planTotalSecondary}>
              <p className={detailStyles.planRowDescription}>{plan.total.description}</p>
              <p className={detailStyles.planRowDescription}>{plan.total.secondaryValue}</p>
            </div>
          </div>
        </div>
        <div className={detailStyles.planButton}>
          <Button
            as="a"
            href="#formulario-asesoramiento"
            variant={isMobile ? 'primaryFull' : 'primary'}
            onClick={(e) => goToForm(e, defaultFormVehicle)}
          >
            {plan.ctaText}
            <ChevronIcon />
          </Button>
        </div>
      </div>

      {/* Bloque 1 - Plan Ovalo 10 */}
      <div className={styles.sliderWrapper}>
        <PlanOvalo10 data={ovaloItems} />
      </div>

      {/* Versiones */}
      <div className={detailStyles.container}>
        {vehicle.versions.map((version, index) => (
          <div key={index} className={detailStyles.version}>
            <div className={detailStyles.versionInfo}>
              <h2 className={detailStyles.sectionTitle}>
                {version.name} <span className="text-color-secondary">{version.highlight}</span>
              </h2>
              <div className={detailStyles.versionImageBox}>
                <img
                  className={detailStyles.versionImage}
                  src={version.image}
                  alt={`${version.name} ${version.highlight}`}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={detailStyles.versionPricing}>
              <div className={detailStyles.priceCard}>
                <div className={detailStyles.priceTop}>
                  <div className={detailStyles.priceRowMain}>
                    <p>{version.vehicleValue.label}</p>
                    <p>{version.vehicleValue.value}</p>
                  </div>
                  <div className={detailStyles.priceRowNoTax}>
                    <p>{version.vehicleValueNoTax.label}</p>
                    <p>{version.vehicleValueNoTax.value}</p>
                  </div>
                </div>
                <div className={detailStyles.priceItems}>
                  {version.items.map((item, idx) => (
                    <div key={idx} className={detailStyles.priceRow}>
                      <p>{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className={detailStyles.priceRowTotal}>
                  <p>{version.firstInstallment.label}</p>
                  <p>{version.firstInstallment.value}</p>
                </div>
              </div>
              <Button
                as="a"
                href="#formulario-asesoramiento"
                variant={isMobile ? 'secondaryFull' : 'secondary'}
                className={detailStyles.versionButton}
                onClick={(e) => goToForm(e, getVersionFormValue(version))}
              >
                {version.ctaText}
                <ChevronIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Galería */}
      {isMobile ? (
        <div className={detailStyles.galleryMobile}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            className={detailStyles.gallerySwiper}
          >
            {vehicle.gallery.map((image, index) => (
              <SwiperSlide key={index} className={detailStyles.gallerySlide}>
                <img
                  src={image}
                  alt={`${vehicle.versions[0].name} - Imagen ${index + 1}`}
                  className={detailStyles.galleryImage}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={detailStyles.galleryDesktop}>
          {vehicle.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${vehicle.versions[0].name} - Imagen ${index + 1}`}
              className={detailStyles.galleryImage}
              loading="lazy"
            />
          ))}
        </div>
      )}

      {/* Características */}
      <div className={detailStyles.features}>
        {isMobile ? (
          <VehicleBenefitSlider data={vehicle.features} />
        ) : (
          <>
            <div className={detailStyles.featureChips}>
              {vehicle.features.map((item, index) => (
                <Chip
                  key={index}
                  label={item.title}
                  active={index === selectedFeature}
                  onClick={() => setSelectedFeature(index)}
                />
              ))}
            </div>
            <div className={detailStyles.featureContent}>
              <VehicleBenefitSlider data={[vehicle.features[selectedFeature]]} />
            </div>
          </>
        )}
      </div>

      {/* Formulario de asesoramiento */}
      {isMobile ? (
          <div className={styles.wraper} id="formulario-asesoramiento">
            <h3 className="H3 text-color-dark">
              ¿Necesitás
              <br />
              <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className="body-1-16 text-color-neutral-500">
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <Form 
              origen="WEB AUTOSPECIAL" 
              suborigen="Plan Óvalo" 
              defaultVehicle={selectedVehicle}
              vehicleTick={vehicleTick}
              customVehicleOptions={formVehicleOptions}
              contactFirst
            />
          </div>
        ) : (
          <div className={styles.wraper} style={{marginTop: '80px', borderRadius: '16px'}} id="formulario-asesoramiento">
            <h3 className={`H3 text-color-dark ${styles.mb0} `}>
              ¿Necesitás <span className="text-color-secondary">asesoramiento?</span>
            </h3>
            <p className={`body-1-16 text-color-neutral-500 ${styles.mt8}`}>
              Completá los datos y nos pondremos en contacto a la brevedad.
            </p>
            <div>
              <Form 
                origen="WEB AUTOSPECIAL" 
                suborigen="Plan Óvalo" 
                defaultVehicle={selectedVehicle}
                vehicleTick={vehicleTick}
                customVehicleOptions={formVehicleOptions}
                contactFirst
              />
            </div>

          </div>
        )}

      {/* Otros planes */}
      <div className={detailStyles.container}>
        <h2 className={`H2 ${detailStyles.otherPlansTitle}`}>
          {vehicle.otherPlansTitle} <span className="text-color-secondary">{vehicle.otherPlansHighlight}</span>
        </h2>
      </div>
      <div className={styles.sliderWrapper}>
        <PlanOvaloSlider items={otherPlans} onConsult={handleConsult} hideConsult />
      </div>

      <div className={detailStyles.faqSection}>
      {/* FAQ */}
      <div className={styles.faqWrapper}>
        <div className={styles.px16}>
          <div className={`${styles.wraperSection} ${styles.pt80}`}>
            <h2 className={`H2 ${styles.px16}`}>Información general</h2>
            <div>
                    {faqGeneral.map((item, index) =>(
                <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
                variant={index === 0 ? 'parent' : 'child'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aclaraciones */}
      <div className={detailStyles.container}>
        <div className={detailStyles.disclaimers}>
          {vehicle.disclaimers.map((text, index) => (
            <p key={index} className={detailStyles.disclaimerText}>{text}</p>
          ))}
        </div>
        <a
          href={vehicle.legalLink}
          target="_blank"
          rel="noopener noreferrer"
          className={detailStyles.legalLink}
        >
          Legales
          <ChevronIcon />
        </a>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default PlanOvaloVehicleDetail;
