import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonDelete from '../../components/UI/Button/Delete/ButtonDelete';
import ToggleEye from '../../components/UI/Button/ToggleEye/ToggleEye';

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
    <div className="container mt-4">
      <h1 className="mb-4">Tu Lista</h1>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Nombre del Libro</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>
                <Link to={`/specificBook/${book.id}`} className="text-reset text-decoration-none">{book.title}</Link>
              </td>

              <td>
                <ToggleEye />
              </td>
    
              <td>
                <ButtonDelete onDelete={() => handleDelete(book.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagePersonalLibrary;