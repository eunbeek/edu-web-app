import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Main/Header.js';
import Home from './Main/Home.js';
import Footer from './Main/Footer.js';

class  App extends React.Component {
  render(){
    return (
      <div className="App">
        <Container>
          <Row className="App-Header"><Col><Header/></Col></Row>
          <Row className="App-body"><Col><Home /></Col></Row>
          <Row className="Footer-basic"><Col><Footer /></Col></Row>
        </Container>
    </div>
    );
  }
}

export default App;
