import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.tsx/index.ts';  
import About from './pages/About.tsx'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Vivienda Comunitaria para Mujeres y Personas NB</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


