import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventosData } from './eventosData';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import './Eventos.css'; // Reutilizaremos o mesmo CSS

const Evento = () => {
  const { id } = useParams();
  const evento = eventosData.find(e => e.id === id);

  if (!evento) {
    return (
      <div className="page-content">
        <h2>Evento não encontrado</h2>
        <Link to="/eventos" className="btn-voltar">
          <FaArrowLeft /> Voltar para Eventos
        </Link>
      </div>
    );
  }

  const { nome, data, horario, local, descricao, imagem } = evento;

  return (
    <div className="evento-detalhe-container page-content">
      <Link to="/eventos" className="btn-voltar">
        <FaArrowLeft /> Voltar para Eventos
      </Link>
      <div className="evento-detalhe-grid">
        <div className="evento-imagem-lado">
          <img src={imagem} alt={`Imagem de ${nome}`} />
        </div>
        <div className="evento-texto-lado">
          <h1>{nome}</h1>
          <div className="evento-info-item">
            <FaCalendarAlt className="evento-info-icon" />
            <span>{data}</span>
          </div>
          <div className="evento-info-item">
            <FaClock className="evento-info-icon" />
            <span>{horario}</span>
          </div>
          <div className="evento-info-item">
            <FaMapMarkerAlt className="evento-info-icon" />
            <span>{local}</span>
          </div>
          <p className="evento-descricao">{descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default Evento;
