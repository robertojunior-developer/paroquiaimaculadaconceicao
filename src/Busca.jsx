import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { pastoraisData } from './pastoraisData';
import { eventosData } from './eventosData';
import './Busca.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Busca = () => {
  const query = useQuery().get('q')?.toLowerCase() || '';
  
  const pastoraisResultados = pastoraisData.filter(pastoral => 
    pastoral.nome.toLowerCase().includes(query) || 
    pastoral.descricao.toLowerCase().includes(query)
  );

  const eventosResultados = eventosData.filter(evento => 
    evento.nome.toLowerCase().includes(query) || 
    evento.descricao.toLowerCase().includes(query)
  );

  const temResultados = pastoraisResultados.length > 0 || eventosResultados.length > 0;

  return (
    <div className="busca-container">
      <h2>Resultados da Busca por: "{query}"</h2>
      
      {temResultados ? (
        <div className="resultados-container">
          {pastoraisResultados.length > 0 && (
            <div className="resultados-section">
              <h3>Pastorais</h3>
              <ul>
                {pastoraisResultados.map(pastoral => (
                  <li key={`pastoral-${pastoral.id}`}>
                    <Link to={`/pastorais/${pastoral.id}`}>{pastoral.nome}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {eventosResultados.length > 0 && (
            <div className="resultados-section">
              <h3>Eventos</h3>
              <ul>
                {eventosResultados.map(evento => (
                  <li key={`evento-${evento.id}`}>
                    <Link to={`/eventos/${evento.id}`}>{evento.nome}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Nenhum resultado encontrado para sua busca.</p>
      )}
    </div>
  );
};

export default Busca;
