import { BrowserRouter, Routes, Route, Navigate, NavLink, Outlet } from 'react-router-dom';
import { Home, CalendarPlus, Gift, User } from 'lucide-react';

// Páginas Administrativas (Painel Web)
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Agenda from './pages/Agenda';
import Comandas from './pages/Comandas';
import Financeiro from './pages/Financeiro';
import Estoque from './pages/Estoque';
import Relatorios from './pages/Relatorios';
import Fidelizacao from './pages/Fidelizacao';
import Configuracoes from './pages/Configuracoes';

// Páginas do Cliente (Landing Page & PWA)
import LandingPage from './pages/LandingPage';
import ClientHome from './pages/Home';
import AgendamentoWizard from './pages/AgendamentoWizard';

// Layout do App PWA (Barra de Navegação Inferior)
const ClientAppLayout = () => {
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
  const isAuthenticated = true; // Simulação para MVP. Na vida real, verificaria token.

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Raiz: A vitrine do salão */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rotas do Aplicativo Mobile do Cliente */}
        <Route path="/app" element={<ClientAppLayout />}>
          <Route index element={<ClientHome />} />
          <Route path="agendar" element={<AgendamentoWizard />} />
          <Route path="clube" element={<div className="mobile-container"><h2>Clube em Breve</h2></div>} />
          <Route path="perfil" element={<div className="mobile-container"><h2>Perfil em Breve</h2></div>} />
        </Route>

        {/* Rotas de Administração (Acesso Restrito) */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />
        <Route path="/admin/login" element={<Login />} />
        
        {/* Painel Administrativo do Salão */}
        <Route path="/admin/painel" element={isAuthenticated ? <Layout /> : <Navigate to="/admin/login" />}>
          <Route index element={<Dashboard />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="comandas" element={<Comandas />} />
          <Route path="financeiro" element={<Financeiro />} />
          <Route path="estoque" element={<Estoque />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="fidelizacao" element={<Fidelizacao />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
