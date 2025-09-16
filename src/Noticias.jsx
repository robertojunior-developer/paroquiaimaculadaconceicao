import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { noticiasData } from './noticiasData';
import './Noticias.css';

const Noticias = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % noticiasData.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar
  }, []);

  const featuredNoticia = noticiasData[currentSlide];

  return (
    <div className="noticias-container page-content">
      <h1>Notícias</h1>
      <div className="noticias-layout">
        {/* Coluna do Slideshow */}
        <div className="noticias-slideshow">
          <Link to={`/noticias/${featuredNoticia.id}`}>
            <img src={featuredNoticia.imagem} alt={featuredNoticia.titulo} className="slideshow-imagem" />
                      </Link>
          <div className="slideshow-titulo">
            <Link to={`/noticias/${featuredNoticia.id}`}>
                <h2>{featuredNoticia.titulo}</h2>
            </Link>
          </div>
        </div>

        {/* Coluna das Últimas Notícias */}
        <div className="ultimas-noticias">
          <h3>Últimas Notícias</h3>
          <ul>
            {noticiasData.map((noticia) => (
              <li key={noticia.id}>
                <Link to={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
