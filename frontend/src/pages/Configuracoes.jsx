const Configuracoes = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Configurações</h1>
          <p className="text-secondary">Gerencie os cadastros do seu estabelecimento.</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h3 className="section-title">Serviços Oferecidos</h3>
          <ul className="activity-list">
            <li className="activity-item" style={{ justifyContent: 'space-between' }}>
              <div className="activity-details">
                <h4>Corte Feminino</h4>
                <p>Duração: 60 min</p>
              </div>
              <strong style={{ fontSize: '1.1rem' }}>R$ 100,00</strong>
            </li>
            <li className="activity-item" style={{ justifyContent: 'space-between' }}>
              <div className="activity-details">
                <h4>Coloração</h4>
                <p>Duração: 120 min</p>
              </div>
              <strong style={{ fontSize: '1.1rem' }}>R$ 220,00</strong>
            </li>
          </ul>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
            + Adicionar Serviço
          </button>
        </div>

        <div className="card">
          <h3 className="section-title">Equipe (Profissionais)</h3>
           <ul className="activity-list">
            <li className="activity-item" style={{ gap: '1rem' }}>
              <div className="avatar" style={{ width: '48px', height: '48px' }}>J</div>
              <div className="activity-details">
                <h4>João Marcos</h4>
                <p>Especialista em Cortes</p>
              </div>
            </li>
            <li className="activity-item" style={{ gap: '1rem' }}>
              <div className="avatar" style={{ width: '48px', height: '48px' }}>C</div>
              <div className="activity-details">
                <h4>Carla Dias</h4>
                <p>Manicure e Pedicure</p>
              </div>
            </li>
          </ul>
          <button className="btn btn-accent" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
            + Adicionar Profissional
          </button>
        </div>

        <div className="card">
          <h3 className="section-title">Jornada de Trabalho</h3>
           <ul className="activity-list">
            <li className="activity-item" style={{ justifyContent: 'space-between' }}>
              <div className="activity-details">
                <h4>Dias Úteis (Seg - Sex)</h4>
              </div>
              <strong style={{ fontSize: '1.1rem' }}>09:00 às 19:00</strong>
            </li>
            <li className="activity-item" style={{ justifyContent: 'space-between' }}>
              <div className="activity-details">
                <h4>Sábados</h4>
              </div>
              <strong style={{ fontSize: '1.1rem' }}>09:00 às 14:00</strong>
            </li>
          </ul>
           <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
            Ajustar Horários
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
