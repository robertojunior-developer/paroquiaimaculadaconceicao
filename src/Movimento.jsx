import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movimentosData } from './movimentosData';
import './Pastoral.css';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const Movimento = () => {
  const { id } = useParams();
  const movimento = movimentosData.find(m => m.id === id);
  const [modalAberto, setModalAberto] = useState(false);

  if (!movimento) {
    return (
      <div className="pastoral-container page-content">
        <h1>Movimento não encontrado</h1>
        <p>A página que você está procurando não existe.</p>
      </div>
    );
  }

  const { nome, descricao, imagem, coordenador } = movimento;
  const whatsapp = coordenador?.telefone ? `https://wa.me/${coordenador.telefone}` : null;

  return (
    <>
      <div className="pastoral-container page-content">
        <div className="pastoral-content-grid">
          <img src={imagem} alt={`Imagem do ${nome}`} className="pastoral-imagem-lado" />
          <div className="pastoral-texto">
            <h1>{nome}</h1>
            <p>{descricao}</p>

            <div className="coordenacao-action-container">
              {coordenador && (
                <div className="coordenador-section">
                  <h3>Coordenação</h3>
                  <div className="coordenador-info">
                    {coordenador.foto && (
                      <img src={coordenador.foto} alt={`Foto de ${coordenador.nome}`} className="coordenador-foto" />
                    )}
                    <div className="coordenador-detalhes">
                      <p className="coordenador-nome">{coordenador.nome}</p>
                      {whatsapp && (
                        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="coordenador-whatsapp">
                          <FaWhatsapp /> Contato
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <button className="btn-participar" onClick={() => setModalAberto(true)}>
                Quero participar deste Movimento
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
            <h2>Convite para o {nome}</h2>
            <p>Que alegria saber do seu interesse! Para participar, entre em contato com a coordenação pelo WhatsApp.</p>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-modal-whatsapp">
                <FaWhatsapp /> Chamar no WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Movimento;
