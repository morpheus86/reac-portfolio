import React from "react";
import posed from "react-pose";
import { Item } from "./stateless/Navigation";

const Portfolio = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default () => (
  <Portfolio>
    <Item>
      <div className="container">
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="experience"
        >
          <div className="my-auto">
            <h2 className="mb-5">Employment Experience</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Personal Trainer / Assistant Teacher</h3>
                <div className="subheading mb-3">YMCA</div>
                <p className="lead mb-5">
                  Teaching: Assisted in Introducing bacic HTML, CSS and
                  Javascript programming concepts to kids from the area and
                  community. Advised and provided mentorship to teenager and
                  kids regarding subject such as Math, computer science as well
                  as a go getter attitude.
                  <hr />
                  Personal training: I bring a believe in yourself attitude and
                  ensure client confidence by designing individual fitness plans
                  that cater to client interests and strengths. Client priority
                  was always met while focusing on areas of need.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2014 - Present</span>
              </div>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Language Lab Assistant</h3>
              <div className="subheading mb-3">Brooklyn College</div>
              <p className="lead mb-5">
                Provide explanation and direction to struggling student.Assisted
                students with course instruction in language practices.
              </p>
            </div>
            <div className="resume-date text-md-right"></div>
          </div>
        </section>
      </div>
    </Item>
  </Portfolio>
);
