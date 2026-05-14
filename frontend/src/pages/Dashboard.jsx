import { TrendingUp, Users, CalendarCheck, ShoppingBag } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Visão Geral</h1>
        <p className="text-secondary">Resumo do dia e performance do salão.</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon bg-gold-light">
            <TrendingUp size={24} className="text-gold" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Faturamento Hoje</p>
            <h3 className="metric-value">R$ 1.250,00</h3>
            <span className="metric-trend positive">+15% em relação a ontem</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon bg-wine-light">
            <CalendarCheck size={24} className="text-wine" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Agendamentos Hoje</p>
            <h3 className="metric-value">24</h3>
            <span className="metric-trend">4 ainda pendentes</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon bg-wine-light">
            <Users size={24} className="text-wine" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Novos Clientes</p>
            <h3 className="metric-value">3</h3>
            <span className="metric-trend">Na última semana</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon bg-gold-light">
            <ShoppingBag size={24} className="text-gold" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Serviços Realizados</p>
            <h3 className="metric-value">18</h3>
            <span className="metric-trend positive">Corte, Escova e Coloração</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="card recent-activity">
          <h3 className="section-title">Próximos Agendamentos</h3>
          <ul className="activity-list">
            <li className="activity-item">
              <div className="activity-time">14:00</div>
              <div className="activity-details">
                <h4>Maria Silva</h4>
                <p>Corte + Hidratação com João</p>
              </div>
              <div className="activity-status status-pending">Pendente</div>
            </li>
            <li className="activity-item">
              <div className="activity-time">15:30</div>
              <div className="activity-details">
                <h4>Ana Souza</h4>
                <p>Coloração com Carla</p>
              </div>
              <div className="activity-status status-pending">Pendente</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
