import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "react-bootstrap/Button";


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.20em;
  }
  div {
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-5">
          Hi, I'm
          <br />
          <span>
            <strong>Mohammad Sohrab Hossain</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Designer", "Web Developer", "MongoDB", "Express JS", "React JS", "Node Js", "Learner", "Dreamer"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1kXc_nDPDrfp4LGvlMPR2IW8o5KARIbn3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button className="m-2" variant="outline-success"> My Resume </Button>
          </a>
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
