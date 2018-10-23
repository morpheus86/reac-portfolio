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
          <P>
            I am a junior web developer who recently graduated from Full Stack Academy of Code,
              one of the most prestigious coding schools in the greater New York area. I specialize in building full stack
              web applications
              with a focus on front-end. Aside from developing scalable web and mobile apps, I am a personal trainer,
              an avid learner
              of new technologies, and a fine food lover.
            On my free time, I enjoy working out, playing soccer, basketball and socializing with friends and family.
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
