import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, ShoppingBag, MapPin, Phone, PackageSearch, Droplets, Feather, SprayCan } from 'lucide-react';
import './LandingPage.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="lp-nav">
        <div className="lp-logo">PASSIONE</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '0.9rem' }} onClick={() => navigate('/admin')}>Login Equipe</button>
          <button className="lp-btn-outline" onClick={() => navigate('/app')}>Área do Cliente</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 variants={fadeInUp}>O Melhor da Beleza para Você</motion.h1>
          <motion.p variants={fadeInUp}>Desde 2010 em BH, elevando sua autoestima com um atendimento de alto padrão.</motion.p>
          <motion.button 
            className="lp-btn-primary" 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/app/agendar')}
          >
            Agende sua Experiência
          </motion.button>
        </motion.div>
      </section>

      {/* Nossa Essência */}
      <section className="essence-section">
        <motion.div 
          className="essence-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="essence-text" variants={fadeInUp}>
            <h2>Nossa Essência</h2>
            <p>Nascido em Belo Horizonte, o Passione cresceu com o objetivo de oferecer o melhor da beleza para você e sua família. Um ambiente acolhedor, profissionais altamente capacitados e o compromisso inabalável com a sua satisfação.</p>
          </motion.div>
          <motion.div className="essence-image" variants={fadeInUp}>
            <div className="image-placeholder">
              <span>Imagem do Salão (Premium)</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Especialidades */}
      <section className="services-section">
        <motion.div 
          className="services-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>O Que Fazemos</motion.h2>
          <div className="services-grid">
            <motion.div className="service-card" variants={fadeInUp}>
              <Scissors size={40} color="var(--accent-color)" />
              <h3>Cabelo & Tratamentos</h3>
              <p>Cortes modernos, coloração premium, mechas e cronogramas capilares completos.</p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
              <Sparkles size={40} color="var(--accent-color)" />
              <h3>Maquiagem</h3>
              <p>Produção impecável para o rosto, olhos e boca. Especialistas em noivas e eventos.</p>
            </motion.div>
            <motion.div className="service-card" variants={fadeInUp}>
               <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', fontWeight: 'bold' }}>B</div>
              <h3>Barbearia</h3>
              <p>Um espaço exclusivo e de alta classe focado no estilo e bem-estar masculino.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Boutique */}
      <section className="boutique-section" id="boutique">
         <motion.div 
          className="boutique-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
            <h2>Boutique Passione</h2>
            <p>O melhor da tecnologia capilar e cuidados com a beleza, agora na sua casa. Produtos homologados e utilizados por nossos especialistas.</p>
         </motion.div>

         <motion.div 
           className="boutique-grid"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={staggerContainer}
         >
           {/* Kits Completos */}
           <motion.div className="boutique-card" variants={fadeInUp}>
             <div className="card-icon"><PackageSearch size={32} /></div>
             <h3>Kits Completos</h3>
             <p>Cronogramas personalizados para cabelos cacheados, com coloração, grisalhos ou quebradiços.</p>
             <button className="boutique-btn" onClick={() => window.open('https://wa.me/553173634762?text=Olá, quero saber mais sobre os Kits Completos!', '_blank')}>Comprar via Beauty Coach</button>
           </motion.div>

           {/* Shampoos & Condicionadores */}
           <motion.div className="boutique-card" variants={fadeInUp}>
             <div className="card-icon"><Droplets size={32} /></div>
             <h3>Lavagem Essencial</h3>
             <p>Shampoos e condicionadores para limpeza profunda. Controle de oleosidade e antiqueda.</p>
             <button className="boutique-btn" onClick={() => window.open('https://wa.me/553173634762?text=Olá, quero saber mais sobre Shampoos e Condicionadores!', '_blank')}>Comprar via Beauty Coach</button>
           </motion.div>

           {/* Máscaras de Tratamento */}
           <motion.div className="boutique-card" variants={fadeInUp}>
             <div className="card-icon"><Feather size={32} /></div>
             <h3>Máscaras de Tratamento</h3>
             <p>Reconstrução intensa e reposição de massa para fios danificados por química ou sol/cloro.</p>
             <button className="boutique-btn" onClick={() => window.open('https://wa.me/553173634762?text=Olá, quero saber mais sobre Máscaras de Tratamento!', '_blank')}>Comprar via Beauty Coach</button>
           </motion.div>

           {/* Finalizadores */}
           <motion.div className="boutique-card" variants={fadeInUp}>
             <div className="card-icon"><SprayCan size={32} /></div>
             <h3>Leave-in & Finalizadores</h3>
             <p>Proteção térmica, antifrizz e brilho extra. Óleos essenciais e sprays modeladores.</p>
             <button className="boutique-btn" onClick={() => window.open('https://wa.me/553173634762?text=Olá, quero saber mais sobre Leave-in e Finalizadores!', '_blank')}>Comprar via Beauty Coach</button>
           </motion.div>
         </motion.div>
      </section>

      {/* Footer */}
      <footer className="lp-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>PASSIONE</h2>
            <p>Elevando sua autoestima.</p>
          </div>
          <div className="footer-contact">
             <p><MapPin size={16}/> Belo Horizonte, MG</p>
             <p><Phone size={16}/> (31) 7363-4762</p>
             <p>@passionebeleza</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Passione Beleza. Desenvolvido com GlowSystem.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
