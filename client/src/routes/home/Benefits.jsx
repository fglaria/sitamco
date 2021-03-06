import React from 'react';

// import cdbaby_logo from '../../img/logos/cdbaby.png';
// import portaldisc_logo from '../../img/logos/portaldisc.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';



const Benefits = () => {
  return (
    <Container className="mt-5 text-center" fluid="true">
      <Row xl="3" lg="3" md="2" xs="1" className="mb-5">
        <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} 
             md={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
          <h1>Convenios Música</h1>
          <CardDeck>
          
            <Card>
              <a href="https://cdbaby.com/" rel="noreferrer" target="_blank" className="mt-3">
                cdbaby
              </a>
              <Card.Body>
                <h5>Distribuidora cdbaby</h5>
                <p>Subir gratis tu SP, EP o LP a plataformas digitales</p>
              </Card.Body>
            </Card>

            <Card>
              <a href="https://servicios.portaldisc.com/radios/" rel="noreferrer" target="_blank" className="mt-3">
                <h5>Portaldisc</h5>
              </a>
              <Card.Body>
                <h5>Portaldisc: Envío a radios y medios</h5>
                <p>30% descuento para envío de musica a radios y medios de comunicación</p>
              </Card.Body>
            </Card>

          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};


export default Benefits;
