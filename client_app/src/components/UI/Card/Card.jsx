import React from 'react';

export default function Card({ id, title, subtitle, link }) {
  return (
    <div className="card mb-3 custom-card" style={{ maxWidth: '18rem' }} data-id={id}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
      </div>
      <img src="https://via.placeholder.com/250" className="card-img-top" alt="Placeholder" />
      <div className="card-body">
        {link && <a href={link.href} className="card-link">{link.text}</a>}
      </div>
    </div>
  );
}