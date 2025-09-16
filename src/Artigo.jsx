import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Artigo.css';

const Artigo = ({ artigos }) => {
  const { artigoId } = useParams();
  const artigo = artigos.find(a => a.id === artigoId);

  if (!artigo) {
    return (
      <div className="artigo-container">
        <h2>Artigo não encontrado.</h2>
        <Link to="/formacao">Voltar para a lista de artigos</Link>
      </div>
    );
  }

  return (
    <div className="artigo-container">
      <img src={artigo.imagem} alt={artigo.titulo} className="artigo-banner" />
      <h1 className="artigo-titulo-detalhe">{artigo.titulo}</h1>
      <div className="artigo-conteudo-completo">
        {artigo.conteudoCompleto}
      </div>
      <Link to="/formacao" className="artigo-voltar-btn">
        &larr; Voltar para Formação
      </Link>
    </div>
  );
};

export default Artigo;
