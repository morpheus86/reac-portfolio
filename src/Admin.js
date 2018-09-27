import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

class Admin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      passValue: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleChangePassword = (e) => {
    this.setState({ passValue: e.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Only an administrator can access this page</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter Email"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />

              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="text"
                value={this.state.passValue}
                placeholder="Enter Your Password"
                onChange={this.handleChangePassword}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </div>


      </div>
    );
  }
}

export default Admin