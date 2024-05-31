import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidenav from './components/Sidenav';
import Navbar from './components/Navbar';
import Pilmapres_2023 from './pages/2023/Pilmapres_2023';
import PKM_2023 from './pages/2023/PKM_2023';
import SatriaData_2023 from './pages/2023/SatriaData_2023';
import Gemastik_2023 from './pages/2023/Gemastik/Gemastik_2023';

const App = () => {
  return (
    <Router>
      <div className='font-public min-h-screen flex flex-col'>
        <Navbar />

        <div className='flex flex-grow h-full'>
          <Sidenav />

          {/* Route */}
          <Routes>
            <Route path="/" element={<Home />} />


            {/* GEMASTIK 2023 START */}
            <Route path='/gemastik/2023' element={<Gemastik_2023 />} />
            {/* GEMASTIK 2023 END */}

            <Route path='/pilmapres/2023' element={<Pilmapres_2023 />} />
            <Route path='/pkm/2023' element={<PKM_2023 />} />
            <Route path='/satria-data/2023' element={<SatriaData_2023 />} />

          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
