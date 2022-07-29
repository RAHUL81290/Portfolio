import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter,Route,Routes } from 'react-router-dom';
import Navabout from './components/Navabout';
import Navskills from './components/Navskills';
import Navproject from './components/Navproject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Navabout" element={<Navabout/>} />
      <Route path="Navskills" element={<Navskills/>} />
      <Route path="Navproject" element={<Navproject/>} />
    </Routes>
    </HashRouter>
    
  </React.StrictMode>

);
