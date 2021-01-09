import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      news: ""
    };
  }

  listNews() {
    this.setState({ ...this.state, isFetching: true });
    fetch('http://localhost:9000/noticias/list')
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json[0]);
        this.setState({ news: json, isFetching: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  componentDidMount() {
    this.listNews();
    //this.timer = setInterval(() => this.listNews(), 5000);
  }

  componentWillUnmount() {
    //clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return(
      <div className="App">
        <Container fluid>
           <Row className="justify-content-center">
            { this.state.news &&
              this.state.news.map((n, index) =>
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
}

export default App;
