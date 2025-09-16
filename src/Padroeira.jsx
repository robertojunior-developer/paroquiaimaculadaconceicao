import React from 'react';
import './Padroeira.css';

const Padroeira = () => {
  return (
    <div className="padroeira-container page-content">
      <h1>Nossa Padroeira: Imaculada Conceição</h1>
      <div className="padroeira-content-grid">
        <img src="/Images/Imaculada-Conceicao.webp" alt="Nossa Senhora Imaculada Conceição" className="padroeira-imagem-lado" />
        <div className="padroeira-texto">
          <h2>Um Dogma de Fé e Esperança</h2>
          <p>
            A Imaculada Conceição de Maria é um dos quatro dogmas marianos da Igreja Católica e celebra a Virgem Maria como concebida sem a mancha do pecado original. Proclamado solenemente pelo Papa Pio IX em 8 de dezembro de 1854, através da Bula <em>Ineffabilis Deus</em>, este dogma afirma que Maria, "desde o primeiro instante da sua concepção, por graça e privilégio singular de Deus Todo-Poderoso, em vista dos méritos de Jesus Cristo, Salvador do gênero humano, foi preservada imune de toda mancha do pecado original".
          </p>
          
          <h2>Raízes Históricas e Teológicas</h2>
          <p>
            Embora o dogma tenha sido formalmente definido no século XIX, a crença na pureza singular de Maria remonta aos primeiros séculos do cristianismo. A festa da Conceição de Maria começou a ser celebrada no Oriente por volta do século VII e foi introduzida no Ocidente no século XI. A saudação do Anjo Gabriel — "Ave, cheia de graça! O Senhor está contigo" (Lc 1,28) — é um dos fundamentos bíblicos que aponta para a plenitude de graça que habitava em Maria desde o início de sua existência.
          </p>

          <h2>O Sonho de Deus para a Humanidade</h2>
          <p>
            A Imaculada Conceição não é apenas um privilégio de Maria, mas também um sinal de esperança para toda a humanidade. Ela representa o "sonho original" de Deus para cada um de nós: sermos santos e irrepreensíveis em Seu amor. No "sim" de Maria, Deus retoma Seu plano de salvação, preparando um "terreno" puro e santo para que Seu Filho se fizesse homem. Em Maria, a "cheia de graça", resplandece a beleza de Deus e a promessa de que o mal e o pecado não têm a palavra final.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Padroeira;
