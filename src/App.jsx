import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import InteractiveInfoBox from './InteractiveInfoBox';
import { 
  FaHome, FaChurch, FaUsers, FaHandHoldingHeart, FaBookOpen, FaBible, FaNewspaper, 
  FaClock, FaEnvelope, FaSearch, FaLandmark, FaUserShield, FaUserTie, FaCross, 
  FaPrayingHands, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaArchway, 
  FaDonate, FaHandshake, FaUserFriends, FaRoad, FaWhatsapp, FaCalendar, 
  FaMusic, FaChild, FaUsersCog, FaBookReader, FaCamera, FaFemale
} from 'react-icons/fa';
import LiturgiaDiaria from './LiturgiaDiaria';
import Formacao from './Formacao';
import Horarios from './Horarios';
import Noticias from './Noticias';
import ArtigoNoticia from './ArtigoNoticia';
import PalavraDoPadre from './PalavraDoPadre';
import ArtigoPalavra from './ArtigoPalavra';
import Busca from './Busca';
import { pastoraisData } from './pastoraisData';
import Home from './Home';
import Capelas from './Capelas';
import Pastoral from './Pastoral';
import Benfeitores from './Benfeitores';
import Padroeira from './Padroeira';
import Eventos from './Eventos';
import Evento from './Evento';
import Footer from './Footer';

const AppContent = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const isHomePage = location.pathname === '/';

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/busca?q=${searchTerm.trim()}`);
      setSearchTerm('');
    }
  };

  const Header = () => (
    <header className={isHomePage ? 'hero' : ''}>
      <nav className={`menu ${!isHomePage ? 'solid-bg' : ''}`}>
        <ul>
            <li><Link to="/" className={activeLink === '/' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/')}><FaHome className="menu-icon" /> Início</Link></li>
            <li className="dropdown-parent">
              <a href="/#sobre" onClick={() => setActiveLink('#paroquia')}><FaChurch className="menu-icon" /> Paróquia</a>
              <ul className="submenu">
                <li><a href="/#sobre" onClick={() => setActiveLink('#historia')}><FaLandmark className="menu-icon" /> História</a></li>
                                                <li><Link to="/padroeira" className={activeLink === '/padroeira' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/padroeira')}><FaUserShield className="menu-icon" /> Padroeira</Link></li>
                <li><Link to="/palavra-do-padre" className={activeLink === '/palavra-do-padre' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/palavra-do-padre')}><FaUserTie className="menu-icon" /> Palavra do Padre</Link></li>
                <li><Link to="/capelas" className={activeLink === '/capelas' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/capelas')}><FaArchway className="menu-icon" /> Capelas</Link></li>
                <li><Link to="/benfeitores" className={activeLink === '/benfeitores' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/benfeitores')}><FaDonate className="menu-icon" /> Benfeitores</Link></li>
              </ul>
            </li>
            <li className="dropdown-parent">
              <a href="/#pastorais" onClick={() => setActiveLink('#pastorais')}><FaUsers className="menu-icon" /> Pastorais</a>
              <ul className="submenu">
                {pastoraisData.map(pastoral => (
                  <li key={pastoral.id}>
                    <Link 
                      to={`/pastorais/${pastoral.id}`}
                      className={activeLink === `/pastorais/${pastoral.id}` ? 'active-menu-item' : ''} 
                      onClick={() => setActiveLink(`/pastorais/${pastoral.id}`)}>
                      {pastoral.icon && <pastoral.icon className="menu-icon" />} 
                      {pastoral.nome.replace('Pastoral da ', '').replace('Pastoral do ', '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown-parent">
              <a href="/#movimentos" onClick={() => setActiveLink('#movimentos')}><FaHandHoldingHeart className="menu-icon" /> Movimentos</a>
              <ul className="submenu">
                <li><a href="/#mac" onClick={() => setActiveLink('#mac')}><FaHandshake className="menu-icon" /> MAC</a></li>
                <li><a href="/#ecc" onClick={() => setActiveLink('#ecc')}><FaUserFriends className="menu-icon" /> ECC</a></li>
                <li><a href="/#ejc" onClick={() => setActiveLink('#ejc')}><FaUsers className="menu-icon" /> EJC</a></li>
                <li><a href="/#via-sacra" onClick={() => setActiveLink('#via-sacra')}><FaRoad className="menu-icon" /> Via Sacra</a></li>
                <li><a href="#terco-homens" onClick={() => setActiveLink('#terco-homens')}><FaPrayingHands className="menu-icon" /> Terço dos Homens</a></li>
                <li><a href="#maes-que-oram" onClick={() => setActiveLink('#maes-que-oram')}><FaFemale className="menu-icon" /> Mães que Oram pelos Filhos</a></li>
              </ul>
            </li>
            <li><Link to="/formacao" className={activeLink === '/formacao' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/formacao')}><FaBookOpen className="menu-icon" /> Formação</Link></li>
            <li><Link to="/liturgia" className={activeLink === '/liturgia' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/liturgia')}><FaBible className="menu-icon" /> Liturgia Diária</Link></li>
            <li><Link to="/eventos" className={activeLink === '/eventos' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/eventos')}><FaCalendar className="menu-icon" /> Eventos</Link></li>
            <li><Link to="/noticias" className={activeLink === '/noticias' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/noticias')}><FaNewspaper className="menu-icon" /> Notícias</Link></li>
            <li><Link to="/horarios" className={activeLink === '/horarios' ? 'active-menu-item' : ''} onClick={() => setActiveLink('/horarios')}><FaClock className="menu-icon" /> Horários</Link></li>
            <li><a href="/#contato" onClick={() => setActiveLink('#contato')}><FaEnvelope className="menu-icon" /> Contato</a></li>
          </ul>
      </nav>
      <div className={`search-container ${!isHomePage ? 'light-bg' : ''}`}>
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Buscar no site..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );

  return (
    <div className={isHomePage ? 'main-bg' : 'page-container'}>
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liturgia" element={<LiturgiaDiaria />} />
          <Route path="/formacao/*" element={<Formacao />} />
          <Route path="/capelas" element={<Capelas />} />
          <Route path="/pastorais/:id" element={<Pastoral />} />
          <Route path="/benfeitores" element={<Benfeitores />} />
          <Route path="/padroeira" element={<Padroeira />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:id" element={<Evento />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<ArtigoNoticia />} />
            <Route path="/palavra-do-padre" element={<PalavraDoPadre />} />
            <Route path="/palavra-do-padre/:id" element={<ArtigoPalavra />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/horarios" element={<Horarios />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
