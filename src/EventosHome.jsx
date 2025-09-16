import React from 'react';
import { Link } from 'react-router-dom';
import { eventosData } from './eventosData';
import './EventosHome.css';

const EventosHome = () => {
  // Pega apenas os 3 primeiros eventos para exibir na home
  const proximosEventos = eventosData.slice(0, 3);

  return (
    <section className="eventos-home-container">
      <div className="eventos-home-header">
        <h2 className="eventos-home-title">EVENTOS</h2>
        <Link to="/eventos" className="eventos-home-link">
          <span>VER TODOS</span> ›
        </Link>
      </div>
      <div className="eventos-grid">
        {proximosEventos.map(evento => (
          <Link to={`/eventos/${evento.id}`} key={evento.id} className="evento-card-link">
            <div className="evento-card">
              <img src={evento.imagem} alt={evento.nome} className="evento-card-imagem" />
              <p className="evento-card-data">{evento.data}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventosHome;
