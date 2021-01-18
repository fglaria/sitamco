import React, { useEffect, useState } from 'react';
import * as NewsService from '../../services/news';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import TextTruncate from 'react-text-truncate';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const LoadNews = () => {
  const [isFetching, setIsFetching] = useState(false);

  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  const listNews = () => {
    setIsFetching(true);

    NewsService.getAll()
      .then(json => {
        setNews(json);
        setIsFetching(false);
      })
      .catch(err => {
        setError(err.toString());
        setIsFetching(false);
      });
  };

  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 100px;
  `;

  useEffect(() => {
    //this.timer = setInterval(() => this.listNews(), 5000);
    listNews();

    return () => {
      //clearInterval(this.timer);
      // this.timer = null;

    };
  }, []);

  return(
    <div>
      <div>{ error }</div>
      <Container fluid>
        <Row xl="3" lg="3" md="2" xs="1" className="mb-5 mx-5">
          <BeatLoader css={ override } size={30} color={"#000000"} loading={ isFetching } />
          { 
            !isFetching &&
            news.map((n, index) =>
              <Col className="mb-4" key={ n._id }>
                <Card className="text-left">
                  <div className="div-img row align-self-center">
                    <Card.Img variant="top" src={ n.image.url } />
                  </div>
                  <Card.Header>
                    <TextTruncate line={ 1 } truncateText="…" text={ n.title } />
                  </Card.Header>
                  <Card.Body>
                    <TextTruncate className="card-text" line={ 1 } truncateText="…" text={ n.body } />
                    <Button className="mt-2" variant="primary">Leer noticia</Button>
                  </Card.Body>
                </Card>
              </Col>,
            )
          }
        </Row>
      </Container>
    </div>
  );
};


export default LoadNews;
