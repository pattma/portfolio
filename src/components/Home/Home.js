import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-1.png";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "../../components/Home/Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PATTARIN MANEESAKPRASERT</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingLeft: 20, paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
