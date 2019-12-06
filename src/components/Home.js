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
                hi<span className="blink">|</span>
              </h1>
            </Col>
            <Col sm="0" md="4"></Col>
          </Row>
        </Container>
      </div>
      <img className="down-chevron" src="/img/down-chevron.svg" alt="down-arrow" />
    </div>
  );
};

export default Home;
