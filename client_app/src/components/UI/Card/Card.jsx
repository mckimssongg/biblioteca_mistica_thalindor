import React from 'react';

const Card = ({ title, subtitle, link }) => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/250" className="card-img-top img-fluid" alt="Placeholder" style={{ objectFit: 'cover', maxHeight: '105px' }} />
      <div className="card-body p-2" style={{ width: '198px', height: '131px' }}>
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{subtitle}</h6>
        <a href={link.href} className="card-link">{link.text}</a>
      </div>
    </div>
  );
};

export default Card;