import React, { Component } from 'react';
import './styles.css';
import { Transition } from 'react-transition-group'

const duration = 3000

const defaultLabelStyle = {
  fontSize: 12,
  transition: `all ${duration}ms`
}

const labelTransitionStyle = {
  entering: {
    fontSize: 10
  },
  entered: {
    fontSize: 10
  }
}

const defaultInputStyle = {
  height: 16,
  padding: 0,
  transition: `all ${duration}ms ease-in-out`
}

const inputTransitionStyle = {
  entering: {
    height: 32,
    padding: 5
  },
  entered: {
    height: 32,
    padding: 5
  }
}

export default class TextInput extends Component {
  state = {
    isFocused: false
  }

  setFocus = (isFocused) => {
    this.setState({isFocused})
  }

  render() {
    const { label, value } = this.props;
    return(
      <Transition in={this.state.isFocused || value !== ''} duration={duration}>
        {
            (state) => (
              <div className="textinput-container">
                <label
                  htmlFor={`input-${label}`}
                  style={{
                    ...defaultLabelStyle,
                    ...labelTransitionStyle[state]
                  }}
                >
                  {label}
                </label>
                <input
                  style={{
                    ...defaultInputStyle,
                    ...inputTransitionStyle[state]
                  }}
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
      </Transition>
    )
  }
}
