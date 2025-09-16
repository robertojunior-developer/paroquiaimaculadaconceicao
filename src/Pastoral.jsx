import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { pastoraisData } from './pastoraisData';
import './Pastoral.css';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const Pastoral = () => {
  const { id } = useParams();
  const pastoral = pastoraisData.find(p => p.id === id);
  const [modalAberto, setModalAberto] = useState(false);

  if (!pastoral) {
    return (
      <div className="pastoral-container page-content">
        <h1>Pastoral não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
      </div>
    );
  }

  const { nome, descricao, imagem, coordenador } = pastoral;
  const whatsappLink = `https://wa.me/${coordenador.telefone}?text=Olá, ${coordenador.nome}! Gostaria de saber mais sobre a ${nome}.`;

  return (
    <>
      <div className="pastoral-container page-content">
        <div className="pastoral-content-grid">
          <img src={imagem} alt={`Imagem da ${nome}`} className="pastoral-imagem-lado" />
          <div className="pastoral-texto">
            <h1>{nome}</h1>
            <p>{descricao}</p>

            <div className="coordenacao-action-container">
              {coordenador && (
                <div className="coordenador-section">
                  <h3>Coordenação</h3>
                  <div className="coordenador-info">
                    <img src={coordenador.foto} alt={`Foto de ${coordenador.nome}`} className="coordenador-foto" />
                    <div className="coordenador-detalhes">
                      <p className="coordenador-nome">{coordenador.nome}</p>
                      <a href={`https://wa.me/${coordenador.telefone}`} target="_blank" rel="noopener noreferrer" className="coordenador-whatsapp">
                        <FaWhatsapp /> Contato
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <button className="btn-participar" onClick={() => setModalAberto(true)}>
                Quero participar dessa Pastoral
              </button>
            </div>

          </div>
        </div>
      </div>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setModalAberto(false)}>
              <FaTimes />
            </button>
            <h2>Convite para a {nome}</h2>
            <p>Que alegria saber do seu interesse! Para participar, entre em contato com o(a) coordenador(a) {coordenador.nome} pelo WhatsApp. Será um prazer receber você!</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-modal-whatsapp">
              <FaWhatsapp /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Pastoral;
