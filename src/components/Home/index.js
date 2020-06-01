import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col} from 'react-materialize';

function Home (props){
    return (
      <Row>
          <Col
        m={3}
        s={12}
      >
      </Col>
      <Col
        m={12}
        s={6}
      >
    <img src="/imgs/me.jpg" alt="not working" width= "50%" height="auto" className="portrait"></img>
      </Col>
      <Col
        m={3}
        s={12}
      >
      </Col>
    </Row>
    );
  } 
  
  export default Home; 
