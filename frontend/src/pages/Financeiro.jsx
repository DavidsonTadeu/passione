import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react';

const Financeiro = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Gestão Financeira</h1>
          <p className="text-secondary">Fluxo de caixa, contas a pagar/receber e taxas de cartão.</p>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon bg-wine-light">
            <ArrowUpRight size={24} color="#065F46" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Contas a Receber</p>
            <h3 className="metric-value">R$ 5.240,00</h3>
            <span className="metric-trend">Neste mês</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon bg-wine-light">
            <ArrowDownRight size={24} color="#991B1B" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Contas a Pagar</p>
            <h3 className="metric-value">R$ 2.150,00</h3>
            <span className="metric-trend negative">Vencimentos próximos</span>
          </div>
        </div>
        
        <div className="metric-card">
          <div className="metric-icon bg-gold-light">
            <CreditCard size={24} className="text-gold" />
          </div>
          <div className="metric-content">
            <p className="metric-title">Taxas Mercado Pago</p>
            <h3 className="metric-value">R$ 310,40</h3>
            <span className="metric-trend negative">Total deduzido automático</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="section-title">Histórico de Transações</h3>
        <ul className="activity-list">
          <li className="activity-item">
            <div className="metric-icon bg-wine-light" style={{ width: '40px', height: '40px' }}>
              <ArrowUpRight size={20} color="#065F46" />
            </div>
            <div className="activity-details">
              <h4>Comanda #1042 - Mariana Costa</h4>
              <p>Pix (Mercado Pago)</p>
            </div>
            <strong style={{ fontSize: '1.1rem', color: '#065F46' }}>+ R$ 150,00</strong>
          </li>
          <li className="activity-item">
            <div className="metric-icon bg-wine-light" style={{ width: '40px', height: '40px' }}>
              <ArrowDownRight size={20} color="#991B1B" />
            </div>
            <div className="activity-details">
              <h4>Pagamento Fornecedor (L'Oréal)</h4>
              <p>Boleto Bancário</p>
            </div>
            <strong style={{ fontSize: '1.1rem', color: '#991B1B' }}>- R$ 850,00</strong>
          </li>
          <li className="activity-item">
            <div className="metric-icon bg-gold-light" style={{ width: '40px', height: '40px' }}>
              <CreditCard size={20} className="text-gold" />
            </div>
            <div className="activity-details">
              <h4>Taxa Mercado Pago (Comanda #1041)</h4>
              <p>Cartão de Crédito (4.99%)</p>
            </div>
            <strong style={{ fontSize: '1.1rem', color: '#991B1B' }}>- R$ 12,47</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Financeiro;
