import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';

//PortCard standing for Portfolio Cards 

function PortCard (props){
  return (
<div>
<Row>
  {/* Burger App */}
  <Col
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/imgs/Project1.png" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Shelter Helper"
    >
      <p>
        <a href="https://fierce-waters-27012.herokuapp.com/">
        "https://shake-shack-appdemo.herokuapp.com/"
        </a>
      </p>
    </Card>
  </Col>

  {/* Weather App */}
  <Col
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Weather App"
    >
      <p>
        <a href="https://github.com/mauraparker02/homework-5">
        Weather application 
        </a>
      </p>
    </Card>
  </Col>

  {/* Readme Generator */}
  <Col
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Employee Managment System"
    >
      <p>
        <a href="https://github.com/mauraparker02/employee_managment_system">
        https://github.com/mauraparker02/employee_managment_system
        </a>
      </p>
    </Card>
  </Col>
  


  {/* Burger App */}
  <Col
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Shelter Helper"
    >
      <p>
        <a href="https://fierce-waters-27012.herokuapp.com/">
        "https://shake-shack-appdemo.herokuapp.com/"
        </a>
      </p>
    </Card>
  </Col>

  {/* Weather App */}
  <Col
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Weather App"
    >
      <p>
        <a href="https://github.com/mauraparker02/homework-5">
        Weather application 
        </a>
      </p>
    </Card>
  </Col>

  {/* Readme Generator */}
  <Col
    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Employee Managment System"
    >
      <p>
        <a href="https://github.com/mauraparker02/employee_managment_system">
        https://github.com/mauraparker02/employee_managment_system
        </a>
      </p>
    </Card>
  </Col>
</Row>
</div>
  );
} 

export default PortCard; 