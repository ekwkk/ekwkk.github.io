import React from "react";
// Components
import Nav from "react-bootstrap/Nav";
import Project from "./Project";
// Style sheets
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
// Static imports
import dot from "./images/dot.png";
import face from "./images/face.png";
import email from "./images/envelopes.png";

function App() {
  return (
    <div className='App'>
      {/* Navbar */}
      <Nav className='justify-content-end'>
        <Nav.Item>
          <Nav.Link href='Projects'>
            <u>projects</u>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey=''>
            <u>resume</u>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Landing page */}
      <div className='Main'>
        {/* Left hand side profile section */}
        <div className='Profile'>
          <img src={face} alt='face' id='face' />
          <div className='Email'>
            <img src={email} alt='email' id='email' /> waikeikong@berkeley.edu
          </div>
        </div>

        {/* Right hand side description section */}
        <div className='Grid'>
          <img src={dot} alt='dot' />
        </div>
      </div>

      {/* Project page */}
      <div className='Projects'>
        <h4>
          <u>projects</u>
          <Project></Project>
        </h4>
      </div>
    </div>
  );
}

export default App;
