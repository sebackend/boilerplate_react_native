import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Input extends Component {
  static propTypes = {
    placeholderTextColor: PropTypes.string,
    underlineColorAndroid: PropTypes.string,
    reference: PropTypes.func,
  };

  static defaultProps = {
    placeholderTextColor: 'rgba(0,0,0,0.3)',
    underlineColorAndroid: 'rgba(0,0,0,0)',
    reference: null,
  };

  render() {
    return (
      <TextInput
        ref={this.props.reference}
        style={[styles.input, this.props.styles]}
        placeholderTextColor={this.props.placeholderTextColor}
        underlineColorAndroid={this.props.underlineColorAndroid}
        placeholder={this.props.placeholderText}
        {...this.props}
      />
    );
  }
}

export default Input;
