import React from 'react';
import { Link } from 'react-router-dom';
import { palavraDoPadreData } from './palavraDoPadreData';
import './PalavraDoPadre.css';

const PalavraDoPadre = () => {
  return (
    <div className="palavra-padre-container page-content">
      <h1>Palavra do Padre</h1>
      <div className="lista-reflexoes">
        {palavraDoPadreData.map((reflexao) => (
          <div key={reflexao.id} className="reflexao-card">
            <Link to={`/palavra-do-padre/${reflexao.id}`}>
              <img src={reflexao.imagem} alt={reflexao.titulo} className="reflexao-imagem" />
            </Link>
            <div className="reflexao-conteudo">
              <span className="reflexao-meta">{reflexao.data} | {reflexao.autor}</span>
              <h2 className="reflexao-titulo">
                <Link to={`/palavra-do-padre/${reflexao.id}`}>{reflexao.titulo}</Link>
              </h2>
              <p className="reflexao-resumo">{reflexao.resumo}</p>
              <Link to={`/palavra-do-padre/${reflexao.id}`} className="reflexao-leia-mais">
                Leia mais...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PalavraDoPadre;
