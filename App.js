import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default class App extends React.Component {

  //const { container } = Styles

  render() {
    return (
      <View style={Styles.container}>
        <Image source={require('./img/logo.png')}/>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.textButton}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


