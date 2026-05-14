import { useState } from 'react';
import { Search, Plus, Check } from 'lucide-react';

const Comandas = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Comandas e PDV</h1>
          <p className="text-secondary">Abra novas comandas e finalize pagamentos.</p>
        </div>
        <button className="btn btn-accent">
          <Plus size={20} /> Nova Comanda
        </button>
      </div>

      <div className="card">
        <div className="calendar-toolbar" style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
           <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '400px' }}>
             <input type="text" placeholder="Buscar por cliente..." className="form-select" style={{ flex: 1 }} />
             <button className="btn btn-primary"><Search size={18}/></button>
           </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Nº</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Cliente</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Serviços/Produtos</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Status</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Total</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>#001</td>
              <td style={{ padding: '1rem' }}>Maria Silva</td>
              <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Corte Feminino, Shampoo</td>
              <td style={{ padding: '1rem' }}>
                <span className="activity-status status-pending">Em Aberto</span>
              </td>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>R$ 150,00</td>
              <td style={{ padding: '1rem' }}>
                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
                  <Check size={16}/> Fechar
                </button>
              </td>
            </tr>
             <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>#002</td>
              <td style={{ padding: '1rem' }}>Ana Souza</td>
              <td style={{ padding: '1rem', fontSize: '0.875rem' }}>Coloração</td>
              <td style={{ padding: '1rem' }}>
                <span className="activity-status" style={{ backgroundColor: '#D1FAE5', color: '#065F46' }}>Finalizada</span>
              </td>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>R$ 220,00</td>
              <td style={{ padding: '1rem' }}>
                <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem', border: '1px solid var(--border-color)' }}>
                  Ver Recibo
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comandas;
