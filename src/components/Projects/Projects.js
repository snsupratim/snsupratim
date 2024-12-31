import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import mlshowcase from "../../Assets/Projects/mlshowcase.png";
import realli from "../../Assets/Projects/realli.png";
import relet from "../../Assets/Projects/relet.png";
import innect from "../../Assets/Projects/innect.png";
import weby from "../../Assets/Projects/weby.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={relet}
              isBlog={false}
              title="Relet"
              description="✨ RELET - Ful stack real-time chat application ✨"
              ghLink="https://github.com/snsupratim/Relet"
              demoLink="https://relet.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weby}
              isBlog={false}
              title="WeBy"
              description=" WeBy - social media platform to for people to connect to each other!"
              ghLink="https://github.com/snsupratim/WeBy"
              demoLink="https://weby-q87m.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realli}
              isBlog={false}
              title="Realli"
              description="Realli - A dating side where you really get to know someone ✨"
              ghLink="https://github.com/snsupratim/Realli"
              demoLink="https://realli.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Peaker"
              description="Use"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={innect}
              isBlog={false}
              title="Innect"
              description="A networking platform for proffesionals!"
              ghLink="https://github.com/snsupratim/Innect"
              demoLink="https://innect.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlshowcase}
              isBlog={false}
              title="ML Showcase"
              description="This is the Hub of my all ML Models ...Navigate to anywhere you want..."
              ghLink="https://github.com/snsupratim/Models-Hub"
              demoLink="https://models-hub.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
