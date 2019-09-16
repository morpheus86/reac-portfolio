import React from "react";
import posed from "react-pose";
import { Item } from "./stateless/Navigation";
import { projectInfo } from "./data/infoAbout";

const Projects = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});
const infoProject = projectInfo.map(p => {
  for (let prop in p) {
    let desc;
    let title;
    let work;
    if (prop !== "work") {
      title = prop;
      desc = p[prop];
      work = p["work"];
      return (
        <div>
          <h3 className="subheading mb-3">{title}</h3>
          <p className="lead mb-5">{desc}</p>
          <li>
            <i className="fa-li fa" />
            {work}
          </li>
          <p />
        </div>
      );
    }
  }
});

export default () => (
  <Projects>
    <Item>
      <div className="container">
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="projects"
        >
          <h3 className="my-auto"></h3>
          <h2 className="mb-5">Projects</h2>
          {infoProject}
        </section>
      </div>
    </Item>
  </Projects>
);
