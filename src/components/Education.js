import React from "react";
import posed from "react-pose";
import { Item } from "../stateless/Navigation";
import { education } from "../data/infoAbout";
const Education = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});
const ed = education.map(e => {
  for (let prop in e) {
    let description, school, study;
    if (prop !== "desc") {
      study = e[prop];
      description = e["desc"];
      school = prop;
      return (
        <div
          className="resume-item d-flex flex-column flex-md-row mb-5"
          key={e}
        >
          <div className="resume-content mr-auto">
            <h3 className="mb-0">{school}</h3>
            <div className="subheading mb-3">{study}</div>
            <div>{description}</div>
          </div>
        </div>
      );
    }
  }
});
export default () => (
  <Education>
    <Item>
      <div className="container">
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="education"
        >
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>
            {ed}
          </div>
        </section>
      </div>
    </Item>
  </Education>
);
