import React from 'react';
import { Link } from 'react-router-dom';
import { FaCross, FaPrayingHands, FaCalendar, FaBible, FaUserTie, FaChurch, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import InteractiveInfoBox from './InteractiveInfoBox';
import InfoCards from './InfoCards';
import EventosHome from './EventosHome';
import ImaculadaImg from '../Images/Imaculada-Conceição.jpg';
import PapaImg from '../Images/Papa Leao XIV.jpg';
import BispoImg from '../Images/Bispo Dom Agamenilton.jpg';
import PadreAdoniasImg from '../Images/Padre Adonias.jpg';
import PadreLuisImg from '../Images/Padre Luis Eduardo.jpg';

const Home = () => (
  <>
    <InfoCards />
    <section className="info-boxes">
      <Link to="/horarios" className="info-box-link">
        <InteractiveInfoBox 
          icon={FaCross} 
          title="Missas e Confissões"
          text="Confira os horários das missas e das confissões e participe conosco."
        />
      </Link>
      <Link to="/pastorais" className="info-box-link">
        <InteractiveInfoBox 
          icon={FaPrayingHands} 
          title="Pastorais"
          text="Conheça as pastorais e grupos de serviço da nossa paróquia."
        />
      </Link>
      <Link to="/eventos" className="info-box-link">
        <InteractiveInfoBox 
          icon={FaCalendar} 
          title="Eventos"
          text="Veja os próximos eventos e celebrações especiais."
        />
      </Link>
      <Link to="/liturgia" className="info-box-link">
        <InteractiveInfoBox 
          icon={FaBible} 
          title="Liturgia Diária"
          text="Acompanhe as leituras e o evangelho do dia."
        />
      </Link>
    </section>

    <EventosHome />

    <section id="sobre" className="sobre-nos">
      <h2>Sobre Nós</h2>
      <div className="sobre-nos-container">
        <div className="sobre-topico">
        <h3>História da Paróquia</h3>
        <p>A Paróquia Nossa Senhora Imaculada Conceição, localizada no Parque Mingone II em Luziânia-GO, é uma comunidade ativa na Diocese, com forte devoção mariana. O Padre Luís Eduardo assumiu como pároco em fevereiro de 2026. A paróquia abrange diversos bairros da região, com destaque para a novena e procissão em honra à Imaculada Conceição.</p>
      </div>
      <div className="sobre-topico">
        <h3>Missão, Visão e Valores</h3>
        <ul>
          <li><b>Missão:</b> Evangelizar, acolher e servir a comunidade à luz do Evangelho.</li>
          <li><b>Visão:</b> Ser referência de fé, solidariedade e comunhão cristã.</li>
          <li><b>Valores:</b> Amor, respeito, justiça, fraternidade e compromisso com a Palavra de Deus.</li>
        </ul>
      </div>
      <div className="sobre-topico padroeira-flex">
        <div className="padroeira-texto">
          <h3>Padroeira: Nossa Senhora Imaculada Conceição</h3>
          <p>A devoção à Imaculada Conceição celebra Maria, mãe de Jesus, concebida sem pecado original. Nossa Senhora Imaculada Conceição é padroeira da paróquia e exemplo de pureza, fé e entrega a Deus. A devoção destaca a confiança na intercessão de Maria e sua importância na história da salvação.</p>
        </div>
        <img src={ImaculadaImg} alt="Nossa Senhora Imaculada Conceição" className="padroeira-imagem" />
      </div>
      <div className="sobre-topico clero-flex">
        <div className="clero-texto">
          <h3>Clero</h3>
          <ul className="clero-lista">
            <li><b>Papa:</b> Leão XIV</li>
            <li><b>Bispo:</b> Dom Francisco Agamenilton</li>
            <li><b>Pároco:</b> Padre Luís Eduardo</li>
          </ul>
          <div className="clero-fotos">
            <figure className="clero-card">
              <img src={PapaImg} alt="Papa Leão XIV" className="clero-imagem clero-imagem--small" />
              <figcaption>
                <div className="clero-card-title">Leão XIV</div>
                <div className="clero-card-role">Papa</div>
              </figcaption>
            </figure>
            <figure className="clero-card">
              <img src={BispoImg} alt="Dom Francisco Agamenilton" className="clero-imagem clero-imagem--small" />
              <figcaption>
                <div className="clero-card-title">Dom Francisco Agamenilton</div>
                <div className="clero-card-role">Bispo</div>
              </figcaption>
            </figure>
            <figure className="clero-card">
              <img src={PadreLuisImg} alt="Padre Luís Eduardo" className="clero-imagem clero-imagem--small" />
              <figcaption>
                <div className="clero-card-title">Pe. Luís Eduardo</div>
                <div className="clero-card-role">Pároco</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section id="contato" className="contato-section">
      <h2>Contato</h2>
      <div className="contato-container">
        <div className="contato-esquerda">
          <div className="contact-item">
            <FaUserTie className="contact-icon" />
            <p><strong>Administrador Paroquial:</strong> Padre Luís Eduardo</p>
          </div>
          <div className="contact-item">
            <FaChurch className="contact-icon" />
            <p><strong>Igreja Matriz:</strong> Nossa Senhora Imaculada Conceição</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Avenida 03 Qd. 145 Lt. I, CEP 72855-145, Mingone II, Luziânia – Goiás.</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>61 3623-4172</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p><a href="mailto:nsimaculadaconceicao25@gmail.com">nsimaculadaconceicao25@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <p><a href="https://wa.me/5561983049548" target="_blank" rel="noopener noreferrer">+55 61 98304-9548</a></p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/paroquiaimcmingone/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/ImaculadaMingone/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/5561983049548" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="contato-direita">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização - Paróquia Nossa Senhora Imaculada Conceição"
          ></iframe>
          <p style={{ marginTop: '8px' }}>
            <a
              href="https://maps.app.goo.gl/qRtHDvLBoaYLiZGK7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-maps"
            >
              Abrir no Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Home;
