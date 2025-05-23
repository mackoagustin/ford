import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import useIsMobile from '../../hook/useIsMobile';

function Footer() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const isMobile = useIsMobile();

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {isMobile ? (
          <div className={styles.mobileFooter}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src="/img/logo/auto_special_row.png" alt="Logo" />
            </div>
            
            <div className={styles.menuContainer}>
              <div className={styles.menuSection}>
                <Link to="/" className={styles.menuItem}>Home</Link>
                <Link to="/vehiculos" className={styles.menuItem}>Vehículos</Link>
                <div 
                  className={`${styles.menuItem} ${openSubmenu === 'financiacion' ? styles.activeMenuItem : ''}`}
                  onClick={() => toggleSubmenu('financiacion')}
                >
                  <span>Financiación</span>
                  <button 
                    className={styles.toggleButton}
                  >
                    <svg
                      className="chevron-icon"
                      style={{
                        transform: openSubmenu === 'financiacion' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth={2.4}
                      stroke="var(--color-white)"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.75 8.25L12 15.75 4.25 8.25"
                      />
                    </svg>
                  </button>
                </div>
                {openSubmenu === 'financiacion' && (
                  <div className={`${styles.submenu} ${styles.submenuOpen}`}>
                    <div className={styles.submenuContainer}>
                      <Link to="/financiacion/ford-credit" className={styles.submenuItem}>Ford Credit</Link>
                      <Link to="/financiacion/plan-ovalo" className={styles.submenuItemLast}>Plan Ovalo</Link>
                    </div>
                  </div>
                )}
                <Link to="/ford-pro" className={styles.menuItem}>Ford Pro</Link>
                
                <div 
                  className={`${styles.menuItem} ${openSubmenu === 'postVenta' ? styles.activeMenuItem : ''}`}
                  onClick={() => toggleSubmenu('postVenta')}
                >
                  <span>Post Venta</span>
                  <button 
                    className={styles.toggleButton}
                  >
                    <svg
                      className="chevron-icon"
                      style={{
                        transform: openSubmenu === 'postVenta' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth={2.4}
                      stroke="var(--color-white)"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.75 8.25L12 15.75 4.25 8.25"
                      />
                    </svg>
                  </button>
                </div>
                {openSubmenu === 'postVenta' && (
                  <div className={`${styles.submenu} ${styles.submenuOpen}`}>
                    <div className={styles.submenuContainer}>
                      <Link to="/postventa/talleres" className={styles.submenuItem}>Talleres</Link>
                      <Link to="/postventa/solicitar-turno" className={styles.submenuItem}>Solicitar Turno</Link>
                      <Link to="/postventa/servicios" className={styles.submenuItem}>Servicios</Link>
                      <Link to="/postventa/repuestos" className={styles.submenuItem}>Repuestos</Link>
                      <Link to="/postventa/accesorios" className={styles.submenuItem}>Accesorios</Link>
                      <Link to="/postventa/preguntas-frecuentes" className={styles.submenuItem}>Preguntas frecuentes</Link>
                      <Link to="/postventa/ford-protect" className={styles.submenuItemLast}>Ford Protect</Link>
                    </div>
                  </div>
                )}
    
                <div className={`${styles.menuItem} ${openSubmenu === 'quienesSomos' ? styles.activeMenuItem : ''}`}
                  onClick={() => toggleSubmenu('quienesSomos')}
                >
                  <span>Quiénes somos</span>
                  <button 
                    className={styles.toggleButton}
                  >
                    <svg
                      className="chevron-icon"
                      style={{
                        transform: openSubmenu === 'quienesSomos' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth={2.4}
                      stroke="var(--color-white)"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.75 8.25L12 15.75 4.25 8.25"
                      />
                    </svg>
                  </button>
                </div>
                {openSubmenu === 'quienesSomos' && (
                  <div className={`${styles.submenu} ${styles.submenuOpen}`}>
                    <div className={styles.submenuContainer}>
                      <Link to="/quienes-somos/conocenos" className={styles.submenuItem}>Conocenos</Link>
                      <Link to="/quienes-somos/sumate" className={styles.submenuItem}>Sumate al equipo</Link>
                      <a
                        href="https://www.linkedin.com/company/autospecialford/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.submenuItemLast}
                      >
                        Novedades
                      </a>
                    </div>
                  </div>
                )}
                <Link to="/sucursales" className={styles.menuItem}>Sucursales</Link>
              </div>
            </div>

            <div className={styles.socialSection}>
              <div className={styles.mercadoLibre}>
                <img src="/img/logo/mercadolibre_2.png" alt="Logo Mercado libre"  className={styles.mlIcon}/>
                <span className='text-color-white body-1-14'>Tienda oficial de Mercado Libre</span>
              </div>
              
              <div className={styles.socialIcons}>
                <a href="#" >
                  <img src="/img/social/facebook.png" alt="Facebook" className={styles.socialIcon} />
                </a>
                <a href="#" >
                  <img src="/img/social/instagram.png" alt="Instagram" className={styles.socialIcon} />
                </a>
                <a href="#" >
                  <img src="/img/social/x.png" alt="X"  className={styles.socialIcon}/>
                </a>
                <a href="#" >
                  <img src="/img/social/youtube.png" alt="YouTube"  className={styles.socialIcon}/>
                </a>
                <a href="#">
                  <img src="/img/social/linkedin.png" alt="LinkedIn"  className={styles.socialIcon} />
                </a>
                <a href="#" >
                  <img src="/img/social/mail.png" alt="WhatsApp" className={styles.socialIcon} />
                </a>
              </div>

              <div className={styles.fiscal}>
                <img src="/img/logo/fiscal.png" alt="Data Fiscal" />
                <img src="/img/logo/caece.png" alt="Cace" />
              </div>
            </div>

            <div className={styles.copyrightTerminosPoliticas}>
                <p className='text-color-white body-1-14'>Copyright © 2025 Auto Special S.A. Todos los derechos reservados.</p>
                <div className={styles.terminosPoliticas}>
                    <a href="" className="text-color-white body-1-14">Términos legales</a>
                    <a href="" className="text-color-white body-1-14">Políticas de privacidad</a>
                </div>
            </div>

          </div>
        ) : (
          // Versión Desktop
          <div className={styles.desktopFooter}>
            <div className={styles.footerTop}>
              <div className={styles.footerLogo}>
                <img src="/img/logo/auto_special_col.png" alt="Logo" />
              </div>

              <div className={styles.footerMenus}>
                <div className={styles.menuColumn}>
                  <Link to="/" className={styles.menuItem}>Home</Link>
                  <Link to="/vehiculos" className={styles.menuItem}>Vehículos</Link>
                  <div 
                    className={`${styles.menuItem} ${openSubmenu === 'financiacion' ? styles.activeMenuItem : ''}`}
                    onClick={() => toggleSubmenu('financiacion')}
                  >
                    <span>Financiación</span>
                    <button 
                      className={styles.toggleButton}
                    >
                      <svg
                        className="chevron-icon"
                        style={{
                          transform: openSubmenu === 'financiacion' ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth={2.4}
                        stroke="var(--color-white)"
                        fill="none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.75 8.25L12 15.75 4.25 8.25"
                        />
                      </svg>
                    </button>
                  </div>
                  {openSubmenu === 'financiacion' && (
                    <div className={`${styles.submenu} ${styles.submenuOpen}`}>
                      <div className={styles.submenuContainer}>
                        <Link to="/financiacion/ford-credit" className={styles.submenuItem}>
                          <div className={styles.wraperFinance}>
                            <img src="/img/logo/ford_credit.png" alt="" />
                            Hasta 60%
                          </div>
                        </Link>
                        <Link to="/financiacion/plan-ovalo" className={styles.submenuItem}>
                          <div className={styles.wraperFinance}>
                            <img src="/img/logo/plan_ovalo.png" alt="" />
                            Desde 70% a 100%
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link to="/ford-pro" className={styles.menuItem}>Ford Pro</Link>
                  <div className={`${styles.menuItem} ${openSubmenu === 'postVenta' ? styles.activeMenuItem : ''}`}
                    onClick={() => toggleSubmenu('postVenta')}
                  >
                    <span>Post Venta</span>
                    <button 
                      className={styles.toggleButton}
                    >
                      <svg
                        className="chevron-icon"
                        style={{
                          transform: openSubmenu === 'postVenta' ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth={2.4}
                        stroke="var(--color-white)"
                        fill="none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.75 8.25L12 15.75 4.25 8.25"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className={`${styles.menuItem} ${openSubmenu === 'quienesSomos' ? styles.activeMenuItem : ''}`}
                    onClick={() => toggleSubmenu('quienesSomos')}
                  >
                    <span>Quiénes somos</span>
                    <button 
                      className={styles.toggleButton}
                    >
                      <svg
                        className="chevron-icon"
                        style={{
                          transform: openSubmenu === 'quienesSomos' ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth={2.4}
                        stroke="var(--color-white)"
                        fill="none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.75 8.25L12 15.75 4.25 8.25"
                        />
                      </svg>
                    </button>
                  </div>
                  {openSubmenu === 'quienesSomos' && (
                    <div className={styles.submenu}>
                      <Link to="/quienes-somos/quienes" className={styles.submenuItem}>¿Quiénes somos?</Link>
                      <Link to="/quienes-somos/mision" className={styles.submenuItem}>Misión</Link>
                      <Link to="/quienes-somos/vision" className={styles.submenuItem}>Visión</Link>
                    </div>
                  )}
                  <Link to="/sucursales" className={styles.menuItem}>Sucursales</Link>
                </div>

                <div className={styles.menuColumn}>
                  <Link to="/vehiculos/1" className={styles.menuItem}>Vehículo 1</Link>
                  <Link to="/vehiculos/2" className={styles.menuItem}>Vehículo 2</Link>
                  <Link to="/vehiculos/3" className={styles.menuItem}>Vehículo 3</Link>
                  <Link to="/vehiculos/4" className={styles.menuItem}>Vehículo 4</Link>
                  <Link to="/vehiculos/5" className={styles.menuItem}>Vehículo 5</Link>
                  <Link to="/vehiculos/6" className={styles.menuItem}>Vehículo 6</Link>
                  <Link to="/vehiculos/7" className={styles.menuItem}>Vehículo 7</Link>
                </div>

                <div className={styles.socialColumn}>
                  <div className={styles.mercadoLibre}>
                    <div className={styles.mlIcon}></div>
                    <span>Tienda oficial de Mercado Libre</span>
                  </div>
                  
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon}>
                      <img src="/img/social/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                      <img src="/img/social/instagram.svg" alt="Instagram" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                      <img src="/img/social/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                      <img src="/img/social/youtube.svg" alt="YouTube" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                      <img src="/img/social/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                      <img src="/img/social/whatsapp.svg" alt="WhatsApp" />
                    </a>
                  </div>

                  <div className={styles.paymentMethods}>
                    <img src="/img/payment/visa.png" alt="Visa" />
                    <img src="/img/payment/mastercard.png" alt="Mastercard" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.footerBottom}>
              <div className={styles.copyright}>
                Copyright © 2025 Auto Special S.A. Todos los derechos reservados.
              </div>
              <div className={styles.legalLinks}>
                <Link to="/terminos-legales" className={styles.legalLink}>Términos legales</Link>
                <span className={styles.separator}>•</span>
                <Link to="/politicas-privacidad" className={styles.legalLink}>Políticas de privacidad</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
