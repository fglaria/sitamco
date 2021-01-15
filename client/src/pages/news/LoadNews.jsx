import React, { useEffect, useRef, useState } from 'react';
import * as NewsService from '../../services/news';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import TextTruncate from 'react-text-truncate';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';


const LoadNews = () => {
  const [isFetching, setIsFetching] = useState(false);

  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

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
  }

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

    }
  }, []);

  return(
    <div>
      <div>{ error }</div>
      <Container fluid>
        <Row className="justify-content-center">
          <BeatLoader css={ override } size={30} color={"#000000"} loading={ isFetching } />
          <CardDeck>
          { 
              !isFetching &&
              news.map((n, index) =>
                <Card className="text-left news-card" key={ index }>
                  <div className="div-img">
                    <Card.Img variant="top" src={ n.image.url } />
                  </div>
                  <Card.Header>
                    <TextTruncate line={ 1 } truncateText="…" text={ n.title } />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <TextTruncate line={ 1 } truncateText="…" text={ n.body } />
                    </Card.Text>
                    <Button variant="primary">Leer noticia</Button>
                  </Card.Body>
                </Card>
              )
          }
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};


export default LoadNews;
