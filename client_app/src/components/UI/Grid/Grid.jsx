import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Grid/style.css';

import Card from '../Card/Card';
import Delete from '../Iconos/Delete/Delete';
import View from '../Iconos/View/View';

import Boocks from '../Iconos/ListBoocks/Boocks';

export default function Grid() {
  return (
    <Container fluid>
      <Row className='row-cols-auto'>
        <Col >
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Caroline'
            bodyText='156 páginas'
            redirectUrl='/specificBoock/Caroline'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>

      <Row className='row-cols-auto'>
        <Col>
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Otro título'
            bodyText='Otra descripción'
            redirectUrl='/otraUrl'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>

      <Row className='row-cols-auto'>
        <Col>
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Otro título'
            bodyText='Otra descripción'
            redirectUrl='/otraUrl'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>

      <Row className='row-cols-auto'>
        <Col>
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Otro título'
            bodyText='Otra descripción'
            redirectUrl='/otraUrl'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>

      <Row className='row-cols-auto'>
        <Col>
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Otro título'
            bodyText='Otra descripción'
            redirectUrl='/otraUrl'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>

      <Row className='row-cols-auto'>
        <Col>
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Otro título'
            bodyText='Otra descripción'
            redirectUrl='/otraUrl'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>
      
      <Row className='row-cols-auto'>
        <Col>
          <Card 
            className={"card-container"}
            icon={<Boocks/>}
            title='Otro título'
            bodyText='Otra descripción'
            redirectUrl='/otraUrl'
          />
        </Col>

        <Col className='col-auto'>
          <Delete/>
          <View/>
        </Col>
      </Row>
    </Container>
  );
}
