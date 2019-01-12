//Source code adapted from:
//https://github.com/dwicao/react-native-login-screen
//Button from https://facebook.github.io/react-native/docs/button

import React, {Component} from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Wallpaper from './Wallpaper';


export default class LoginScreen extends React.Component {
	
  onLoginPress() {
	  /* TODO: login to existing acct. */
  }
  
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Button
			onPress={onLoginPress}
			title="Log In"
			color="#841584"
			accessibilityLabel="If you already have an account, log in here!"
		/>
		<Button
			onPress={() => this.props.navigation.navigate('CreateAcct')}
			title="Sign Up"
			color="#841584"
			accessibilityLabel="Sign up for an account on our app."
		/>
      </Wallpaper>
    );
  }
}