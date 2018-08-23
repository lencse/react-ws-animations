import React, { Component } from 'react';
import './styles.css';

export default class TextInput extends Component {
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
          {...this.props}
        />
      </div>
    )
  }
}
