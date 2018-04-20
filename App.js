import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';


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

const generatePhrase = () => {
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 10);

  //phrases
  let phrases = [];
  phrases[0] = `Formal education will make you a living. Self-education will make you a fortune.`;
  phrases[1] = `Go is the language JavaScript programmers retire to when they get old. Like the Florida of programming languages.`;
  phrases[2] = `90% of the functionality delivered now is better than 100% delivered never.`;
  phrases[3] = `A good API is not just easy to use but also hard to misuse.`;
  phrases[4] = `Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.`;
  phrases[5] = `An evolving system increases its complexity unless work is done to reduce it.`;
  phrases[6] = `There's nothing more permanent than a temporary hack.`;
  phrases[7] = `Things that are impossible just take longer.`;
  phrases[8] = `Always bet on JavaScript.`;
  phrases[9] = `Security is a state of mind.`;

  let chosenPhrase = phrases[randomNumber];
  Alert.alert(`Today's phrase`,chosenPhrase)
}

export default class App extends React.Component {

  //const { container } = Styles

  render() {
    return (
      <View style={Styles.container}>
        <Image source={require('./img/logo.png')}/>
        <TouchableOpacity style={Styles.button} onPress={generatePhrase}>
          <Text style={Styles.textButton}>New Phrase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


