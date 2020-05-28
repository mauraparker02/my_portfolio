import React from "react";
import Row from "Row";
import Col from "Col"
import Container from "Container"


function Card(props) {
    return (
        <div>
        <div className="container mycontainer">
        <div className="row">
          {/* <div className="col-sm-12"> */}
            <h1>Portfolio</h1>
        
          <div className="container portfoliocont">
            <div className="row">
              <div className="col-sm-2">
                <div className="card">
                  <img src="Assets/Images/weather.png" className="card-img-top" alt="biking"/>
                  <div className="card-body">
                    <p className="card-text">Weather App</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
    )
}