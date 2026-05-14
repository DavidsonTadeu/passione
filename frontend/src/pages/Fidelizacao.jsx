import { Star, Gift, Send } from 'lucide-react';

const Fidelizacao = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Fidelização e Notificações</h1>
          <p className="text-secondary">Programa de pontos e envio de campanhas aos clientes.</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h3 className="section-title">Central de Notificações</h3>
          <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Simule o envio de alertas e promoções (WhatsApp/Push) para a base de clientes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Título da Campanha (ex: Promoção Dia das Mães)" className="form-select" />
            <textarea placeholder="Mensagem..." className="form-select" rows="4" style={{ resize: 'none' }}></textarea>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <select className="form-select" style={{ flex: 1 }}>
                <option>Todos os Clientes</option>
                <option>Clientes Inativos há 30 dias</option>
                <option>Clientes Premium (Mais Pontos)</option>
              </select>
              <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                <Send size={18} /> Disparar
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{ margin: 0 }}>Ranking de Fidelidade</h3>
            <span style={{ fontSize: '0.875rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>
              Regra: R$ 10,00 = 1 Ponto
            </span>
          </div>
          
           <ul className="activity-list">
            <li className="activity-item" style={{ gap: '1rem' }}>
              <div className="metric-icon bg-gold-light" style={{ width: '40px', height: '40px' }}>
                <Star size={20} className="text-gold" />
              </div>
              <div className="activity-details">
                <h4>Juliana Ferreira</h4>
                <p>Última visita: Hoje</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--primary-color)' }}>450 pts</strong>
                <p style={{ fontSize: '0.75rem', color: '#065F46' }}>Apto para resgate</p>
              </div>
            </li>
            <li className="activity-item" style={{ gap: '1rem' }}>
              <div className="metric-icon bg-wine-light" style={{ width: '40px', height: '40px' }}>
                <Gift size={20} className="text-wine" />
              </div>
              <div className="activity-details">
                <h4>Amanda Lima</h4>
                <p>Última visita: 12/04</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--primary-color)' }}>120 pts</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fidelizacao;
