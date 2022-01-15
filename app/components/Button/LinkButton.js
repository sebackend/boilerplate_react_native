import React from 'react';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';
import styles from './styles';


const LinkButton = ({
  title, iconDefault, iconFocused, textStyles, containerStyles, ...props
}) => (
  <TouchableOpacity
    style={[styles.buttonLink, containerStyles]}
    {...props}
  >
    <Text style={[styles.buttonLinkText, textStyles]}>{title}</Text>
    <Icon name="chevron-right" size={20} style={styles.buttonLinkIcon} />
  </TouchableOpacity>
);

LinkButton.defaultProps = {
  title: 'Button',
  iconDefault: styles.defaultIcon,
  iconFocused: styles.focusedIcon,
  containerStyles: {},
  textStyles: {},
};

LinkButton.propTypes = {
  title: PropTypes.string,
  iconDefault: PropTypes.string,
  iconFocused: PropTypes.string,
  containerStyles: ViewPropTypes.style,
  textStyles: ViewPropTypes.style,
};

export default LinkButton;