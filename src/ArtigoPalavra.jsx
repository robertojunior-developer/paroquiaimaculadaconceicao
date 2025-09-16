import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { palavraDoPadreData } from './palavraDoPadreData';
import './ArtigoPalavra.css';

const ArtigoPalavra = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reflexao = palavraDoPadreData.find((r) => r.id === id);

  if (!reflexao) {
    return <div className="artigo-palavra-container page-content"><h2>Reflexão não encontrada.</h2></div>;
  }

  return (
    <div className="artigo-palavra-container page-content">
      <h1 className="artigo-titulo">{reflexao.titulo}</h1>
      <div className="artigo-meta">
        <span>Por: {reflexao.autor}</span>
        <span>{reflexao.data}</span>
      </div>
      <img src={reflexao.imagem} alt={reflexao.titulo} className="artigo-imagem-destaque" />
      <div 
        className="artigo-conteudo"
        dangerouslySetInnerHTML={{ __html: reflexao.conteudo }}
      ></div>
      <button onClick={() => navigate(-1)} className="artigo-voltar-btn">
        &larr; Voltar
      </button>
    </div>
  );
};

export default ArtigoPalavra;
