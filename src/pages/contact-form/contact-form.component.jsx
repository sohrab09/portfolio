import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";
import UserContact from "../../components/UserContact/UserContact"

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="mt-5 text-center">CONTACT ME</h1>
      <UserContact/> <hr/>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:sohrab.cse9@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="sohrab.cse9@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/sohrabhossain/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/sohrab09" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/himelmahmud007" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/himel.mahmud.007/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Say hello on Mobile Phone">
                <i class="fas fa-mobile-alt"></i> 01820003222
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="Current Location">
                <i class="fas fa-home"></i> Dhaka, Bangladesh
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
