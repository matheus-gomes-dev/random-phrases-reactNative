import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class App extends React.Component {

  //const { container } = Styles

  render() {
    return (
      <View style={Styles.container}>
        <Image source={require('./img/logo.png')}/>
        <TouchableOpacity>
          <Text>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


