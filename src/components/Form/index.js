import React from 'react';
import {Row, Col, CardPanel} from 'react-materialize';

function Form (props){
    return (
      <Row>
      <Col
        m={6}
        s={12}
      >
        <CardPanel className="white">
          <span className="black-text">
            <h5>Contact</h5>
            <input type="text" id="fname" placeholder="Your name.."/>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something..">
            </textarea>
          </span>
          <input type="submit" value="Submit"></input>
        </CardPanel>
      </Col>
    </Row>
    );
  } 
  
  export default Form; 
