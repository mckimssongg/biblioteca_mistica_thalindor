import React from 'react'
import PropTypes from 'prop-types';

export default function Follow({onClick, className}) {
  return (
    <button 
    className={className}
    onClick={onClick} 
  >
    Seguir +
  </button>
  );
}

Follow.propTypes = {
    onClick: PropTypes.func.isRequired
  };