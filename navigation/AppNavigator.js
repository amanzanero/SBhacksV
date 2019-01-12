import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import Profile from '../screens/Profile';
import Preferences from '../screens/Preferences';




export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: LoginScreen,
  Creds: Profile,
  Prefs: Preferences,
  AppContents: MainTabNavigator,
}));