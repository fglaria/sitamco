import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const JoinUs = () => {
  return (
    <Container className="mt-5 text-center" fluid="true">
      <Row xl="3" lg="3" md="2" xs="1" className="mb-5">
        <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} 
             md={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>

          <Button variant="primary" size="lg" href="https://forms.gle/qjSNoRQrkNeTcknGA" target="_blank">
            ¡Quiero unirme a SITAMCO!
          </Button>

          <Accordion className="text-center my-4">

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  ¿Qué profesiones y/u oficios pueden ingresar?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>
                      Podrán pertenecer a este Sindicato las personas trabajadoras que ejerzan 
                      la profesión u oficio de músico/a en forma independiente:
                    </p>
                    <p>Instrumentistas y/o Intérpretes Vocales.</p>
                    <p>Autores/as, Compositores/as, Directores/as, Arreglistas.</p>
                    <p>Otros/as Trabajadores/as de las artes musicales.</p>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  ¿Cuál es la jurisdicción de SITAMCO?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>Todas las comunas que conforman la provincia de Concepción.</p>
                    <p>
                      Concepción, Coronel, Chiguayante, Florida, Hualpén, Hualqui, Lota, Penco, 
                      San Pedro de la Paz, Santa Juana, Talcahuano, Tomé.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  ¿Qué información debo presentar?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>Debes presentar documentación que acredite tu calidad de trabajador/a de la música.</p>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  ¿Qué debo saber?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>
                      Se entiende que si presentas tu solicitud para ingresar a SITAMCO, 
                      leíste y aceptaste cumplir con lo estipulado en nuestro estatuto.
                    </p>

                    <Button variant="primary" size="lg" href="http://sitamco.cl/estatutos.pdf">
                      Leer Estatutos
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Ya envié mi solicitud. ¿Ahora qué?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p>Primero que todo, felicitaciones por tomar la iniciatia y querer ser parte de SITAMCO.</p>
                    <p>
                      Tu solicitud será revisada en la próxima Asamblea ordinaria,
                      y apenas tengamos el resultado nos comunicaremos contigo.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Rechazaron mi solicitud. ¿Puedo volver a intentarlo?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p>Si tu solicitud es rechazada, te daremos las razones en los próximos 5 días posteriores a esta decisión.</p>
                    <p>De todas formas, puedes volver a enviar tu postulación luego de subsanar las razones de tu rechazo.</p>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Tengo más dudas. ¿A dónde puedo escribir?
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <p>Si tienes más consultas, no dudes en escribirnos a:</p>
                    <a href="mailto:admision@sitamco.cl">admision@sitamco.cl</a>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};


export default JoinUs;
