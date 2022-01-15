import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const IconButton = ({
  iconName, containerStyles, textStyles, disabled, color, size, iconStyles, ...props
}) => (
  <TouchableOpacity
    style={[disabled ? styles.iconButtonDisabled : styles.iconButton, containerStyles]}
    activeOpacity={disabled ? 1 : 0.7}
    disabled={disabled}
    {...props}
  >
    <Icon
      name={iconName}
      style={[styles.iconButtonicon, iconStyles]}
      size={size}
      color={color}
    />
  </TouchableOpacity>
);

IconButton.propTypes = {
  iconDefault: PropTypes.string,
  iconFocused: PropTypes.string,
  containerStyles: ViewPropTypes.style,
  textStyles: ViewPropTypes.style,
  disabled: PropTypes.bool,
  color: PropTypes.string,
};

IconButton.defaultProps = {
  iconDefault: '',
  iconFocused: '',
  containerStyles: {},
  textStyles: {},
  disabled: false,
  color: '#fff',
};

export default IconButton;
