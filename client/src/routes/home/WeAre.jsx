import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const WeAre = () => {
  return (
    <Container className="mt-5 text-center" fluid="true">
      <Row xl="3" lg="3" md="2" xs="1" className="mb-5">
        <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} 
             md={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
          <Accordion defaultActiveKey="0" className="text-center mb-5">

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Historia
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
                    Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
                    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. 
                    Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, 
                    sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. 
                    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, 
                    eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, 
                    accumsan porttitor, facilisis luctus, metus
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Misión/Visión
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
                    Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
                    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. 
                    Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, 
                    sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. 
                    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, 
                    eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, 
                    accumsan porttitor, facilisis luctus, metus
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Directiva
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>
                      La Directiva de SITAMCO dura dos años en ejercicio. 
                      La última elección se realizó el 10 de octubre de 2020 
                      y mantendrán sus cargos hasta el 2022.
                    </p>

                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Presidenta: Ana Ochoa</ListGroup.Item>
                      <ListGroup.Item variant="info">Secretario: Diego Ruiz-Tagle</ListGroup.Item>
                      <ListGroup.Item variant="info">Tesorero: Felipe Glaría</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Comisiones
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>

                    <h3>Comisión de Admisión</h3>
                    <p>
                      La Comisión de Admisión la designa el Directorio con autonomía de la Asamblea,
                      para asesorar la decisión respecto a la admisión de nuevos/as socios/as. 
                      Esta Comisión recibirá toda información asociada a cada postulación, 
                      sin importar su procedencia, y deberá generar los medios para su receptación.
                    </p>
                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Diego Ruiz-Tagle</ListGroup.Item>
                      <ListGroup.Item variant="info">Juan Pablo Moreno</ListGroup.Item>
                    </ListGroup>

                    <h3 className="mt-3">Comisión de Admisión</h3>
                    <p>
                      La Comisión de Bienestar Social está destinada a implementar un sistema
                      de beneficios para los socios/as del Sindicato, estableciendo para ello
                      un mecanismo de financiamiento y un reglamento de beneficios que deberá
                      ser aprobado por el Directorio y la Asamblea.
                    </p>
                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Felipe Glaría</ListGroup.Item>
                      <ListGroup.Item variant="info">Pascual Fariñez</ListGroup.Item>
                      <ListGroup.Item variant="info">Pablo Vidal</ListGroup.Item>
                      <ListGroup.Item variant="info">Rodrigo Navarrete</ListGroup.Item>
                    </ListGroup>

                    <h3 className="mt-3">Comisión de Ética y Disciplina</h3>
                    <p>
                      La Cómisión de Ética y Disciplina está destinada a velar por preservar
                      los valores propios de la actividad profesional, la probidad, transparencia
                      y el buen trato entre los miembros del Sindicato.
                    </p>
                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Daniel Brito</ListGroup.Item>
                    </ListGroup>

                    <h3 className="mt-3">Comisión de Admisión</h3>
                    <p>
                      La Comisión de Género, Igualdad, Inclusión y Espacios Seguros está destinada a proponer 
                      medidas relativas a avanzar en la eliminación de todas las formas de discriminación
                      por razones de género, orientación sexual, nacionalidad u otras, en el accionar sindical
                      o en el contexto de la actividad de representación de Artes Musicales.
                    </p>
                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Eileen Luengo</ListGroup.Item>
                      <ListGroup.Item variant="info">Priscila Flores</ListGroup.Item>
                    </ListGroup>

                    <h3 className="mt-3">Comisión Revisora de Cuentas</h3>
                    <p>
                      La Comisión Revisora de Cuentas será independiente del Directorio, durará dos años 
                      en su cargo y deberá rendir anualmente cuenta de su cometido ante la Asamblea.
                      En el evento que parte o la totalidad de sus miembros deje el cargo antes del término
                      de su período, la Asamblea podrá elegir, dependiendo de cual sea el caso, la totalidad
                      o solo los integrantes faltantes, quienes integrarán la Comisión hasta completar
                      el período para el cual fueron elegidos originalmente.
                    </p>
                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Pamela Navarrete</ListGroup.Item>
                    </ListGroup>

                    <h3 className="mt-3">Comisión de Comunicaciones</h3>
                    <p>
                      La Comisión de Género, Igualdad, Inclusión y Espacios Seguros está destinada a proponer 
                      medidas relativas a avanzar en la eliminación de todas las formas de discriminación
                      por razones de género, orientación sexual, nacionalidad u otras, en el accionar sindical
                      o en el contexto de la actividad de representación de Artes Musicales.
                    </p>
                    Integrantes:
                    <ListGroup>
                      <ListGroup.Item variant="info">Diego Ruiz-Tagle</ListGroup.Item>
                      <ListGroup.Item variant="info">Dillman Cifuentes</ListGroup.Item>
                      <ListGroup.Item variant="info">Juan Pablo Moreno</ListGroup.Item>
                    </ListGroup>

                  </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Documentos
                </Accordion.Toggle>
              </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <Button variant="primary" size="lg" href="http://sitamco.cl/estatutos.pdf">
                      Estatutos
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>

          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default WeAre;
