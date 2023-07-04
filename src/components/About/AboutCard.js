import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Gupta </span>
            from <span className="purple"> Gurugram, India.</span>
            <br /> I am  Completed my diploma degree in (CSE) 

            <br />
            Additionally, I am currently Trainee in Functionup
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new food
            </li>
            <li className="about-activity">
              <ImPointRight />Playing volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "“Things aren’t always #000000 and #FFFFFF”"{" "}
          </p>
          <footer className="blockquote-footer">Harsh Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
