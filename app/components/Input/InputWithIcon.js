import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

class InputWithIcon extends Component {
  static propTypes = {
    iconName: PropTypes.string,
    containerStyles: PropTypes.shape({}),
    inputStyles: PropTypes.shape({}),
    iconStyles: PropTypes.shape({}),
    onPress: PropTypes.func,
    reference: PropTypes.func,
  };

  static defaultProps = {
    iconName: '',
    containerStyles: {},
    inputStyles: {},
    iconStyles: {},
    onPress: null,
    reference: null,
  };

  render() {
    const { iconName, containerStyles, inputStyles, iconStyles, onPress, reference } = this.props;
    return (
      <View style={[styles.containerInputWithIcon, containerStyles]}>
        <TextInput
          ref={reference}
          style={[styles.inputWithIcon, inputStyles]}
          {...this.props}
        />
        <Icon
          onPress={onPress}
          name={iconName}
          style={[styles.iconInsideInput, iconStyles]}
          size={20}
        />
      </View>
    );
  }
}

export default InputWithIcon;
