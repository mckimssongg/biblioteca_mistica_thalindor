import React from 'react';
import '../Gender/style.css'

export default function Gender({ text1, text2, text3, text4, className}) {
  return (
    <div className={className}>
      <h3>Género:</h3>
      <div className="gender-list">
        <p className="gender-item">{text1}</p>
        <p className="gender-item">{text2}</p>
        <p className="gender-item">{text3}</p>
        <p className="gender-item">{text4}</p>
      </div>
    </div>
  );
}
