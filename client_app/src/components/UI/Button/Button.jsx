import React from 'react';

function Button({ type, onClick, className ,children }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
