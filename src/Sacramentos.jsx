import React from 'react';
import './Sacramentos.css';

const Sacramentos = () => {
  return (
    <div className="sacramentos-container">
      <h1 className="sacramentos-title">Os Sete Sacramentos</h1>
      <p className="sacramentos-intro">
        Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, por meio dos quais nos é dispensada a vida divina. São sete os sacramentos da Nova Lei.
      </p>
      
      <div className="sacramento-item">
        <h2>1. Batismo</h2>
        <p>O Batismo é o primeiro sacramento e a porta de entrada para a vida cristã. Ele nos purifica do pecado original, nos torna filhos de Deus e membros da Igreja.</p>
      </div>

      <div className="sacramento-item">
        <h2>2. Crisma (Confirmação)</h2>
        <p>A Crisma aperfeiçoa a graça batismal; é o sacramento que nos dá o Espírito Santo para nos enraizar mais profundamente na filiação divina, incorporar-nos mais firmemente a Cristo, tornar mais sólida a nossa vinculação com a Igreja.</p>
      </div>

      <div className="sacramento-item">
        <h2>3. Eucaristia</h2>
        <p>A Eucaristia é o coração e o cume da vida da Igreja, pois nela Cristo associa sua Igreja e todos os seus membros a seu sacrifício de louvor e de ação de graças oferecido uma vez por todas na cruz a seu Pai.</p>
      </div>

      <div className="sacramento-item">
        <h2>4. Reconciliação (Penitência)</h2>
        <p>Através do sacramento da Reconciliação, o pecador arrependido obtém o perdão de Deus e da Igreja. É um ato de cura e de renovação da nossa relação com Deus.</p>
      </div>

      <div className="sacramento-item">
        <h2>5. Unção dos Enfermos</h2>
        <p>Este sacramento confere uma graça especial aos cristãos que experimentam as dificuldades inerentes ao estado de enfermidade grave ou de velhice. É um sacramento de cura, conforto e força.</p>
      </div>

      <div className="sacramento-item">
        <h2>6. Ordem</h2>
        <p>O sacramento da Ordem é aquele pelo qual a missão confiada por Cristo a seus apóstolos continua a ser exercida na Igreja, até o fim dos tempos.</p>
      </div>

      <div className="sacramento-item">
        <h2>7. Matrimônio</h2>
        <p>O Matrimônio é a aliança pela qual o homem e a mulher constituem entre si uma comunhão da vida toda, ordenada por sua índole natural ao bem dos cônjuges e à geração e educação da prole.</p>
      </div>
    </div>
  );
};

export default Sacramentos;
