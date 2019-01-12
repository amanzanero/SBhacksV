import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
// const Users = [
  // { id: "1", uri: require('./assets/1.jpg') },
  // { id: "2", uri: require('./assets/2.jpg') },
  // { id: "3", uri: require('./assets/3.jpg') },
  // { id: "4", uri: require('./assets/4.jpg') },
  // { id: "5", uri: require('./assets/5.jpg') },
// ]

export default class App extends React.Component {

render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Name: </Text>
		<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
		/>
		<Text>Email(.edu): </Text>
		<Text>Age: </Text>
		<Text>Phone: </Text>
		<Text>Gender: </Text>
      </View>
    );
  }
}

}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});