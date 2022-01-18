import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  commonHeaderNavigationOptions,
  appTabNavigatorOptions,
} from './navigatorOptions';

import * as screens from '../screens';
import { restoreAuthInfo, validateToken } from '../actions/auth';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={screens.HomeScreen}
        options={commonHeaderNavigationOptions}
      />
    </HomeStack.Navigator>
  )
};

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      options={{ title: 'Perfil' }}
      component={screens.ProfileScreen}
    />
  </ProfileStack.Navigator>
);

const AppStack = createBottomTabNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator
    initialRouteName="HomeTab"
    screenOptions={appTabNavigatorOptions.general}
  >
    <AppStack.Screen
      name="HomeTab"
      component={HomeStackScreen}
      options={appTabNavigatorOptions.home}
    />
    <AppStack.Screen
      name="ProfileTab"
      component={ProfileStackScreen}
      options={appTabNavigatorOptions.profile}
    />
  </AppStack.Navigator>
);

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false
    }}
  >
    <AuthStack.Screen name="Login" component={screens.LoginScreen} />
    <AuthStack.Screen name="Register" component={screens.RegisterScreen} />
  </AuthStack.Navigator>
);

const bootstrapAsync = async (dispatch) => {
  const jwt = await AsyncStorage.getItem('jwt');

  if (jwt) {
    // Setear el jwt que guardamos en el AsyncStorage, hacia el auth store
    dispatch(restoreAuthInfo({ jwt }));
  }
}

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  const dispatch = useDispatch();
  const {
    signedIn,
    headers: {
      jwt
    }
  } = useSelector(state => state.auth);

  useEffect(() => {
    bootstrapAsync(dispatch);
  }, []);

  useEffect(() => {
    if (jwt !== '') {
      // Validar accesToken contra la API para ver que aún no ha expirado
      dispatch(validateToken());
    }
  }, [jwt]);

  return (
    <RootStack.Navigator
      screenOptions={{ 
        headerShown: false
      }}
    >
      {signedIn ? (
        <RootStack.Screen name="App" component={AppStackScreen} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  )
  
}

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default AppContainer;