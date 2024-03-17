// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import TablePlayerStats from './components/TablePlayerStats';
// import NumberInputBasic from './components/NumberInput';
// import TableTeamStats from './components/TableTeamStats';
import ResponsiveNavBar from './components/ResponsiveNavBar';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';
import ComparePage from './pages/ComparePage';
import StatAcademyPage from './pages/StatAcademyPage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <ResponsiveNavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/statAcademy" element={<StatAcademyPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
