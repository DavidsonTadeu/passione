import { CalendarClock, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>Olá, <strong>Mariana!</strong></p>
        <h1 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>Pronta para brilhar hoje?</h1>
      </div>

      {/* Próximo Agendamento */}
      <div className="card" style={{ background: 'var(--primary-color)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', margin: 0 }}>
            <CalendarClock size={20} color="var(--accent-color)" /> Próximo Agendamento
          </h3>
          <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.2)', padding: '0.2rem 0.5rem', borderRadius: '12px' }}>Confirmado</span>
        </div>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Amanhã, 14:00</p>
        <p style={{ fontSize: '0.9rem', color: '#E5E7EB' }}>Corte & Escova com João Marcos</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: 'white' }}>Remarcar</button>
          <button style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: 'none', background: 'var(--card-bg)', color: 'var(--primary-color)', fontWeight: 'bold' }}>Ver Detalhes</button>
        </div>
      </div>

      {/* Clube de Fidelidade */}
      <div className="card" style={{ border: '1px solid var(--accent-color)' }} onClick={() => navigate('/clube')}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#FEF3C7', padding: '0.75rem', borderRadius: '50%' }}>
              <Star size={24} color="var(--accent-color)" />
            </div>
            <div>
              <h4 style={{ color: 'var(--text-main)', margin: 0 }}>Clube Glow</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Você tem <strong>450 pontos</strong></p>
            </div>
          </div>
          <ChevronRight size={20} color="var(--text-secondary)" />
        </div>
      </div>

      {/* Call to Action Central */}
      <button className="btn btn-accent" onClick={() => navigate('/agendar')} style={{ padding: '1rem', marginTop: '1rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>
        Novo Agendamento
      </button>
    </div>
  );
};

export default HomePage;
