import { Package, Plus, ArrowDown, ArrowUp, AlertTriangle } from 'lucide-react';

const Estoque = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Estoque Inteligente</h1>
          <p className="text-secondary">Controle de saldo, custos, validade e lucratividade.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} /> Novo Produto
        </button>
      </div>

      <div className="card">
        <h3 className="section-title">Inventário Atual</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Produto</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Tipo</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Validade</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Qtd</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Custo</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Lucro Previsto</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '1rem', fontWeight: '500' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={18} className="text-wine" /> Shampoo Hidratação 1L
                </div>
              </td>
              <td style={{ padding: '1rem' }}>Consumo Interno</td>
              <td style={{ padding: '1rem', color: '#991B1B' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertTriangle size={14} /> 15/10/2026
                </div>
              </td>
              <td style={{ padding: '1rem', color: '#991B1B', fontWeight: 'bold' }}>2</td>
              <td style={{ padding: '1rem' }}>R$ 45,00</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>--</td>
              <td style={{ padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                 <button className="btn" style={{ padding: '0.4rem', border: '1px solid var(--border-color)' }} title="Entrada">
                  <ArrowUp size={16} color="#065F46" />
                </button>
                <button className="btn" style={{ padding: '0.4rem', border: '1px solid var(--border-color)' }} title="Saída">
                  <ArrowDown size={16} color="#991B1B" />
                </button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '1rem', fontWeight: '500' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Package size={18} className="text-gold" /> Óleo Reparador 50ml
                </div>
              </td>
              <td style={{ padding: '1rem' }}>Venda (Varejo)</td>
              <td style={{ padding: '1rem' }}>10/05/2028</td>
              <td style={{ padding: '1rem', color: '#065F46', fontWeight: 'bold' }}>15</td>
              <td style={{ padding: '1rem' }}>R$ 15,00</td>
              <td style={{ padding: '1rem', color: '#065F46', fontWeight: 'bold' }}>R$ 35,00 (70%)</td>
              <td style={{ padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                 <button className="btn" style={{ padding: '0.4rem', border: '1px solid var(--border-color)' }}>
                  <ArrowUp size={16} color="#065F46" />
                </button>
                <button className="btn" style={{ padding: '0.4rem', border: '1px solid var(--border-color)' }}>
                  <ArrowDown size={16} color="#991B1B" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estoque;
