// src/App.jsx
import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './hook/ScrollToTop';

import Navbar from './components/Navbar/Navbar';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import TrackingLoader from './components/TrackingLoader/TrackingLoader';
import useTaskScheduler from './hooks/useTaskScheduler';

// Lazy load de componentes pesados
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat/WhatsAppFloat'));

// Lazy load de páginas principales
const Home = lazy(() => import('./pages/Home'));
const Vehicles = lazy(() => import('./pages/Vehicles'));
const Financing = lazy(() => import('./pages/Financing'));
const FordPro = lazy(() => import('./pages/FordPro'));
const PostSale = lazy(() => import('./pages/PostSale'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Branches = lazy(() => import('./pages/Branches'));

// Lazy load de subrutas
const FordCredit = lazy(() => import('./pages/financing/FordCredit'));
const PlanOvalo = lazy(() => import('./pages/financing/PlanOvalo'));
const AdjudicationActs = lazy(() => import('./pages/financing/AdjudicationActs'));
const ResultActs = lazy(() => import('./pages/financing/ResultActs'));
const Workshops = lazy(() => import('./pages/postsale/Workshops'));
const RequestTurn = lazy(() => import('./pages/postsale/RequestTurn'));
const Services = lazy(() => import('./pages/postsale/Services'));
const Parts = lazy(() => import('./pages/postsale/Parts'));
const Accessories = lazy(() => import('./pages/postsale/Accesories'));
const FAQ = lazy(() => import('./pages/postsale/FAQ'));
const FordProtect = lazy(() => import('./pages/postsale/FordProtect'));
const KnowUs = lazy(() => import('./pages/about/KnowUs'));
const JoinTeam = lazy(() => import('./pages/about/JoinTeam/JoinTeam'));
const News = lazy(() => import('./pages/about/News'));
const Test = lazy(() => import('./pages/test'));

// Lazy load de páginas dinámicas
const VehicleDetail = lazy(() => import('./pages/Vehicle/VehicleDetail'));

function App() {
  const { scheduleTask } = useTaskScheduler();

  // Función optimizada para preload de rutas
  const preloadRoutes = useCallback(() => {
    // Dividir el preload en tareas más pequeñas
    scheduleTask(async () => {
      await import('./pages/Vehicles');
    }, 'low');
    
    scheduleTask(async () => {
      await import('./pages/Financing');
    }, 'low');
  }, [scheduleTask]);

  // Preload de rutas críticas después de la carga inicial
  useEffect(() => {
    // Usar requestIdleCallback para preload cuando el navegador esté libre
    const schedulePreload = () => {
      if (window.requestIdleCallback) {
        requestIdleCallback(preloadRoutes, { timeout: 5000 });
      } else {
        // Fallback para navegadores que no soportan requestIdleCallback
        setTimeout(preloadRoutes, 2000);
      }
    };

    schedulePreload();
  }, [preloadRoutes]);

  return (
    <Router>
      <ScrollToTop />
      <TrackingLoader />
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculos" element={<Vehicles />} />
          <Route path="/vehiculos/:id" element={<VehicleDetail />} />
          <Route path="/vehiculos/test-drive" element={<Test />} />
          <Route path="/financiacion" element={<Financing />} />
          <Route path="/financiacion/ford-credit" element={<FordCredit />} />
          <Route path="/financiacion/plan-ovalo" element={<PlanOvalo />} />
          <Route path="/financiacion/plan-ovalo/actos-de-adjudicacion" element={<AdjudicationActs />} />
          <Route path="/financiacion/plan-ovalo/resultados-actos-de-adjudicacion" element={<ResultActs />} />
          <Route path="/ford-pro" element={<FordPro />} />
          <Route path="/postventa" element={<PostSale />} />
          <Route path="/postventa/talleres" element={<Workshops />} />
          <Route path="/postventa/solicitar-turno" element={<RequestTurn />} />
          <Route path="/postventa/servicios" element={<Services />} />
          <Route path="/postventa/repuestos" element={<Parts />} />
          <Route path="/postventa/accesorios" element={<Accessories />} />
          {/* <Route path="/postventa/preguntas-frecuentes" element={<FAQ />} /> */}
          <Route path="/postventa/ford-protect" element={<FordProtect />} />
          <Route path="/quienes-somos" element={<AboutUs />} />
          <Route path="/quienes-somos/conocenos" element={<KnowUs />} />
          <Route path="/quienes-somos/sumate" element={<JoinTeam />} />
          <Route path="/quienes-somos/novedades" element={<News />} />
          <Route path="/sucursales" element={<Branches />} />
        </Routes>
      </Suspense>
      
      {/* Componente WhatsApp flotante que aparece en todas las páginas */}
      <Suspense fallback={<div></div>}>
        <WhatsAppFloat 
          phoneNumber="5491126633000"
          message="Hola, me gustaría obtener más información sobre Ford"
          position="bottom-right"
        />
      </Suspense>
    </Router>
  );
}

export default App;
