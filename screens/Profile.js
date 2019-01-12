import React, { Component } from 'react'
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
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
			   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Age"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
			
			<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
			   
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Gender"
               placeholderTextColor = "#9a73ef"
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
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})