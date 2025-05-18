// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import useIsMobile from '../../hook/useIsMobile';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {isMobile && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </div>
        )}

        <div className={styles.logo}>
          <img src="/img/logo/logo.png" alt="Logo" />
        </div>

        {!isMobile ? (
          // Desktop Menu
          <ul className={`${styles.navLinks} ${styles.desktop}`}>
            <li><Link to="/vehiculos">Vehículos</Link></li>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('financiacion')}>Financiación ▾</button>
              {openSubmenu === 'financiacion' && (
                <ul className={styles.submenu}>
                  <li><Link to="/financiacion/ford-credit">Ford Credit</Link></li>
                  <li><Link to="/financiacion/plan-ovalo">Plan Óvalo</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/ford-pro">Ford Pro</Link></li>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('postventa')}>Post venta ▾</button>
              {openSubmenu === 'postventa' && (
                <ul className={styles.submenu}>
                  <li><Link to="/postventa/talleres">Talleres</Link></li>
                  <li><Link to="/postventa/solicitar-turno">Solicitar turno</Link></li>
                  <li><Link to="/postventa/servicios">Servicios</Link></li>
                  <li><Link to="/postventa/repuestos">Repuestos</Link></li>
                  <li><Link to="/postventa/accesorios">Accesorios</Link></li>
                  <li><Link to="/postventa/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                  <li><Link to="/postventa/ford-protect">Ford Protect</Link></li>
                </ul>
              )}
            </li>
            <li className={styles.hasSubmenu}>
              <button onClick={() => toggleSubmenu('quienes')}>Quiénes somos ▾</button>
              {openSubmenu === 'quienes' && (
                <ul className={styles.submenu}>
                  <li><Link to="/quienes-somos/conocenos">Conocenos</Link></li>
                  <li><Link to="/quienes-somos/sumate">Sumate al equipo</Link></li>
                  <li><Link to="/quienes-somos/novedades">Novedades</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/sucursales">Sucursales</Link></li>
          </ul>
        ) : (
          // Mobile Menu
          isOpen && (
            <ul className={`${styles.navLinks} ${styles.mobile}`}>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/vehiculos" onClick={toggleMenu}>Vehículos</Link></li>
              <li className={styles.hasSubmenu}>
                <button onClick={() => toggleSubmenu('financiacion')}>Financiación ▾</button>
                {openSubmenu === 'financiacion' && (
                  <ul className={styles.submenu}>
                    <li><Link to="/financiacion/ford-credit">Ford Credit</Link></li>
                    <li><Link to="/financiacion/plan-ovalo">Plan Óvalo</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/ford-pro" onClick={toggleMenu}>Ford Pro</Link></li>
              <li className={styles.hasSubmenu}>
                <button onClick={() => toggleSubmenu('postventa')}>Post venta ▾</button>
                {openSubmenu === 'postventa' && (
                  <ul className={styles.submenu}>
                    <li><Link to="/postventa/talleres">Talleres</Link></li>
                    <li><Link to="/postventa/solicitar-turno">Solicitar turno</Link></li>
                    <li><Link to="/postventa/servicios">Servicios</Link></li>
                    <li><Link to="/postventa/repuestos">Repuestos</Link></li>
                    <li><Link to="/postventa/accesorios">Accesorios</Link></li>
                    <li><Link to="/postventa/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                    <li><Link to="/postventa/ford-protect">Ford Protect</Link></li>
                  </ul>
                )}
              </li>
              <li className={styles.hasSubmenu}>
                <button onClick={() => toggleSubmenu('quienes')}>Quiénes somos ▾</button>
                {openSubmenu === 'quienes' && (
                  <ul className={styles.submenu}>
                    <li><Link to="/quienes-somos/conocenos">Conocenos</Link></li>
                    <li><Link to="/quienes-somos/sumate">Sumate al equipo</Link></li>
                    <li><Link to="/quienes-somos/novedades">Novedades</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/sucursales" onClick={toggleMenu}>Sucursales</Link></li>
            </ul>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
