import React, { Component } from 'react';
import './styles.css';

export default class TextInput extends Component {
  state = {
    isFocused: false,
  }

  setFocus = isFocused => {
    this.setState({ isFocused });
  }

  render() {
    const { label } = this.props;
    return(
      <div className="textinput-container">
        <label
          htmlFor={`input-${label}`}
        >
          {label}
        </label>
        <input
          name={`input-${label}`}
          id={`input-${label}`}
          type="text"
          onFocus={() => this.setFocus(true)}
          onBlur={() => this.setFocus(false)}
          {...this.props}
        />
      </div>
    )
  }
}
