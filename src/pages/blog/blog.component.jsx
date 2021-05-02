import React from "react";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import blog1 from "../../assets/img/blog/blog1.webp"
import blog2 from "../../assets/img/blog/blog2.webp"
import blog3 from "../../assets/img/blog/blog3.webp"
import "./blog.styles.css";


const Blog = () => {
    return (
        <div className="pt-3 pb-3" id="blog"> <hr />
            <h1 className="text-center pb-4">Blog</h1>
            <CardGroup>
                <Card className="text-center m-2 p-2">
                    <Card.Img variant="top" src={blog1} />
                    <Card.Body>
                        <Card.Title>Study Plan</Card.Title>
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
                        <Card.Title>Study Plan</Card.Title>
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
                    <Card.Img variant="top" src={blog3} />
                    <Card.Body>
                        <Card.Title>Study Plan</Card.Title>
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
            </CardGroup>
        </div>
    );
};

export default Blog;
