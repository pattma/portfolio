import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hello, I am <span className="purple">Pattarin Maneesakprasert </span>
            from <span className="purple"> Khonkaen, Thailand</span>
            <br />
            I am a passionate junior software developer with a drive for innovation and problem-solving meanwhile excited to contribute my skills to create impactful software solutions
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Playing board games
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Reading a book
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the thrill of turning the impossible into reality"{" "}
          </p>
          <footer className="blockquote-footer">Pattarin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
