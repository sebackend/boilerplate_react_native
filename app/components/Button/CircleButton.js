import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CircleButton = ({
  containerStyles, width, height, disabled, ...props
}) => (
  <TouchableOpacity
    style={[styles.defaultButtom.circleButton, containerStyles, {
      width: width,
      height: height,
    }]}
    activeOpacity={disabled ? 1 : 0.6}
    disabled={disabled}
    {...props}
  >
    {props.children}
  </TouchableOpacity>
);

CircleButton.propTypes = {
  containerStyles: PropTypes.shape({}),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

CircleButton.defaultProps = {
  containerStyles: {},
  width: 50,
  height: 50,
  disabled: false,
};

export default CircleButton;
