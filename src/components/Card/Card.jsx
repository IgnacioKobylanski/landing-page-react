import React from 'react';
import "../Card/Card.css"

const Card = ({ icon, title, description, backgroundColor = "var(--orange)", textColor = "var(--color-white)" }) => {
  return (
    <div className="card" style={{ backgroundColor, color: textColor }}>
      <div className="card-icon" style={{ color: textColor }}>{icon}</div>
      <h3 className="card-title" style={{ color: textColor }}>{title}</h3>
      <p className="card-description" style={{ color: textColor }}>{description}</p>
    </div>
  );
};

export default Card;

