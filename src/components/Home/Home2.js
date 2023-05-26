import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myself.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ */}
              I am deeply passionate about honing my <i><b className="purple">programming skill</b></i> and improving <br /> my <i><b className="purple">problem-solving skill</b></i> 
              <br />
              {/* <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript </b>
              </i> */}
              {/* <br /> */}
              <br />
              I am dedicated to constantly learning and staying updated with the latest technologies  &nbsp;
              <i><b className="purple"></b></i>
              <br />
              <br />
              My primary objective is to provide <i><b className="purple">efficient and innovative solutions</b></i> that meet the needs and <i><b className="purple">requirements of users</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "450px", paddingTop: 0, paddingBottom: 80 }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pattma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pattarin-ma/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
