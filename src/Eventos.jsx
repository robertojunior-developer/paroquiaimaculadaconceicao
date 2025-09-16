import React from 'react';
import { Link } from 'react-router-dom';
import { eventosData } from './eventosData';
import './Eventos.css'; // Criaremos este arquivo a seguir

const Eventos = () => {
  return (
    <div className="eventos-container page-content">
      <h1>Próximos Eventos</h1>
      <p>Fique por dentro de todas as celebrações e atividades da nossa comunidade.</p>
      <div className="eventos-grid">
        {eventosData.map(evento => (
          <Link to={`/eventos/${evento.id}`} key={evento.id} className="evento-card">
            <img src={evento.imagem} alt={`Imagem de ${evento.nome}`} className="evento-card-imagem" />
            <div className="evento-card-content">
              <h2>{evento.nome}</h2>
              <p className="evento-card-data">{evento.data}</p>
              <p className="evento-card-resumo">{evento.descricao.substring(0, 100)}...</p>
              <span className="btn-ver-mais">Ver Mais</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Eventos;
