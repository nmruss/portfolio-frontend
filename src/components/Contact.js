import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contact =()=>{
    return(
        <div className="contact-container">
            <Container>
                <Row>
                    <Col>
                        <h4><b>email:</b> nrusso1993@gmail.com</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a target="_blank" href="https://www.linkedin.com/in/nicholas-r-6b377864/"><h4>linkedin</h4></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a target="_blank" href="https://github.com/nmruss"><h4>github</h4></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a target="_blank" href="./Nick_Russo_Resume.pdf"><h4>resume</h4></a>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Contact;