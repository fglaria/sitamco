import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

const Contact = () => {
  return (
    <Container className="mt-5 text-center" fluid="true">
      <Row xl="3" lg="3" md="2" xs="1">
        <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} 
             md={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
          <CardDeck>
            <Card>
              <Card.Header>
                ¿Tienes una emergencia?
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="mailto:emergencia@sitamco.cl">emergencia@sitamco.cl</a>
                </Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Dudas generales
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="mailto:contacto@sitamco.cl">contacto@sitamco.cl</a>
                </Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Contactar directiva
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="mailto:administracion@sitamco.cl">administracion@sitamco.cl</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>

      <Row xl="3" lg="3" md="2" xs="1" className="mt-5">
        <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} 
             md={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
          <CardDeck>
            <Card>
              <Card.Header>
                Secretaría
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="mailto:secretaria@sitamco.cl">secretaria@sitamco.cl</a>
                </Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Tesorería
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="mailto:tesoreria@sitamco.cl">tesoreria@sitamco.cl</a>
                </Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                Comisión de Bienestar Social
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <a href="mailto:bienestar@sitamco.cl">bienestar@sitamco.cl</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;