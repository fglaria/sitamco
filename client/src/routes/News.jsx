import React, { useEffect, useState } from 'react';
import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import * as NewsService from '../services/news';
import CreateNews from '../pages/news/CreateNews';

const News = () => {
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
  }

  useEffect(() => {
    //this.timer = setInterval(() => this.listNews(), 5000);
    listNews();

    return () => {
      //clearInterval(this.timer);
      // this.timer = null;

    }
  }, []);

  return(
    <div className="News">
      <CreateNews />
      <div>{error}</div>
      <Container fluid>
        <Row className="justify-content-center">
          {
            isFetching && <span>loading...</span>
          }
          { !isFetching &&
            news.map((n, index) =>
              <Card key={ index }>
                <Card.Img variant="top" src={ n.image.url } />
                <Card.Header>{ n.title }</Card.Header>
                <Card.Body>
                  <Card.Text>{ n.body }</Card.Text>
                </Card.Body>
              </Card>
            )
          }
        </Row>
      </Container>
    </div>
  );
}

export default News;
