import React from 'react';
import '../Card/StyleCard.css';

export default function Card({id, title, subtitle, icon, link }) {
  return (
    <div className="card mb-3 custom-card" data-id={id}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{subtitle}</h6>
      </div>
      <div className="icon-container">
        {icon && icon}
      </div>
      <div className="card-body">
        {link && <a href={link.href} className="card-link">{link.text}</a>}
      </div>
    </div>
  );
}