import { Plus, ChevronLeft, ChevronRight, Filter, Users, AlertCircle, Clock } from 'lucide-react';

const Agenda = () => {
  return (
    <div className="page-container" style={{ display: 'flex', gap: '2rem' }}>
      {/* Coluna Principal da Agenda */}
      <div style={{ flex: 1 }}>
        <div className="page-header">
          <div>
            <h1 className="page-title">Agenda Inteligente</h1>
            <p className="text-secondary">Controle de horários, encaixes e fila de espera automática.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn" style={{ border: '1px solid var(--border-color)' }}>
              <Filter size={20} /> Filtrar Profissional
            </button>
            <button className="btn btn-primary">
              <Plus size={20} /> Novo Agendamento
            </button>
          </div>
        </div>

        {/* Calendar UI Mockup */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Hoje, 14 de Maio</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
               <button className="btn" style={{ padding: '0.5rem' }}><ChevronLeft size={20} /></button>
               <button className="btn" style={{ padding: '0.5rem' }}><ChevronRight size={20} /></button>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ padding: '1rem', borderRight: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)' }}>
              09:00
            </div>
            <div style={{ padding: '0.5rem' }}>
              <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '0.75rem', borderRadius: '6px', fontSize: '0.875rem' }}>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Corte & Escova - Mariana Costa</strong>
                <span>Profissional: João Marcos</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ padding: '1rem', borderRight: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)' }}>
              10:00
            </div>
            <div style={{ padding: '0.5rem' }}>
              <div style={{ backgroundColor: '#FEF3C7', color: '#92400E', padding: '0.75rem', borderRadius: '6px', fontSize: '0.875rem', border: '1px solid #F59E0B' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>Manicure - Alice Dias</strong>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}><AlertCircle size={14} /> ENCAIXE</span>
                </div>
                <span>Profissional: Carla Dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coluna Lateral da Lista de Espera */}
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card">
          <h3 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} className="text-gold" /> Lista de Espera
          </h3>
          <p className="text-secondary" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
            O robô notificará via WhatsApp caso surja uma vaga nestes períodos.
          </p>

          <ul className="activity-list">
            <li className="activity-item" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '0.75rem', border: '1px dashed var(--border-color)', borderRadius: '6px' }}>
               <strong style={{ fontSize: '0.95rem' }}>Fernanda Lima</strong>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Deseja: Corte Feminino</p>
               <span style={{ marginTop: '0.5rem', fontSize: '0.75rem', backgroundColor: '#FEF3C7', color: '#92400E', padding: '0.2rem 0.5rem', borderRadius: '12px' }}>Aguardando vaga (Tarde)</span>
            </li>
            <li className="activity-item" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '0.75rem', border: '1px dashed var(--border-color)', borderRadius: '6px' }}>
               <strong style={{ fontSize: '0.95rem' }}>Rodrigo Silva</strong>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Deseja: Coloração Premium</p>
               <span style={{ marginTop: '0.5rem', fontSize: '0.75rem', backgroundColor: '#D1FAE5', color: '#065F46', padding: '0.2rem 0.5rem', borderRadius: '12px' }}>Notificado pelo Robô</span>
            </li>
          </ul>

          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center', fontSize: '0.85rem' }}>
            + Adicionar à Fila
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
