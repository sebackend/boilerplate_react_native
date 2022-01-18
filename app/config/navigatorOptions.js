import React from 'react';
import { Text } from 'react-native'
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TabIcon } from '../components';

function TabBarIconWrapper({ focused, tintColor }, iconDefault, iconFocused) {
  return (
    <TabIcon
      iconDefault={iconDefault}
      iconFocused={iconFocused}
      focused={focused}
      tintColor={tintColor}
      size={20}
    />
  );
}

const commonHeaderNavigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: EStyleSheet.value('$backgroundColor'),
      elevation: 0,
      shadowOpacity: 0,
      shadowColor: 'transparent',
    },
    headerTintColor: EStyleSheet.value('$primary'),
    headerTitleStyle: {
      fontWeight: '400',
      fontSize: 20,
    },
    headerBackVisible: false,
  };
};

const appTabNavigatorOptions = {
  general: {
    headerShown: false,
    keyboardHidesTabBar: true,
    tabBarActiveTintColor: EStyleSheet.value('$primary'),
    tabBarStyle: {
      backgroundColor: EStyleSheet.value('$mainBackground'),
    }
  },
  home: {
    tabBarIcon: ({ focused, color }) => TabBarIconWrapper(
      {
        focused,
        tintColor: color,
      },
      'home',
      'home',
    ),
    tabBarLabel: 'Inicio',
  },
  profile: {
    tabBarLabel: 'Mi Cuenta',
    tabBarIcon: ({ focused, color }) =>
      TabBarIconWrapper({ focused, tintColor: color }, 'user', 'user'),
  }
};

TabBarIconWrapper.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export { appTabNavigatorOptions, commonHeaderNavigationOptions };
