import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { Home, CalendarPlus, Gift, User } from 'lucide-react';
import HomePage from './pages/Home';
import AgendamentoWizard from './pages/AgendamentoWizard';
import LandingPage from './pages/LandingPage';
import './index.css';

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <nav className="bottom-nav">
        <NavLink to="/app" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} end>
          <Home size={24} /> Início
        </NavLink>
        <NavLink to="/app/agendar" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <CalendarPlus size={24} /> Agendar
        </NavLink>
        <NavLink to="/app/clube" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Gift size={24} /> Clube
        </NavLink>
        <NavLink to="/app/perfil" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <User size={24} /> Perfil
        </NavLink>
      </nav>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page no Domínio Raiz */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Aplicativo PWA isolado em /app */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="agendar" element={<AgendamentoWizard />} />
          <Route path="clube" element={<div className="mobile-container"><h2>Clube em Breve</h2></div>} />
          <Route path="perfil" element={<div className="mobile-container"><h2>Perfil em Breve</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
