import { BarChart3, PieChart, Users } from 'lucide-react';

const Relatorios = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Departamento Pessoal & Comissões</h1>
          <p className="text-secondary">Visão avançada de repasses, vales e adiantamentos.</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
         <h3 className="section-title">Extrato da Equipe (Mês Atual)</h3>
         <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Profissional</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Serviços Realizados</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Comissão Bruta</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Vales/Adiantamentos</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', textAlign: 'right' }}>Repasse Líquido</th>
            </tr>
          </thead>
          <tbody>
             <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={16} /> João Marcos
                </div>
              </td>
              <td style={{ padding: '1rem' }}>45</td>
              <td style={{ padding: '1rem', color: '#065F46' }}>R$ 1.800,00</td>
              <td style={{ padding: '1rem', color: '#991B1B' }}>- R$ 300,00</td>
              <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold', fontSize: '1.1rem' }}>R$ 1.500,00</td>
            </tr>
             <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
               <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={16} /> Carla Dias
                </div>
              </td>
              <td style={{ padding: '1rem' }}>38</td>
              <td style={{ padding: '1rem', color: '#065F46' }}>R$ 1.120,00</td>
              <td style={{ padding: '1rem', color: '#991B1B' }}>- R$ 0,00</td>
              <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold', fontSize: '1.1rem' }}>R$ 1.120,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Relatorios;
