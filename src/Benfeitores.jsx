import React from 'react';
// import QRCode from 'qrcode.react'; // Comentado temporariamente

const Benfeitores = () => {
  const pixKey = '(77) 99999-9999'; // Substitua pelo número de celular real da paróquia

  return (
    <div className="benfeitor-page-container">
      <img src="/Images/CARIDADE.jpg" alt="Ato de Caridade" className="benfeitor-image" />
      <div className="benfeitor-content">
        <h2>Seja a Providência em nossa Paróquia</h2>
        <p>
          Sua generosidade é o que nos permite continuar nossas obras de evangelização, caridade e manutenção da casa de Deus. 
          Cada doação, por menor que seja, faz uma grande diferença e nos ajuda a levar a Palavra de Deus a mais corações.
        </p>
        
        <div className="qr-code-container">
          <h3>Faça sua doação via PIX</h3>
          <p>Use a câmera do seu celular para ler o QR Code abaixo ou utilize a chave PIX (celular).</p>
          {/* <QRCode value={pixKey} size={180} /> -- Comentado temporariamente */}
          <p><i>O QR Code aparecerá aqui após a instalação da dependência.</i></p>
          <p className="pix-key-text"><strong>Chave PIX:</strong> {pixKey}</p>
        </div>

        <p className="agradecimento"><strong>Deus lhe pague!</strong></p>
      </div>
    </div>
  );
};

export default Benfeitores;
