import React from 'react';

export default function Card({ title, subtitle, icon, link }) {
  return (
    <div className="card mb-3" style={{ padding: '10px', maxWidth: '250px'}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{subtitle}</h6>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon && icon}
      </div>
      <div className="card-body">
        {link && <a href={link.href} className="card-link">{link.text}</a>}
      </div>
    </div>
  );
}