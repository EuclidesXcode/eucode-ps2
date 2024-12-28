import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import{ ISOs, Comunidade, Sobre, Donate, Header } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ISOs />} />
          <Route path="/isos" element={<ISOs />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
