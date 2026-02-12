import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Choix} from './pages/Choix.tsx'
import './styles/index.css'
import App from './pages/App.tsx'
import { Victoire } from './pages/victoire.tsx';
import {GameSetter} from './pages/GameSetter.tsx';
import {NormalGameSetter} from './pages/NormalGameSetter.tsx';
import Personnalisation from './pages/Personnalisation.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/choix' element={<Choix/>} />
        <Route path='/choix/personnaliser' element={<Personnalisation/>} />
        <Route path='/game/normal' element={<NormalGameSetter />}/>
        <Route path='/game/personalised' element={<GameSetter />}/>
        <Route path='/victoire' element={<Victoire />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
