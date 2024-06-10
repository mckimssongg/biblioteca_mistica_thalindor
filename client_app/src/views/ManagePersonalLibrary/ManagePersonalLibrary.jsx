import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ButtonDelete from '../../components/UI/Button/Delete/ButtonDelete';

function ManagePersonalLibrary() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };
  

  return (
    <>
      <h1>Tú lista</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre del Libro</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </td>
              <td>
                <ButtonDelete onDelete={() => handleDelete(book.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ManagePersonalLibrary;