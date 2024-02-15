import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TablePlayerStats from './components/TablePlayerStats';
import NumberInputBasic from './components/NumberInput';
import TableTeamStats from './components/TableTeamStats';
import ResponsiveNavBar from './components/ResponsiveNavBar';
import PlayerPage from './pages/PlayerPage';
import TeamPage from './pages/TeamPage';
import StatAcademyPage from './pages/StatAcademyPage';
import HomePage from './pages/HomePage';

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
        <Route path="/statAcademy" element={<StatAcademyPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
