import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ description, className }) {
  return (
    <div className={className}>
      <h3>Descripción: </h3>
      <p>{description}</p>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired
};
