// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';


import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Financing from './pages/Financing';
import FordPro from './pages/FordPro';
import PostSale from './pages/PostSale';
import AboutUs from './pages/AboutUs';
import Branches from './pages/Branches';

// Subrutas
import FordCredit from './pages/financing/FordCredit';
import PlanOvalo from './pages/financing/PlanOvalo';
import AdjudicationActs from './pages/financing/AdjudicationActs';
import ResultActs from './pages/financing/ResultActs';
import Workshops from './pages/postsale/Workshops';
import RequestTurn from './pages/postsale/RequestTurn';
import Services from './pages/postsale/Services';
import Parts from './pages/postsale/Parts';
import Accessories from './pages/postsale/Accesories';
import FAQ from './pages/postsale/FAQ';
import FordProtect from './pages/postsale/FordProtect';
import KnowUs from './pages/about/KnowUs';
import JoinTeam from './pages/about/JoinTeam/JoinTeam';
import News from './pages/about/News';


// Dinámicas
import VehicleDetail from './pages/Vehicle/VehicleDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehiculos" element={<Vehicles />} />
        <Route path="/vehiculos/:id" element={<VehicleDetail />} />
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
        <Route path="/postventa/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/postventa/ford-protect" element={<FordProtect />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/quienes-somos/conocenos" element={<KnowUs />} />
        <Route path="/quienes-somos/sumate" element={<JoinTeam />} />
        <Route path="/quienes-somos/novedades" element={<News />} />
        <Route path="/sucursales" element={<Branches />} />
      </Routes>
    </Router>
  );
}

export default App;
