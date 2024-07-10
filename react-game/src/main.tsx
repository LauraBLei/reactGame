import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from './pages/start';
import { CharacterSelection } from './pages/characterSelection';
import { GameProvider } from './hooks/gameContext';
import { GamePage } from './pages/game';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/Character" element={<CharacterSelection />} />
          <Route path="/Game" element={<GamePage />} />
          {/* <Route path="/Settings" element={<Settings />} /> */}
        </Routes>
       </BrowserRouter>
    </GameProvider>
  </React.StrictMode>,
)
