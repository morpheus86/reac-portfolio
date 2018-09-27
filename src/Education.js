import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">FullStack Academy of Code</h3>
                <div className="subheading mb-3">Full Stack Engineer</div>
                <div>Computer Science - Web Development</div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary"> January 2018 - August 2018</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Brooklyn College</h3>
                <div className="subheading mb-3">Biology</div>
                <div>Biology - over 120 credits completed</div>
                <p>GPA: 3.2</p>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Grant Associate</h3>
                <div className="subheading mb-3">Customer Service Training - MS Word, Excel, PowerPoint, and Access</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;