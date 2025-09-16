import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './LiturgiaDiaria.css';
import { FaBookOpen } from 'react-icons/fa';


function LiturgiaDiaria() {
  const [liturgiaData, setLiturgiaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Garante que a data inicial seja sempre a data atual

  useEffect(() => {
    const dia = String(selectedDate.getDate()).padStart(2, '0');
    const mes = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const ano = selectedDate.getFullYear();
    // Usamos um proxy para evitar problemas com CORS. Isso é bom para desenvolvimento.
    const apiUrl = `https://liturgia.up.railway.app/v2/?ano=${ano}&mes=${mes}&dia=${dia}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Liturgia não encontrada para esta data.');
        }
        return response.json();
      })
      .then(data => {
        // A API retorna as leituras como arrays, vamos pegar a primeira opção de cada.
        const primeiraLeitura = data.leituras.primeiraLeitura ? data.leituras.primeiraLeitura[0] : null;
        const segundaLeitura = data.leituras.segundaLeitura ? data.leituras.segundaLeitura[0] : null;
        const salmo = data.leituras.salmo ? data.leituras.salmo[0] : null;
        const evangelho = data.leituras.evangelho ? data.leituras.evangelho[0] : null;

        const liturgiaFormatada = {
          titulo: data.liturgia,
          cor: data.cor,
          leituras: {
            primeiraLeitura: primeiraLeitura ? { titulo: primeiraLeitura.titulo, conteudo: primeiraLeitura.texto } : null,
            segundaLeitura: segundaLeitura ? { titulo: segundaLeitura.titulo, conteudo: segundaLeitura.texto } : null,
            salmo: salmo ? { titulo: 'Salmo Responsorial', refrao: salmo.refrao, conteudo: salmo.texto } : null,
            evangelho: evangelho ? { titulo: evangelho.titulo, conteudo: evangelho.texto } : null,
          }
        };

        setLiturgiaData(liturgiaFormatada);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedDate]);

  return (
    <div className="liturgia-container">
      <div className="liturgia-header">
        <h2>Liturgia Diária</h2>
        <div className="datepicker-container">
          <p>Selecione a data:</p>
          <DatePicker 
            selected={selectedDate} 
            onChange={(date) => setSelectedDate(date)} 
            dateFormat="dd/MM/yyyy"
            className="datepicker-input"
          />
        </div>
      </div>

      {loading && <p>Carregando liturgia...</p>}
      {error && <p>{error}</p>}
      
      {liturgiaData && !loading && (
        <div>
          <h2 className="liturgia-main-title"><FaBookOpen /> {liturgiaData.titulo}</h2>
          <p><strong>Cor Litúrgica:</strong> {liturgiaData.cor}</p>
          
          {liturgiaData.leituras.primeiraLeitura && (
            <div className="liturgia-section">
              <h4 className="leitura-title">{liturgiaData.leituras.primeiraLeitura.titulo}</h4>
              <div dangerouslySetInnerHTML={{ __html: liturgiaData.leituras.primeiraLeitura.conteudo.replace(/\n/g, '<br />') }} />
            </div>
          )}

          {liturgiaData.leituras.salmo && (
            <div className="liturgia-section">
              <h4 className="leitura-title">{liturgiaData.leituras.salmo.titulo}</h4>
              <p><strong>{liturgiaData.leituras.salmo.refrao}</strong></p>
              <div dangerouslySetInnerHTML={{ __html: liturgiaData.leituras.salmo.conteudo.replace(/\n/g, '<br />') }} />
            </div>
          )}

          {liturgiaData.leituras.segundaLeitura && (
            <div className="liturgia-section">
              <h4 className="leitura-title">{liturgiaData.leituras.segundaLeitura.titulo}</h4>
              <div dangerouslySetInnerHTML={{ __html: liturgiaData.leituras.segundaLeitura.conteudo.replace(/\n/g, '<br />') }} />
            </div>
          )}

          {liturgiaData.leituras.evangelho && (
            <div className="liturgia-section">
              <h4 className="leitura-title">{liturgiaData.leituras.evangelho.titulo}</h4>
              <div dangerouslySetInnerHTML={{ __html: liturgiaData.leituras.evangelho.conteudo.replace(/\n/g, '<br />') }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LiturgiaDiaria;
