import React from "react";
import posed from "react-pose";
import { Item } from "../stateless/Navigation";
import { projectInfo } from "../data/infoAbout";

const Projects = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});
const infoProject = projectInfo.map(p => {
  for (let prop in p) {
    let desc;
    let title;
    let work;
    let link;
    if (prop !== "work" && prop !== "link") {
      title = prop;
      desc = p[prop];
      work = p["work"];
      link = p["link"];
      return (
        <div key={title}>
          <h3 className="subheading mb-3">{title}</h3>
          <p className="lead mb-5">{desc}</p>
          <li>
            <i className="fa-li fa" />
            {work}
          </li>
          <p />
          <p>
            you can view this app or the code for this app by clicking on this
            Link:
            <a href={link}>{title} app</a>
          </p>
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
          <h2 className="mb-5">Projects</h2>
          {infoProject}
        </section>
      </div>
    </Item>
  </Projects>
);
