import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
const projectData = require("../data/project_data.json");

const Detail = ({match})=>{
    let [content,setContent] = useState({});
    
    useEffect(()=>{
        let c = projectData.find(el => el.shortname == match.params.shortname);
        setContent(c);
    },[match.params.shortname])

    const renderTechnologies = ()=>
    {
        if(content.tech){
            let tList = "Technologies: ";
            content.tech.forEach((t,ind,arr)=>{
                if(ind !== 0)
                    tList += ", " + t;
                else
                    tList += t;
            })
            return tList;
        } else {
            return "";
        }
    }

    const renderLinks = ()=>{
        let linkList = [];
        if(content.links){
            content.links.forEach((l,ind,arr)=>{
                linkList.push(<div><a rel="noopener noreferrer" target="_blank" href={l}>{l}</a></div>);
            }) 
        }
        return linkList;
    }
    
    return(
        <Container fluid style={{"padding":0}} className="content-detail-container">
            <div className="detail-header-image" style={{backgroundImage:"url(" + content.detail_header + ")"}}>
                <div className="title">
                    <h1>
                        {content.title}
                    </h1>
                </div>
            </div>
            <Container className="detail-info-container">
                <Row>
                    <Col xs={12}>
                        <h3>{content.summary}</h3>
                    </Col>
                    <Col xs={12}>
                        <div className="detail-image-container">
                            <img alt={content.shortname} src={content.images ? content.images[0] : "/img/content/loading_content_image.jpg"}/>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <p>Role: {content.role}</p>
                        <p>Project Type: {content.type}</p>
                        <p>{renderTechnologies()}</p>
                        <p><b>Links:</b> {renderLinks()}</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Detail;