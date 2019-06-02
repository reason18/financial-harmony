import React from "react";
import Input from "./controls/Input";
import Button from "./controls/Button";

import "./index.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.buildState();
  }

  buildState = () => {
    let state = {};
    this.props.fields.forEach(item => {
      state[item.name] = item.defaultValue;
    });
    return state;
  };

  onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.fields.map(item => {
          const { name, placeholder } = item;
          return (
            <p>
              <Input
                name={name}
                value={this.state[name]}
                onChange={this.onChange}
                placeholder={placeholder}
              />
            </p>
          );
        })}
        <Button label={this.props.buttonLabel} onClick={this.onSubmit} />
      </form>
    );
  }
}

export default Form;
