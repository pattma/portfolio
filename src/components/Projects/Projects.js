import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitbook from "../../Assets/Projects/FitBook.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Project </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitbook}
              isBlog={false}
              title="FitBook"
              description="Fitbook is the activity tracker web application is designed for busy people who want to keep track of their physical activities but don't have much time to do the activities"
              ghLink="https://github.com/warutniy/frontend_groupA-2"
              demoLink="https://frontend-group-a-2.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
