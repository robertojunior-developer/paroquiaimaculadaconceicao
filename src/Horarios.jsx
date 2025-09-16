import React from 'react';
import { comunidadesData } from './horariosData';
import './Horarios.css';
import { FaCross, FaRegHandshake } from 'react-icons/fa'; // Ícones para Missa e Confissão

const Horarios = () => {
  return (
    <div className="horarios-container">
      <h1 className="horarios-title">Horários de Missas e Confissões</h1>
      <div className="comunidades-grid">
        {comunidadesData.map(comunidade => (
          <div key={comunidade.id} className="comunidade-card">
            <h2 className="comunidade-nome">{comunidade.nome}</h2>
            <div className="horarios-section">
              <h3 className="section-title"><FaCross className="section-icon" /> Santas Missas</h3>
              {comunidade.missas.length > 0 ? (
                <ul className="horarios-list">
                  {comunidade.missas.map((missa, index) => (
                    <li key={index} className="horario-item">
                      <span className="horario-dia">{missa.dia}:</span>
                      <span className="horario-hora">{missa.horario}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="sem-horario">Não há horários de missa definidos.</p>
              )}
            </div>
            <div className="horarios-section">
              <h3 className="section-title"><FaRegHandshake className="section-icon" /> Confissões</h3>
              {comunidade.confissoes.length > 0 ? (
                <ul className="horarios-list">
                  {comunidade.confissoes.map((confissao, index) => (
                    <li key={index} className="horario-item">
                      <span className="horario-dia">{confissao.dia}:</span>
                      <span className="horario-hora">{confissao.horario}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="sem-horario">Não há horários de confissão definidos.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horarios;
