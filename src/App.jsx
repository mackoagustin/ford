// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Services/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
