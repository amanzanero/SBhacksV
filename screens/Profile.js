import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


class Inputs extends Component {
   state = {
      name: '',
      email: '',
	  age: '',
	  phone: '',
	  gender: ''
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handleAge = (text) => {
      this.setState({ password: age })
   }
   handlePhone = (text) => {
      this.setState({ password: phone })
   }
   handleGender = (text) => {
      this.setState({ password: gender })
   }
   // login = (email, pass) => {
      // alert('email: ' + email + ' password: ' + pass)
   // }
   render() {
      return (
         <View style = {styles.container}>
		 <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
			   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email(@.edu)"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Age"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
			
			<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone#"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
			   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Gender"
               placeholderTextColor = "#9EA0A4"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
			
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
	  borderRadius: 4,
	  color: 'black',
   },
   submitButton: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})