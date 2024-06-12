import React, { useState, useEffect } from 'react';
import '../SpecificBook/StyleSpecificBook.css';
import CardSpecific from '../../components/SpecificBook/CardSpecific';
import Descripcion from '../../components/SpecificBook/Descripcion';
import Generos from '../../components/SpecificBook/Generos';
import Informacion from '../../components/SpecificBook/Informacion';

import ButtonAdd from '../../components/SpecificBook/ButtonAdd';

export default function SpecificBook() {
  const generos = ['Fantasía', 'Aventura', 'Drama'];
  const titulo = 'Libro 1';
  const libro = {
    id: 1,
    title: titulo,
  };

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddBook = (book) => {
    if (!books.find(b => b.id === book.id)) {
      setBooks([...books, book]);
    }
  };

  return (
    <div className="specific-book-grid">
      <div className="column-one">
        <div className="row-one">
          <CardSpecific
            subtitle={'Autor: '}
          />
        </div>
      </div>

      <div className="column-two">
        <div className="row-two">
          <p><strong>Título:</strong> {titulo}</p>
        </div>

        <div className="row-two">
          <Descripcion
            texto={'Erase una vez'}
          /> 
        </div>

        <div className="row-two">
          <Generos
            generos={generos}
          /> 
        </div>

        <div className="row-two">
          <Informacion
            No_paginas={223}
            editorial={'Book'}
            idiomas={'Español'}
            fecha_publicacion={2000}
          />
        </div>

        <div className="row-two">
          <ButtonAdd book={libro} onAdd={handleAddBook} />
        </div>
      </div>
    </div>
  );
}