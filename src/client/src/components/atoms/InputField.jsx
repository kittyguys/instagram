import React, { Component } from "react";
import { withRouter } from "react-router";

class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange }
    } = this.props;
    onChange(e.target.files[0]);
    this.props.history.push("/create/details");
  }

  render() {
    const {
      input: { value }
    } = this.props;
    const { input, label, required, meta } = this.props; //whatever props you send to the component from redux-form Field
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(FieldFileInput);