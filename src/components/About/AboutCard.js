import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Supratim Nag </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently in my 3rd year of B.Tech & preparing for GSoC and
            upcoming GATE 2025 examination.
            <br />
            I am pursuing my B.Tech at MCKV Institute of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Tech content for others!
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">snsupratim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
