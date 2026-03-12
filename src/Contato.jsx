import React from 'react';
import { FaUserTie, FaChurch, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Contato = () => {
  return (
    <div className="page-container">
      <main className="page-content">
        <section className="contato-section">
          <h2>Contato</h2>
          <div className="contato-container">
            <div className="contato-esquerda">
              <div className="contact-item">
                <FaUserTie className="contact-icon" />
                <p><strong>Administrador Paroquial:</strong> Padre Luís Eduardo</p>
              </div>
              <div className="contact-item">
                <FaChurch className="contact-icon" />
                <p><strong>Igreja Matriz:</strong> Nossa Senhora Imaculada Conceição</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>Avenida 03 Qd. 145 Lt. I, CEP 72855-145, Mingone II, Luziânia – Goiás.</p>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>61 3623-4172</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p><a href="mailto:nsimaculadaconceicao25@gmail.com">nsimaculadaconceicao25@gmail.com</a></p>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <p><a href="https://wa.me/5561983049548" target="_blank" rel="noopener noreferrer">+55 61 98304-9548</a></p>
              </div>
              <div className="social-icons">
                <a href="https://instagram.com/sua_paroquia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/sua_paroquia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://wa.me/5561983049548" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="contato-direita">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.334542853508!2d-47.93660712486235!3d-16.151689284539763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599a97016fbec3%3A0xcac23cb2d808c32c!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756219605145!5m2!1spt-BR!2sbr"
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização - Paróquia Nossa Senhora Imaculada Conceição"
              ></iframe>
              <p style={{ marginTop: '8px' }}>
                <a
                  href="https://maps.app.goo.gl/qRtHDvLBoaYLiZGK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-maps"
                >
                  Abrir no Google Maps
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contato;
