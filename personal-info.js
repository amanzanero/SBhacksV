import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class App extends React.Component {
  constructor() {
     super();
     this.state = { screenWidth: Dimensions.get("window").width }; 
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.tempNav}>
        
        </View>
        <Image 
            style = {{ width: this.state.screenWidth, height: 400 }}
            source = {{'uri: assets/portrait.png'}}
        />
        <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text>Age: 25</Text>
            <Text>Info</Text>
        </View>
        <View>
            <Text>Price Range: $800-$1200</Text>
            <Text>Sleeping hours: 11pm-12pm</Text>
            <Text>Drugs: Yes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  tempNav: {
    width: 100 + "%",
    height: 50,
    marginTop: 20,
    backgroundColor: '#c3c3c3',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
