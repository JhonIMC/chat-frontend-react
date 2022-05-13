import React from "react";
import { Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Connect with your friends or family</h1>
          <p>Chat App lets your connect with the world</p>
          <Nav.Link as={Link} to="/chat">
            <Button variant="success" style={{marginLeft: -15}}>
              Get Started
              <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </Nav.Link>
        </div>
      </Col>
      <Col md={6} className="home__bg">
      </Col>
    </Row>
  );
}

export default Home;
