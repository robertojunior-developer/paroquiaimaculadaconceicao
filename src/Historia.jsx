import React from 'react';
import AntesImg from '../Images/001.jpg';
import DepoisImg from '../Images/003.png';

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
  alignItems: 'start',
};

const card = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  overflow: 'hidden',
};

const img = {
  width: '100%',
  height: '260px',
  objectFit: 'cover',
  display: 'block',
};

const caption = {
  padding: '10px 14px',
  fontWeight: 700,
  color: '#151E30',
};

const Historia = () => {
  return (
    <div className="page-content" style={{ maxWidth: 1100, margin: '40px auto' }}>
      <h1 style={{ marginBottom: 12 }}>História da Paróquia</h1>
      <p style={{ color: '#444', lineHeight: 1.8 }}>
        Fundada no coração de nossa cidade, a Paróquia Imaculada Conceição nasceu de uma pequena
        comunidade de fiéis que, movidos pela fé e pela caridade, reuniam-se em uma capela simples para
        rezar o terço e celebrar missas ocasionais. Com o passar dos anos, a devoção cresceu, as famílias
        se multiplicaram, e a paróquia assumiu a missão de evangelizar, formar e servir, sempre com o
        olhar atento aos mais necessitados.
      </p>
      <p style={{ color: '#444', lineHeight: 1.8 }}>
        A Paróquia Nossa Senhora Imaculada Conceição, localizada no Parque Mingone II em Luziânia-GO,
        é uma comunidade ativa na Diocese, com forte devoção mariana. O Padre Luís Eduardo assumiu
        como pároco em fevereiro de 2026. A paróquia abrange diversos bairros da região, com destaque
        para a novena e procissão em honra à Imaculada Conceição.
      </p>
      <p style={{ color: '#444', lineHeight: 1.8 }}>
        Na década seguinte, a comunidade se mobilizou para construir a igreja atual, num grande mutirão de
        fé: tijolo por tijolo, cada gesto de doação e serviço foi tornando realidade a casa comum de oração.
        Hoje, a paróquia é referência de acolhida, catequese e celebrações, mantendo viva a tradição e
        abrindo-se às novas realidades com comunicação, formação e ações pastorais constantes.
      </p>

      <div style={{ marginTop: 18 }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '1.4rem' }}>Destaques Históricos e Atividades</h2>
        <ul style={{ color: '#444', lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
          <li>
            <strong>Nova Gestão:</strong> Em 22 de fevereiro de 2026, a comunidade celebrou a posse canônica do Padre
            Luís Eduardo, em missa presidida por Dom Agamenilton.
          </li>
          <li>
            <strong>Abrangência:</strong> A paróquia atende o Mingone I e II, Jardim Marília, Parque Faro, Parque Cruzeiro do Sul,
            Jardim Umuarama, Fracarole, Cidade Osfaya, Sol Nascente e Jardim Europa.
          </li>
          <li>
            <strong>Tradição:</strong> Realiza celebrações de destaque, como a novena à Imaculada Conceição e a Procissão Iluminada,
            que costuma sair da Capela de Nossa Senhora de Fátima (Jardim Marília) para a Igreja Matriz.
          </li>
          <li>
            <strong>Comunidade:</strong> Figuras importantes, como a paroquiana Expedita Furtado, marcaram a história da comunidade,
            que é descrita como vivaz e em constante fortalecimento.
          </li>
        </ul>
      </div>

      <div style={{ margin: '28px 0' }}>
        <h2 style={{ margin: '0 0 14px 0', fontSize: '1.6rem' }}>Antes e Depois</h2>
        <div style={grid}>
          <figure style={card}>
            <img src={AntesImg} alt="Igreja - Antes" style={img} />
            <figcaption style={caption}>Antes (antiga)</figcaption>
          </figure>
          <figure style={card}>
            <img src={DepoisImg} alt="Igreja - Depois" style={img} />
            <figcaption style={caption}>Depois (atual)</figcaption>
          </figure>
        </div>
      </div>

      <p style={{ color: '#444', lineHeight: 1.8 }}>
        Agradecemos a todos que fizeram e fazem parte desta história: sacerdotes, lideranças, pastorais,
        movimentos e cada paroquiano que, com seu sim, ajuda a construir uma Igreja viva. Sob a proteção de
        Nossa Senhora Imaculada Conceição, seguimos anunciando o Evangelho com alegria e esperança.
      </p>
    </div>
  );
};

export default Historia;
