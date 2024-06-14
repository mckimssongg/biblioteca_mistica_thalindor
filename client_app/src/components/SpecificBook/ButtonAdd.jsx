import React from 'react';
import Add from '../UI/Icon/ButtonAdd/Add';

const ButtonAdd = ({ book, onAdd }) => {
  const handleAdd = () => {
    onAdd(book);
  };

  return (
    <div className="d-flex justify-content-end">
      <button onClick={handleAdd} className="btn btn-outline-dark btn-sm" type="button">
        Agregar <Add/>
      </button>
    </div>
  );
};

export default ButtonAdd;