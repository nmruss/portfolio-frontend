import React from "react";
import { Container, Row, Col } from "reactstrap";

const Content = () => {
  return (
    <Container fluid className="content-container">
      <Row>
        <Col sm="2" md="2"></Col>
        <Col sm="8" md="8">
          <div className="content-header-container">
            <div>
              <h1>i'm nick</h1>
            </div>
            <div>
              <h1>
                <span className="black">i make </span>
                apps
                <br />
                websites
                <br />
                games
                <br />
                apis
              </h1>
            </div>
          </div>
        </Col>

        <Col sm="2" md="2"></Col>
      </Row>
    </Container>
  );
};

export default Content;
