import React from "react";
import posed from "react-pose";
import { P } from "./stateless/Navigation";
import { info } from "./data/infoAbout";
const About = posed.div({
  enter: { staggerChildren: 50 }
});

export default () => (
  <About>
    <div className="container">
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">
            Hamadou Tidiane
            <span className="text-primary"> Diallo</span>
          </h1>
          <div className="subheading mb-5">
            {" "}
            Brooklyn, NY 11210 · (646) 597-0360
            <a href="hamadou_diallo@yahoo.com"> hamadou_diallo@yahoo.com</a>
            <hr />
          </div>
          <P className="lead mb-5">{info.about}</P>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/tidianediallo1986/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/morpheus86">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </About>
);
