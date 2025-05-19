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
          <img src="/img/logo/logo.png" alt="Logo" />
        </div>

        {/* Contenido del menú */}
        {!isMobile ? (
          // Menú Desktop
          <ul className={`${styles.navLinks} ${styles.desktop}`}>
            <li><Link to="/vehiculos" onClick={closeMenu}>Vehículos</Link></li>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('financiacion')}>Financiación ▾</button>
              {openSubmenu === 'financiacion' && (
                <ul className={styles.submenu}>
                  <li><Link to="/financiacion/ford-credit" onClick={closeMenu}>Ford Credit</Link></li>
                  <li><Link to="/financiacion/plan-ovalo" onClick={closeMenu}>Plan Óvalo</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/ford-pro" onClick={closeMenu}>Ford Pro</Link></li>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('postventa')}>Post venta ▾</button>
              {openSubmenu === 'postventa' && (
                <ul className={styles.submenu}>
                  <li><Link to="/postventa/talleres" onClick={closeMenu}>Talleres</Link></li>
                  <li><Link to="/postventa/solicitar-turno" onClick={closeMenu}>Solicitar turno</Link></li>
                  <li><Link to="/postventa/servicios" onClick={closeMenu}>Servicios</Link></li>
                  <li><Link to="/postventa/repuestos" onClick={closeMenu}>Repuestos</Link></li>
                  <li><Link to="/postventa/accesorios" onClick={closeMenu}>Accesorios</Link></li>
                  <li><Link to="/postventa/preguntas-frecuentes" onClick={closeMenu}>Preguntas frecuentes</Link></li>
                  <li><Link to="/postventa/ford-protect" onClick={closeMenu}>Ford Protect</Link></li>
                </ul>
              )}
            </li>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('quienes')}>Quiénes somos ▾</button>
              {openSubmenu === 'quienes' && (
                <ul className={styles.submenu}>
                  <li><Link to="/quienes-somos/conocenos" onClick={closeMenu}>Conocenos</Link></li>
                  <li><Link to="/quienes-somos/sumate" onClick={closeMenu}>Sumate al equipo</Link></li>
                  <li><Link to="/quienes-somos/novedades" onClick={closeMenu}>Novedades</Link></li>
                </ul>
              )}
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
                <div className={styles.wraperLink}>
                  <li><Link to="/vehiculos" onClick={closeMenu}>Vehículos</Link></li>
                </div>
                <li className={`${styles.hasSubmenu} ${openSubmenu === 'financiacion' ? styles.active : ''}`}>
                  <button
                    onClick={() => toggleSubmenu('financiacion')}
                    className={styles.wraperLink}
                  >
                    Financiación ▾
                  </button>
                  {openSubmenu === 'financiacion' && (
                    <ul className={styles.submenu}>
                      <li><Link to="/financiacion/ford-credit" onClick={closeMenu}>Ford Credit</Link></li>
                      <li><Link to="/financiacion/plan-ovalo" onClick={closeMenu}>Plan Óvalo</Link></li>
                    </ul>
                  )}
                </li>
                <div className={styles.wraperLink}>
                  <li><Link to="/ford-pro" onClick={closeMenu}>Ford Pro</Link></li>
                </div>
                <li className={`${styles.hasSubmenu} ${openSubmenu === 'postventa' ? styles.active : ''}`}>
                  <button
                    onClick={() => toggleSubmenu('postventa')}
                    className={styles.wraperLink}
                  >
                    Post venta ▾
                  </button>
                  {openSubmenu === 'postventa' && (
                    <ul className={styles.submenu}>
                      <li><Link to="/postventa/talleres" onClick={closeMenu}>Talleres</Link></li>
                      <li><Link to="/postventa/solicitar-turno" onClick={closeMenu}>Solicitar turno</Link></li>
                      <li><Link to="/postventa/servicios" onClick={closeMenu}>Servicios</Link></li>
                      <li><Link to="/postventa/repuestos" onClick={closeMenu}>Repuestos</Link></li>
                      <li><Link to="/postventa/accesorios" onClick={closeMenu}>Accesorios</Link></li>
                      <li><Link to="/postventa/preguntas-frecuentes" onClick={closeMenu}>Preguntas frecuentes</Link></li>
                      <li><Link to="/postventa/ford-protect" onClick={closeMenu}>Ford Protect</Link></li>
                    </ul>
                  )}
                </li>
                <li className={`${styles.hasSubmenu} ${openSubmenu === 'quienes' ? styles.active : ''}`}>
                  <button
                    onClick={() => toggleSubmenu('quienes')}
                    className={styles.wraperLink}
                  >
                    Quiénes somos ▾
                  </button>
                  {openSubmenu === 'quienes' && (
                    <ul className={styles.submenu}>
                      <li><Link to="/quienes-somos/conocenos" onClick={closeMenu}>Conocenos</Link></li>
                      <li><Link to="/quienes-somos/sumate" onClick={closeMenu}>Sumate al equipo</Link></li>
                      <li><Link to="/quienes-somos/novedades" onClick={closeMenu}>Novedades</Link></li>
                    </ul>
                  )}
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
