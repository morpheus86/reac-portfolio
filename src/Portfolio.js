import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Employment Experience</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Personal Trainer</h3>
                <div className="subheading mb-3">YMCA</div>
                <p className="lead mb-5">I bring a believe in yourself attitude and ensure client confidence by
                  designing individual fitness plans that cater to client interests and strengths. Client priority was
                  always
                  met
                  while focusing on areas of need.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2014 - Present</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Senior Sales Associate</h3>
                <div className="subheading mb-3">Travelex Worldwide Money</div>
                <p className="lead mb-5">Primary customer service associate in the store at one of the busiest money transfer agency in the
                  world.
                  Complete all day end procedures and maintain customer files. Identify the warning signs of questionable
                  transactions and mitigate
                  possible effects of these deals with Management. Ensure that all compliance requirements and regulations
                  are being
                  adhered to daily. Manage risk and act in accordance with guidelines set forth in the
                  Core Risk Standards.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">February 2010 - April 2015</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Language Lab Assistant</h3>
                <div className="subheading mb-3">Brooklyn College</div>
                <p className="lead mb-5">Provide explanation and direction to struggling student.Assisted students with course instruction in
                  language practices.</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2007 - June 2009</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;