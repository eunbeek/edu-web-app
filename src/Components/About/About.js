import React from 'react';
import '../../App.css';
import {Container, Row, Col, Alert} from 'react-bootstrap'

class About  extends React.Component {
  render(){
    return (
        <div className="App">
          <div className="titlePage">
            About
          </div>
          <Alert variant="secondary">
          <p>
            League Of Science 는 시간과 장소에 구애 받지 않고 수학, 물리, 코딩 강의에 학생들이 손쉽게 접근 할 수 있도록 노력하고 있습니다.
            <br/>
            모든 커리큘럼은 Canada 전역을 기반으로 진행됩니다.
            <br/>
          </p>
          <hr />
          <p>
            강의를 진행하시는 선생님은 Canada 의 Quebec 주에 위치한 Mcgill University에서 Master of Mechanical Engineering degree를 마치시고, 
            <br/>
            10년 이상 고등학생, 대학생 과외 경험을 가지고 계십니다. 
          </p>
          <hr />
          <p>
            궁금하신 사항은 메일(a@a.com) 문의 해 주시면 감사드립니다. 
          </p>  
          </Alert>  
          <Container>

          </Container>
        </div>
    );
  }
}

export default About;
