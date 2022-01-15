import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TextButton = ({
  title, containerStyles, textStyles, disabled, ...props
}) => (
  <TouchableOpacity
    style={[
      disabled ? styles.buttonBgContainerDisabled : styles.buttonBgContainer,
      containerStyles,
    ]}
    activeOpacity={disabled ? 1 : 0.7}
    disabled={disabled}
    {...props}
  >
    <Text style={[disabled ? styles.buttonTextTextDisabled : styles.buttonTextText, textStyles]}>
      {title}
    </Text>
  </TouchableOpacity>
);

TextButton.defaultProps = {
  title: 'Button',
  containerStyles: {},
  textStyles: {},
  disabled: false,
};

export default TextButton;
