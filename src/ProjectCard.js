import React from "react";
// Components
import Card from "react-bootstrap/Card";
// Styling sheets
import "./css/Project.css";
// Static imports
import frameTop from "./images/top.svg";
import frameBottom from "./images/bottom.svg";
import eg from "./images/asteriods.png";
import java from "./images/java.png";
import python from "./images/python.png";

function Project() {
  return (
    <div className='ProjectCard'>
      <Card style={{ width: "80%", border: "none" }}>
        <div id='frameTop'>
          <img src={frameTop} alt='frame' width='8%' />
        </div>
        <Card.Img src={eg} />
        <div id='frameBottom'>
          <div style={{ float: "left" }}>
            <img src={frameBottom} alt='frame' width='11%' />
          </div>
          <div style={{ float: "right" }}>
            <img src={python} alt='python' width='10%' />
            <img src={java} alt='java' width='8%' />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;
