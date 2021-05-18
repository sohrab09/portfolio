import React from "react";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import blog1 from "../../assets/img/blog/blog1.webp"
import blog2 from "../../assets/img/blog/blog2.webp"
import blog3 from "../../assets/img/blog/blog3.webp"
import blog4 from "../../assets/img/blog/blog4.webp"
import blog5 from "../../assets/img/blog/blog5.webp"
import "./blog.styles.css";


const Blog = () => {
    return (
        <div className="pt-3 pb-3" id="blog"> <hr />
            <h1 className="text-center pb-4">Blog</h1>
            <CardGroup>
                <Card className="text-center m-2 p-2">
                    <Card.Img variant="top" src={blog1} />
                    <Card.Body>
                        <Card.Title>Computer Science Study Plan</Card.Title>
                        <Card.Text>
                            Computers and electronics play an enormous role in today's society, impacting everything from communication and medicine to science.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <a href="https://link.medium.com/w9XzuWGvVfb" target="_blank" rel="noopener noreferrer">
                                For more info, go to Medium <i class="fab fa-medium"></i>
                            </a>
                        </small>
                    </Card.Footer>
                </Card>
                <Card className="text-center m-2 p-2">
                    <Card.Img variant="top" src={blog2} />
                    <Card.Body>
                        <Card.Title>Introduction to JavaScript</Card.Title>
                        <Card.Text>
                        JavaScript is a scripting or programming language that allows you to implement complex features on web pages. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <a href="https://sohrab-cse9.medium.com/introduction-to-javascript-203480ce6791" target="_blank" rel="noopener noreferrer">
                                For more info, go to Medium <i class="fab fa-medium"></i>
                            </a>
                        </small>
                    </Card.Footer>
                </Card>
                <Card className="text-center m-2 p-2">
                    <Card.Img variant="top" src={blog3} />
                    <Card.Body>
                        <Card.Title>Basic JavaScript you need to know.</Card.Title>
                        <Card.Text>
                        Today I will discuss with you some special topics of JavaScript. Since I am a new programmer and new blog writer,so please forgive all mistakes in writing.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <a href="https://sohrab-cse9.medium.com/basic-javascript-you-need-to-know-a4d0945046de" target="_blank" rel="noopener noreferrer">
                                For more info, go to Medium <i class="fab fa-medium"></i>
                            </a>
                        </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
            <Card className="text-center m-2 p-2">
                    <Card.Img variant="top" src={blog4} />
                    <Card.Body>
                        <Card.Title>10 Things you need to know in React.</Card.Title>
                        <Card.Text>
                        React is an open source, front end, declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <a href="https://sohrab-cse9.medium.com/10-things-you-need-to-know-in-react-eb8f0c5d546f" target="_blank" rel="noopener noreferrer">
                                For more info, go to Medium <i class="fab fa-medium"></i>
                            </a>
                        </small>
                    </Card.Footer>
                </Card>
                <Card className="text-center m-2 p-2">
                    <Card.Img variant="top" src={blog5} />
                    <Card.Body>
                        <Card.Title>JavaScript Interview Questions, You need to know.</Card.Title>
                        <Card.Text>
                        Frequently Asked JavaScript Interview Questions and Answers for Freshers and Experienced. You need to know this.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <a href="https://sohrab-cse9.medium.com/javascript-interview-questions-you-need-to-know-e3528deef998" target="_blank" rel="noopener noreferrer">
                                For more info, go to Medium <i class="fab fa-medium"></i>
                            </a>
                        </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Blog;
