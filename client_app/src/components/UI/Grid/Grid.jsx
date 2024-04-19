import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from '../Card/Card';
import Delete from '../Iconos/Delete/Delete';
import View from '../Iconos/View/View';

export default function Grid() {
  return (
    <Container>

      <Row>
        <Col sm={8}>
            <Card 
                imageUrl='./ic'
                title='Amor de gabilanes'
                bodyText='Páginas: 556'
                redirectUrl=''
            />
        </Col>

        <Col sm={4}>
            <Delete/>
            <View/>
        </Col>
      </Row>

    </Container>
  )
}

