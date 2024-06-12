import React from 'react';

const ButtonAdd = ({ book, onAdd }) => {
  const handleAdd = () => {
    onAdd(book);
  };

  return (
    <button onClick={handleAdd} class="btn btn-outline-dark" type="button">
      Agregar +
    </button>
  );
};

export default ButtonAdd;