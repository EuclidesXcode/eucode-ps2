import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Community, Sobre, Donate, Emulator, Header, ISOs } from './components';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div style={{ marginTop: '64px' }}>
                    <Routes>
                        <Route path="/" element={<ISOs />} />
                        <Route path="/isos" element={<ISOs />} />
                        <Route path="/emulator" element={<Emulator />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/donate" element={<Donate />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
