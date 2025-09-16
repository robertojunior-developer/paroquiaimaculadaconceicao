import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './Formacao.css';
import Artigo from './Artigo';

// Importando imagens
import sacramentosImage from '../Images/paroquia.jpg';
import oracaoImage from '../Images/001.jpg';
import anoLiturgicoImage from '../Images/002.png';

// Dados dos artigos
const artigos = [
  {
    id: 'os-sete-sacramentos',
    titulo: 'Os Sete Sacramentos',
    resumo: 'Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja...',
    imagem: sacramentosImage,
    conteudoCompleto: (
      <>
        <p>Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, por meio dos quais nos é dispensada a vida divina. São sete os sacramentos da Nova Lei.</p>
        <h3>1. Batismo</h3>
        <p>O Batismo é o primeiro sacramento e a porta de entrada para a vida cristã. Ele nos purifica do pecado original, nos torna filhos de Deus e membros da Igreja.</p>
        <h3>2. Crisma (Confirmação)</h3>
        <p>A Crisma aperfeiçoa a graça batismal; é o sacramento que nos dá o Espírito Santo para nos enraizar mais profundamente na filiação divina, incorporar-nos mais firmemente a Cristo, tornar mais sólida a nossa vinculação com a Igreja.</p>
        <h3>3. Eucaristia</h3>
        <p>A Eucaristia é o coração e o cume da vida da Igreja, pois nela Cristo associa sua Igreja e todos os seus membros a seu sacrifício de louvor e de ação de graças oferecido uma vez por todas na cruz a seu Pai.</p>
        <h3>4. Reconciliação (Penitência)</h3>
        <p>Através do sacramento da Reconciliação, o pecador arrependido obtém o perdão de Deus e da Igreja. É um ato de cura e de renovação da nossa relação com Deus.</p>
        <h3>5. Unção dos Enfermos</h3>
        <p>Este sacramento confere uma graça especial aos cristãos que experimentam as dificuldades inerentes ao estado de enfermidade grave ou de velhice. É um sacramento de cura, conforto e força.</p>
        <h3>6. Ordem</h3>
        <p>O sacramento da Ordem é aquele pelo qual a missão confiada por Cristo a seus apóstolos continua a ser exercida na Igreja, até o fim dos tempos.</p>
        <h3>7. Matrimônio</h3>
        <p>O Matrimônio é a aliança pela qual o homem e a mulher constituem entre si uma comunhão da vida toda, ordenada por sua índole natural ao bem dos cônjuges e à geração e educação da prole.</p>
      </>
    )
  },
  {
    id: 'a-importancia-da-oracao',
    titulo: 'A Importância da Oração',
    resumo: 'A oração é o diálogo com Deus, um pilar fundamental na vida do cristão...',
    imagem: oracaoImage,
    conteudoCompleto: <p>Aqui viria o texto completo sobre a importância da oração na vida cristã, explorando suas formas e benefícios.</p>
  },
  {
    id: 'o-ano-liturgico',
    titulo: 'O Ano Litúrgico',
    resumo: 'O Ano Litúrgico é o calendário que a Igreja utiliza para celebrar os mistérios da vida de Cristo...',
    imagem: anoLiturgicoImage,
    conteudoCompleto: <p>Este artigo detalharia cada tempo litúrgico: Advento, Natal, Tempo Comum, Quaresma e Páscoa, explicando seus significados e cores.</p>
  }
];

const ListaArtigos = () => (
  <>
    <h1 className="formacao-main-title">Formação</h1>
    {
      artigos.map(artigo => (
        <Link to={`/formacao/${artigo.id}`} key={artigo.id} className="article-link">
          <article className="formacao-article">
            <img src={artigo.imagem} alt={artigo.titulo} className="article-image" />
            <div className="article-content">
              <h2 className="article-title">{artigo.titulo}</h2>
              <p className="article-intro">{artigo.resumo}</p>
            </div>
          </article>
        </Link>
      ))
    }
  </>
);

const Formacao = () => {
  return (
    <div className="formacao-container">
      <Routes>
        <Route index element={<ListaArtigos />} />
        <Route path=":artigoId" element={<Artigo artigos={artigos} />} />
      </Routes>
    </div>
  );
};

export default Formacao;
