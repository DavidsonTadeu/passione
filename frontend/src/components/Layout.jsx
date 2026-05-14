import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, ShoppingBag, DollarSign, Settings, LogOut, Package, BarChart3, Star } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo-accent">Glow</span>
          <span className="logo-text">System</span>
        </div>
        
        <nav className="sidebar-nav">
          <NavLink to="/admin/painel" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} end>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/admin/painel/agenda" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Calendar size={20} /> Agenda
          </NavLink>
          <NavLink to="/admin/painel/comandas" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <ShoppingBag size={20} /> Comandas
          </NavLink>
          <NavLink to="/admin/painel/financeiro" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <DollarSign size={20} /> Financeiro
          </NavLink>
          <NavLink to="/admin/painel/estoque" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Package size={20} /> Estoque
          </NavLink>
          <NavLink to="/admin/painel/relatorios" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BarChart3 size={20} /> Relatórios
          </NavLink>
          <NavLink to="/admin/painel/fidelizacao" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Star size={20} /> Fidelização
          </NavLink>
          <NavLink to="/admin/painel/configuracoes" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Settings size={20} /> Configurações
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="btn-logout">
            <LogOut size={20} /> Sair
          </button>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="top-header">
          <h2>Bem-vinda, Administradora</h2>
          <div className="avatar">A</div>
        </header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
