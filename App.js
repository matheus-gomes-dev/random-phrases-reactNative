import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <Text style={styles.textStyle}>Day's phrase</Text>
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
  textStyle: {
    fontSize: 20,
    backgroundColor: '#08509B',
    margin: 30,
    textAlign: 'center'
  }
});
