import React from "react";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <div id="header">
      <div>
        <Container fluid className="header-container">
          <Row>
            <Col sm="12" md="8">
              <h1>
                hi there.<span className="blink">|</span>
              </h1>
            </Col>
            <Col sm="0" md="4"></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
