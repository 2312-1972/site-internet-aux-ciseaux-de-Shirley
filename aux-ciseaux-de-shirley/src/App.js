// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Femmes from './pages/Femmes';
import Hommes from './pages/Hommes';
import Mariages from './pages/Mariages';

const App = () => (
  <Router>
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/femmes" element={<Femmes />} />
        <Route path="/hommes" element={<Hommes />} />
        <Route path="/mariages" element={<Mariages />} />
      </Routes>
    </div>
  </Router>
);

export default App;
