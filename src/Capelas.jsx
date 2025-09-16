import React, { useState } from 'react';
import './Capelas.css';

const capelas = [
  {
    nome: 'Capela São Sebastião',
    local: 'Parque Mingone 1',
    missa: 'Sábado às 18:00',
    imagem: '/Images/Capelas/1.webp',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela Sagrado Coração de Jesus',
    local: 'Sol Nascente',
    missa: 'Domingo às 10:00',
    imagem: '/Images/Capelas/2.webp',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela Nossa Senhora da Penha',
    local: 'Jardim Europa',
    missa: 'Sábado às 16:00',
    imagem: '/Images/Capelas/3.jpg',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela Nossa Senhora de Fátima',
    local: 'Jardim Marília',
    missa: 'Domingo às 18:00',
    imagem: '/Images/Capelas/4.jpg',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela Nossa Senhora das Graças',
    local: 'Parque Faro',
    missa: 'Sábado às 19:00',
    imagem: '/Images/Capelas/5.jpg',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela Nossa Senhora Aparecida',
    local: 'Jardim Umuarama',
    missa: 'Sábado às 16:00',
    imagem: '/Images/Capelas/6.jpg',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela São Vicente de Paulo',
    local: 'Cidade Osfaya',
    missa: 'Domingo às 08:30',
    imagem: '/Images/Capelas/7.webp',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela São José',
    local: 'Fracaroli',
    missa: 'Sexta-feira às 19:00',
    imagem: '/Images/Capelas/8.png',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  },
  {
    nome: 'Capela São Francisco de Assis',
    local: 'Cruzeirinho',
    missa: 'Sábado às 16:00',
    imagem: '/Images/Capelas/9.webp',
    mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr'
  }
];

const Capelas = () => {
  return (
    <div className="capelas-container page-content">
      <h1>Nossas Comunidades</h1>
      <div className="capelas-list-view">
        {capelas.map((capela, index) => (
          <div key={index} className="capela-row">
            <div className="capela-info-card">
              <img src={capela.imagem} alt={`Foto da ${capela.nome}`} className="capela-info-imagem" />
              <div className="capela-info-text">
                <h2>{capela.nome}</h2>
                <p><strong>Local:</strong> {capela.local}</p>
                <p><strong>Horário da Missa:</strong> {capela.missa}</p>
              </div>
            </div>
            <div className="capela-map-container">
              <iframe 
                src={capela.mapaUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capelas;
