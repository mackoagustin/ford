// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import useIsMobile from '../../hook/useIsMobile';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.navbarContainer}>
        {/* Menú Hamburguesa a la izquierda */}
        {isMobile && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </div>
        )}
        
        {/* Logo a la derecha */}
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}> 
            <img src="/img/logo/logo.png" alt="Logo" />
          </Link>
        </div>

     
        {!isMobile ? (
         <ul className={`${styles.navLinks} ${styles.desktop}`}>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('vehiculos')}>
                <div className={`${styles.iconWrapper} ${styles.iconWrapperFirst}`}>
                  Vehiculos
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
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.75 8.25L12 15.75 4.25 8.25"
                    />
                  </svg>
                </div>

              </button>
              <ul className= {`${styles.submenu} ${openSubmenu === 'vehiculos' ? styles.submenuOpen : ''}`}>
                <li><Link to="/vehiculos" onClick={closeMenu}>0km</Link></li>
                  <li>
                    <a
                      href="https://listado.mercadolibre.com.ar/autospecial"
                      onClick={closeMenu}
                      rel="noopener noreferrer"
                      className={styles.submenuLink}
                    >
                      Usados
                    </a>
                  </li>
              </ul>
            </li>

            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('financiacion')}>
                <div className={`${styles.iconWrapper} ${styles.iconWrapperFirst}`}>
                  Financiación
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
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.75 8.25L12 15.75 4.25 8.25"
                    />
                  </svg>
                </div>
              </button>
              <ul className={`${styles.submenu} ${openSubmenu === 'financiacion' ? styles.submenuOpen : ''}`}>
                <li><Link to="/financiacion/ford-credit" onClick={closeMenu}>
                <div className={styles.wraperFinance}>
                            <img src="/img/logo/ford_credit.png" alt="" />
                            Hasta 60%
                          </div>
                </Link></li>
                <li><Link to="/financiacion/plan-ovalo" onClick={closeMenu}>
                      <div className={styles.wraperFinance}>
                          <img src="/img/logo/plan_ovalo.png" alt="" />
                          Desde 70% a 100%
                      </div>
                </Link></li>
              </ul>
            </li>

            <li><Link to="/ford-pro" onClick={closeMenu}>Ford Pro</Link></li>

            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('postventa')} className={styles.wraperLink}>
                <div className={`${styles.iconWrapper} ${styles.iconWrapperSecond}`}>
                  Post venta
                  <svg
                    className="chevron-icon"
                    style={{
                      transform: openSubmenu === 'postventa' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
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
                      d="M19.75 8.25L12 15.75 4.25 8.25"
                    />
                  </svg>
                </div>
              </button>
              <ul className={`${styles.submenu} ${openSubmenu === 'postventa' ? styles.submenuOpen : ''}`}>
                <li><Link to="/postventa/talleres" onClick={closeMenu}>Talleres</Link></li>
                <li><Link to="/postventa/solicitar-turno" onClick={closeMenu}>Solicitar turno</Link></li>
                <li><Link to="/postventa/servicios" onClick={closeMenu}>Servicios</Link></li>
                <li><Link to="/postventa/repuestos" onClick={closeMenu}>Repuestos</Link></li>
                <li><Link to="/postventa/accesorios" onClick={closeMenu}>Accesorios</Link></li>
                <li><Link to="/postventa/preguntas-frecuentes" onClick={closeMenu}>Preguntas frecuentes</Link></li>
                <li><Link to="/postventa/ford-protect" onClick={closeMenu}>Ford Protect</Link></li>
              </ul>
            </li>

            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('quienes')} className={styles.wraperLink}>
                <div className={`${styles.iconWrapper} ${styles.iconWrapperThird}`}>
                  Quiénes somos
                  <svg
                    className="chevron-icon"
                    style={{
                      transform: openSubmenu === 'quienes' ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
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
                      d="M19.75 8.25L12 15.75 4.25 8.25"
                    />
                  </svg>
                </div>
              </button>
              <ul className={`${styles.submenu} ${openSubmenu === 'quienes' ? styles.submenuOpen : ''}`}>
                <li><Link to="/quienes-somos/conocenos" onClick={closeMenu}>Conocenos</Link></li>
                <li><Link to="/quienes-somos/sumate" onClick={closeMenu}>Sumate al equipo</Link></li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/autospecialford/?viewAsMember=true"
                    onClick={closeMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.submenuLink}
                  >
                    Novedades
                  </a>
                </li>
              </ul>
            </li>

            <li><Link to="/sucursales" onClick={closeMenu}>Sucursales</Link></li>
          </ul>

        ) : (
          // Menú Móvil
          isOpen && (
            <div className={styles.mobileOverlay}>
              <ul className={`${styles.navLinks} ${styles.mobile}`}>
                <div className={styles.wraperLink}>
                  <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                </div>
                <li className={`${styles.hasSubmenu} ${openSubmenu === 'vehiculos' ? styles.active : ''}`}>
                    <button
                      onClick={() => toggleSubmenu('vehiculos')}
                      className={styles.wraperLink}
                    >
                      <div className={styles.iconWrapper}>
                        Vehículos
                        <svg
                          className="chevron-icon"
                          style={{
                            transform: openSubmenu === 'vehiculos' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                          }}
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
                            d="M19.75 8.25L12 15.75 4.25 8.25"
                          />
                        </svg>
                      </div>
                    </button>
                    <ul className={`${styles.submenu} ${openSubmenu === 'vehiculos' ? styles.submenuOpen : ''}`}>
                      <li><Link to="/vehiculos" onClick={closeMenu}>0km</Link></li>
                      <li>
                        <a
                          href="https://listado.mercadolibre.com.ar/autospecial"
                          onClick={closeMenu}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.submenuLink}
                        >
                          Usados
                        </a>
                      </li>
                    </ul>
                  </li>

                 <li className={`${styles.hasSubmenu} ${openSubmenu === 'financiacion' ? styles.active : ''}`}>
                    <button
                      onClick={() => toggleSubmenu('financiacion')}
                      className={styles.wraperLink}
                    >
                      <div className={styles.iconWrapper}>
                        Financiación
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
                          stroke="currentColor"
                          fill="none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.75 8.25L12 15.75 4.25 8.25"
                          />
                        </svg>
                      </div>
                    </button>
                    <ul className={`${styles.submenu} ${openSubmenu === 'financiacion' ? styles.submenuOpen : ''}`}>
                      <li><Link to="/financiacion/ford-credit" onClick={closeMenu}>
                          <div className={styles.wraperFinance}>
                            <img src="/img/logo/ford_credit.png" alt="" />
                            Hasta 60%
                          </div>
                          </Link></li>
                      <li><Link to="/financiacion/plan-ovalo" onClick={closeMenu}>
                           <div className={styles.wraperFinance}>
                              <img src="/img/logo/plan_ovalo.png" alt="" />
                              Desde 70% a 100%
                          </div>
                      </Link></li>
                    </ul>
                  </li>

                  <div className={styles.wraperLink}>
                  <li><Link to="/ford-pro" onClick={closeMenu}>Ford Pro</Link></li>
                </div>
                <li className={`${styles.hasSubmenu} ${openSubmenu === 'postventa' ? styles.active : ''}`}>
                  <button
                    onClick={() => toggleSubmenu('postventa')}
                    className={styles.wraperLink}
                  >
                    <div className={styles.iconWrapper}>
                      Post venta
                     <svg
                          className="chevron-icon"
                          style={{
                            transform: openSubmenu === 'postventa' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                          }}
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
                            d="M19.75 8.25L12 15.75 4.25 8.25"
                          />
                        </svg>
                    </div>
                  </button>
                  <ul className={`${styles.submenu} ${openSubmenu === 'postventa' ? styles.submenuOpen : ''}`}>
                    <li><Link to="/postventa/talleres" onClick={closeMenu}>Talleres</Link></li>
                    <li><Link to="/postventa/solicitar-turno" onClick={closeMenu}>Solicitar turno</Link></li>
                    <li><Link to="/postventa/servicios" onClick={closeMenu}>Servicios</Link></li>
                    <li><Link to="/postventa/repuestos" onClick={closeMenu}>Repuestos</Link></li>
                    <li><Link to="/postventa/accesorios" onClick={closeMenu}>Accesorios</Link></li>
                    <li><Link to="/postventa/preguntas-frecuentes" onClick={closeMenu}>Preguntas frecuentes</Link></li>
                    <li><Link to="/postventa/ford-protect" onClick={closeMenu}>Ford Protect</Link></li>
                  </ul>
                </li>
            <li className={`${styles.hasSubmenu} ${openSubmenu === 'quienes' ? styles.active : ''}`}>
                <button
                  onClick={() => toggleSubmenu('quienes')}
                  className={styles.wraperLink}
                >
                  <div className={styles.iconWrapper}>
                    Quiénes somos
                   <svg
                          className="chevron-icon"
                          style={{
                            transform: openSubmenu === 'quienes' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                          }}
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
                            d="M19.75 8.25L12 15.75 4.25 8.25"
                          />
                        </svg>
                  </div>
                </button>
                <ul className={`${styles.submenu} ${openSubmenu === 'quienes' ? styles.submenuOpen : ''}`}>
                  <li><Link to="/quienes-somos/conocenos" onClick={closeMenu}>Conocenos</Link></li>
                  <li><Link to="/quienes-somos/sumate" onClick={closeMenu}>Sumate al equipo</Link></li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/autospecialford/?viewAsMember=true"
                      onClick={closeMenu}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.submenuLink}
                    >
                      Novedades
                    </a>
                  </li>
                </ul>
              </li>
                <div className={styles.wraperLink}>
                  <li><Link to="/sucursales" onClick={closeMenu}>Sucursales</Link></li>
                </div>
              </ul>
            </div>
          )
        )}

        {/* Overlay oscuro */}
        <div
          className={styles.overlayBackdrop}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
