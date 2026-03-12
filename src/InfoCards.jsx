import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCards.css';

// Corrigindo os caminhos dos ícones para usar imagens existentes
import santuarioIcon from '../Images/paroquia.jpg'; // Placeholder
import oracaoIcon from '../Images/Imaculada-Conceição.jpg'; // Placeholder
import { FaArrowRight } from 'react-icons/fa';

const InfoCards = () => {
  return (
    <section className="info-cards-container">
      {/* Card de Pedido de Oração */}
      <div className="info-card">
        <div className="card-icon-container">
          <img src={oracaoIcon} alt="Ícone Pedido de Oração" className="card-icon" />
        </div>
        <div className="card-content oracao-content">
          <h3 className="card-title">Pedido de Oração</h3>
          <button className="btn-enviar">
            ENVIAR <FaArrowRight style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
