import React from 'react';
import posed from 'react-pose';
import { Item } from './stateless/Navigation';

const Projects = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default () => (
  <Projects>
    <Item>
      <div className="container">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
          <h3 className="my-auto">
          </h3><h2 className="mb-5">Projects</h2>
          <h3 className="subheading mb-3">FinTrack</h3>
          <p className="lead mb-5">
            Progressive web application that keeps tracks of all your daily expenses and suggest ways to save according
            to your spending habit.
        </p><li><i className="fa-li fa fa-check" />
            Worked on implementing the plaid API functionality in the back-end in order to get bank information from
          the past 6 month of a specific user</li>
          <li>
            <i className="fa-li fa fa-check" />
            Added and updated new fields by using the react-redux library while making
            sure that the firebase firestore which contained our data was being accessed by our store in order to
          display the desirable information to our user</li>
          <p />
          <h3 className="subheading mb-3">ChatLiner</h3>
          <p className="lead mb-5">
            Beta chat based mobile application that creates private channels.
        </p><li><i className="fa-li fa fa-check" />
            Implemented both back-end and front-end using a NodeJs, PSQL, SQL and Sequelize library
        </li>
          <li><i className="fa-li fa fa-check" />
            Used the react-native library with, react, React-redux
        </li>
          <p />
          <h3 className="subheading mb-3">GraceStarShopper</h3>
          <p className="lead mb-5">
            An e-commerce based website that sells different stars from the universe
        </p><li><i className="fa-li fa fa-check" />
            Work on implementing the database using NdeJs, PostgreSQL, sequelize
        </li>
          <li><i className="fa-li fa fa-check" />
            Wrote test-specs for the most of the back end, react, react-redux
        </li>
          <li><i className="fa-li fa fa-check" />
            Help implement the strip API
        </li>
          <p />
        </section>
      </div>
    </Item>
  </Projects>
);
