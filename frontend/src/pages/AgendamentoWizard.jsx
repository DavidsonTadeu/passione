import { useState } from 'react';
import { ChevronRight, Scissors, Clock, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AgendamentoWizard = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step ${step >= 1 ? 'completed' : ''}`}>1</div>
      <div className={`step ${step >= 2 ? 'completed' : ''}`}>2</div>
      <div className={`step ${step >= 3 ? 'completed' : ''}`}>3</div>
      <div className={`step ${step >= 4 ? 'completed' : ''}`}>4</div>
    </div>
  );

  return (
    <div className="mobile-container">
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Agendar Horário</h2>
      {renderStepIndicator()}

      {step === 1 && (
        <div className="wizard-step">
          <h3 style={{ marginBottom: '1rem' }}>O que vamos fazer hoje?</h3>
          <div className="card" style={{ border: '2px solid var(--primary-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={() => setStep(2)}>
            <div>
              <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Scissors size={18} /> Corte Feminino
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Corte, lavagem e finalização.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <strong style={{ display: 'block', color: 'var(--primary-color)' }}>R$ 120,00</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}><Clock size={12} /> 60 min</span>
            </div>
          </div>
          <div className="card" onClick={() => setStep(2)}>
            <div>
              <h4 style={{ margin: 0 }}>Coloração Premium</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Tintura completa L'Oréal.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <strong style={{ display: 'block', color: 'var(--primary-color)' }}>R$ 250,00</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}><Clock size={12} /> 120 min</span>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="wizard-step">
          <h3 style={{ marginBottom: '1rem' }}>Escolha o Profissional</h3>
          <div className="card" onClick={() => setStep(3)}>
            <h4 style={{ margin: 0 }}>Qualquer Profissional Livre</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Maior disponibilidade de horários.</p>
          </div>
          <div className="card" style={{ border: '2px solid var(--primary-color)' }} onClick={() => setStep(3)}>
            <h4 style={{ margin: 0 }}>João Marcos</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Especialista em Cortes.</p>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="wizard-step">
          <h3 style={{ marginBottom: '1rem' }}>Escolha o Horário</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            <div className="card" style={{ minWidth: '80px', textAlign: 'center', margin: 0 }}>Dom<br/><b>12</b></div>
            <div className="card" style={{ minWidth: '80px', textAlign: 'center', margin: 0 }}>Seg<br/><b>13</b></div>
            <div className="card" style={{ minWidth: '80px', textAlign: 'center', margin: 0, border: '2px solid var(--primary-color)' }}>Ter<br/><b>14</b></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
             <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'transparent' }}>09:00</button>
             <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'transparent' }}>10:30</button>
             <button className="btn btn-primary">14:00</button>
             <button className="btn" style={{ border: '1px solid var(--border-color)', background: 'transparent' }}>16:00</button>
          </div>
          <button className="btn btn-accent" style={{ marginTop: '2rem' }} onClick={() => setStep(4)}>
            Avançar para Pagamento <ChevronRight size={20} />
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="wizard-step">
          <h3 style={{ marginBottom: '1rem' }}>Confirmar Agendamento</h3>
          <div className="card" style={{ background: '#F3F4F6' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Serviço:</strong> Corte Feminino</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Profissional:</strong> João Marcos</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong>Data:</strong> Terça, 14 de Maio às 14:00</p>
            
            <div style={{ borderTop: '1px dashed #D1D5DB', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Total do Serviço</span>
              <strong>R$ 120,00</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0', color: 'var(--primary-color)' }}>
              <span>Taxa de Reserva (Sinal)</span>
              <strong>R$ 30,00</strong>
            </div>
          </div>

          <div className="card" style={{ border: '1px solid #009EE3', display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <CreditCard color="#009EE3" size={28} />
             <div style={{ flex: 1 }}>
                <strong style={{ color: '#009EE3', display: 'block' }}>Pagar via Mercado Pago</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Ambiente 100% seguro.</span>
             </div>
          </div>

          <button className="btn" style={{ marginTop: '1rem', background: '#009EE3', color: 'white' }} onClick={() => {
            alert("Simulação Mercado Pago: Sinal de R$ 30,00 processado com sucesso. Agendamento Confirmado!");
            navigate('/');
          }}>
            Pagar Sinal (R$ 30,00) e Confirmar
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
            O valor de R$ 30,00 será abatido no caixa ao finalizar o serviço presencialmente.
          </p>
        </div>
      )}
    </div>
  );
};

export default AgendamentoWizard;
