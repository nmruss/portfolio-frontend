import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContentCard from "./ContentCard";
const projectData = require("../data/project_data.json");

const Content = () => {
  function renderContent() {
    let contentCards = [];
    projectData.forEach((project, ind, arr) => {
      const { title, thumbnail, role, type } = project;
      contentCards.push(
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <ContentCard title={title} thumbnail={thumbnail} role={role} type={type} />
          </Col>
          <Col md="2"></Col>
        </Row>
      );
    });
    return contentCards;
  }
  return (
    <Container fluid className="content-container">
      <Row>
        <Col sm="2" md="2"></Col>
        <Col sm="8" md="8">
          <div className="content-header-container">
            <div>
              <h1 className="black">i'm nick</h1>
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
      {renderContent()}
    </Container>
  );
};

export default Content;
