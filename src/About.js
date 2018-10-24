import React from 'react';
import posed from 'react-pose';
import { P } from './stateless/Navigation';

const About = posed.div({
  enter: { staggerChildren: 50 }
})


export default () => (
  <About>
    <div className="container">
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Hamadou Tidiane
            <span className="text-primary">Diallo</span>
          </h1>
          <div className="subheading mb-5"> Brooklyn, NY 11210 · (646) 597-0360 ·
            <a href="hamadou_diallo@yahoo.com">hamadou_diallo@yahoo.com</a>
          </div>
          <P className="lead mb-5">
            My story is similar but at the same time quite different to a lot of the immigrant that lives in New York.
            Searching for a better future while striving to challenge myself and helping contribute to a better community both socially and physically. I became a software Engineer in order to contribute in the advancement of my community and at the same time be around mind like people. I graduated from Full Stack Academy of Code,
              one of the most prestigious coding schools in the greater New York area. I feel very comfortable and happy designing and analyzing algorithms as well as learning new technologies and working with the tools of different technologies i have acquired. I specialize in building full stack
              web applications through NERD stack (Node, Express, React, React-Redux and database). Aside from developing scalable web and mobile apps, I am also a personal trainer, I am very passionate about what i do which make me give my best and  be the best in anything i put my mind to.
              I am an avid learner
              of new technologies, a fine food lover.
            On my free time I like to compete playing soccer, basketball and socializing with friends and family trying not to think about code.
          </P>
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
