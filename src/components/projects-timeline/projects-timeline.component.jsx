import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_CHITROGOLPO from "../../assets/img/projects/chitroGolpo.png";
import L_COMPUTERVILLA from "../../assets/img/projects/computerVilla.png";
import L_PORTFOLIO from "../../assets/img/projects/portfolio.png";
import L_PINMATCHER from "../../assets/img/projects/pinMatcher.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Chitro Golpo */}
          <ImageEvent
            date="17/04/2021"
            className="text-center"
            text="Chitro Golpo"
            src={L_CHITROGOLPO}
            alt="Chitro Golpo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Name:</strong> Chitro Golpo
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Wedding photography start-up project.</li>
                          <li>MERN stack project.</li>
                          <li>The customer will be able to receive any service and view all his data accordingly.</li>
                          <li>Admin can add and delete any services.</li>
                          <li>Firebase authentication has been used in this project. If the user wants to receive any service through which he has to log in.</li>
                          <li>Demo stripe has been implemented in this project. The price of any service can be taken from the user.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              GIT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://chitrogolpo-97e1a.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sohrab09/chitroGolpo-server"
                  target="_blank"
                >
                  SERVER SIDE SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sohrab09/chitroGolpo-client"
                  target="_blank"
                >
                  CLIENT SIDE SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Portfolio  */}
          <ImageEvent
            date="01/05/2021"
            className="text-center"
            text="Portfolio"
            src={L_PORTFOLIO}
            alt="Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a professional portfolio.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Personal Portfolio</li>
                          <li>Styled with  React Bootstrap, React Js</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Git"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GIT
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://sohrabportfolio.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Computer Villa */}
          <ImageEvent
            date="02/04/2021"
            className="text-center"
            text="Computer Villa"
            src={L_COMPUTERVILLA}
            alt="Computer Villa"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Name:</strong> Computer Villa
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>MERN stack project.</li>
                          <li>Users can buy any product they want.</li>
                          <li>Firebase's authentication has been used.</li>
                          <li>Admin can add or delete any product.</li>
                          <li>The user will be able to see the list of each product he has ordered.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              GIT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://computer-villa-b735c.web.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sohrab09/computer-villa-server"
                  target="_blank"
                >
                  SERVER SIDE SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sohrab09/computer-villa-client"
                  target="_blank"
                >
                  CLIENT SIDE SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Pin Matcher  */}
          <ImageEvent
            date="05/02/2021"
            className="text-center"
            text="Pin Matcher"
            src={L_PINMATCHER}
            alt="Pin Matcher"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a professional portfolio.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>PIN Code Matcher</li>
                          <li>html, css, vanilla js</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Git"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GIT
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://sohrab09.github.io/pin-matcher/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sohrab09/pin-matcher"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
