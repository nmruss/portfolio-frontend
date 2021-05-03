import React from "react";
import { Container, Row, Col } from "reactstrap";
const projectData = require("../data/project_data.json");

const Detail = ({match})=>{
    return(
        <Container fluid>
            <h1>
                Hello from a {match.params.shortname} page
            </h1>
        </Container>
    );
}

export default Detail;