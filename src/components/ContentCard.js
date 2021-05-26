import React from "react";
import { Container, Row, Col } from "reactstrap";

const ContentCard = ({ title, thumbnail, role, summary, id, shortname}) => {
  return (
    <Container fluid className="content-card-container">
      <a href={"/detail/" + shortname}>
        <Row>
          <Col md="6">
            <img src={thumbnail} alt={"thumbnail-" + title}></img>
          </Col>
          <Col md="1"></Col>
          <Col md="5">
            <div className="content-text-container">
              <h1 className="content-title black">{title}</h1>
              <h3 className="content-title">{"Role:" + role}</h3>
            </div>
          </Col>
        </Row>
      </a>
    </Container>
  );
};
export default ContentCard;
