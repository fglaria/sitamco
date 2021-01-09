import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import * as News from './services/news'

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [news, setNews] = useState([]);

  const listNews = () => {
    setIsFetching(true)

    News.getAll()
      .then(json => {
        console.log(json[0]);
        setNews(json);
        setIsFetching(false);
      })
      .catch(err => {
        console.error(err);
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
  }, [])

  return(
    <div className="App">
      <Container fluid>
        <Row className="justify-content-center">
          { news &&
            news.map((n, index) =>
              <Card key={ index }>
                <Card.Img variant="top" src={ n.imgUrl } />
                <Card.Body>
                  <Card.Title>{ n.title }</Card.Title>
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

export default App;
