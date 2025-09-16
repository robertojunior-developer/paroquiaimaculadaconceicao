import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noticiasData } from './noticiasData';
import './ArtigoNoticia.css';

const ArtigoNoticia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const noticia = noticiasData.find((n) => n.id === id);

  if (!noticia) {
    return <div className="artigo-container page-content"><h2>Notícia não encontrada.</h2></div>;
  }

  return (
    <div className="artigo-container page-content">
      <button onClick={() => navigate('/noticias')} className="btn-voltar">
        &larr; Voltar para Notícias
      </button>
      <h1 className="artigo-titulo">{noticia.titulo}</h1>
      <img src={noticia.imagem} alt={noticia.titulo} className="artigo-imagem" />
      <div 
        className="artigo-conteudo"
        dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
      ></div>
    </div>
  );
};

export default ArtigoNoticia;
