import React from 'react';
import './InteractiveInfoBox.css'; // Criaremos este arquivo CSS em breve

const InteractiveInfoBox = ({ icon: IconComponent, title, text }) => {
  return (
    <div className="interactive-info-box">
      <div className="icon-container">
        {IconComponent && <IconComponent size={50} />}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default InteractiveInfoBox;
