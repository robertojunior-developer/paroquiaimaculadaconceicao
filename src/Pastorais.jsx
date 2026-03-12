import React from 'react';
import { Link } from 'react-router-dom';
import { pastoraisData } from './pastoraisData';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '20px',
};

const cardStyle = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  textDecoration: 'none',
  color: '#151E30',
  transition: 'transform .2s ease, box-shadow .2s ease',
};

const imgStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  display: 'block',
};

const contentStyle = {
  padding: '14px 16px',
};

const titleRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '6px',
};

const Pastorais = () => {
  return (
    <div className="page-content" style={{ maxWidth: 1100, margin: '40px auto' }}>
      <h1 style={{ marginBottom: 12 }}>Pastorais</h1>
      <p style={{ marginTop: 0, marginBottom: 24, color: '#444' }}>
        Conheça as pastorais da nossa paróquia e clique para saber mais.
      </p>
      <div style={gridStyle}>
        {pastoraisData.map((p) => {
          const Icon = p.icon;
          return (
            <Link key={p.id} to={`/pastorais/${p.id}`} style={cardStyle}>
              <img src={p.imagem} alt={p.nome} style={imgStyle} />
              <div style={contentStyle}>
                <div style={titleRowStyle}>
                  {Icon && <Icon />}
                  <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{p.nome}</h3>
                </div>
                <p style={{ margin: 0, color: '#555', fontSize: '.92rem' }}>
                  {p.descricao.length > 100 ? p.descricao.slice(0, 100) + '…' : p.descricao}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pastorais;
