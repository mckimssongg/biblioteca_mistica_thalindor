
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SearchPage() {
  const libros = [
    { id: 1, titulo: 'Caroline', autor: 'Neil Gaiman' },
    { id: 2, titulo: 'I Have Some Questions for You: A Novel', autor: 'Autor Desconocido' },
    { id: 3, titulo: 'Saving Time: Discovering a Life Beyond the Clock', autor: 'Autor Desconocido' },
    { id: 4, titulo: 'Pineapple Street: A Novel', autor: 'Autor Desconocido' },
    { id: 5, titulo: 'Brother & Sister Enter the Forest: A Novel', autor: 'Autor Desconocido' },
    { id: 6, titulo: 'Hello Beautiful: A Novel', autor: 'Autor Desconocido' },
    { id: 7, titulo: 'Romantic Comedy: A Novel', autor: 'Autor Desconocido' },
    { id: 8, titulo: 'A Living Remedy: A Memoir', autor: 'Autor Desconocido' }
  ];

  const handleCardClick = (titulo) => {
    window.location.href = `http://localhost:5173/specificBoock/${titulo}`;
  };

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {libros.map((libro) => (
          <Col key={libro.id}>
            <Card className="h-100" onClick={() => handleCardClick(libro.titulo)}> 
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/012/942/784/non_2x/broken-image-icon-isolated-on-a-white-background-no-image-symbol-for-web-and-mobile-apps-free-vector.jpg" height="150" style={{ objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column"> 
                <Card.Title>{libro.titulo}</Card.Title>
                <Card.Text className="flex-grow-1">{libro.autor}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchPage;
