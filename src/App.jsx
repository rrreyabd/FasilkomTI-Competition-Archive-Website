import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidenav from './components/Sidenav';
import { contests } from './lib/placeholder-data';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className='font-public h-screen flex flex-col'>
        <Navbar />

        <div className='flex flex-grow'>
          <Sidenav />

          {/* react-router-dom below */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Melakukan perulangan sebanyak halaman dari `contests` */}
            {contests.length > 0 && contests.map((contest) => {
              const PageComponent = contest.pages;
              return <Route key={contest.id} path={contest.url} element={<PageComponent />} />;
            })}

          </Routes>
          {/*  */}

        </div>
      </div>
    </Router>
  );
}

export default App;
