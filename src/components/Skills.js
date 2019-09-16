import React from "react";
import posed from "react-pose";
import { Item } from "../stateless/Navigation";

const Skills = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default () => (
  <Skills>
    <Item>
      <article className="container">
        <div className="box">
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
          >
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-html5" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-css3-alt" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-node-js" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-npm" />
                </li>
              </ul>
              <hr />
              <div className="subheading mb-3">Tools and Technologies</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check" />
                  JavaScript -- Node.js -- React.js -- HTML -- CSS -- React
                  Native
                </li>
                <li>
                  <i className="fa-li fa fa-check" />
                  PostgreSQL -- OAuth -- GitHub -- Xcode -- AJAX
                </li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Webpack -- ES6 -- Sequelize -- Redux -- Axios -- Express.js --
                  FlexBox
                </li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Heroku -- Firebase -- Passport -- Jasmine Framework -- Mocha
                  -- React-Redux -- Chai
                </li>
              </ul>
              <hr />
            </div>
            <div className="subheading mb-3 mt-5">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check mt-2" />
                Design and Understand what the application main functionality
                are
              </li>
              <li>
                <i className="fa-li fa fa-check mt-2" />
                Sketch the application
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Build by feature{" "}
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Web application, Responsive Design
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Testing &amp; Debugging
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Cross Functional Teams
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Item>
  </Skills>
);
