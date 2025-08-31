
import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import AutoScroll from '@homielab/react-native-auto-scroll';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AutoScroll style={styles.scrolling1}>
          <Image
            style={styles.image}
            //delay={0}
            //duration={6000}
            source={require('../assets/merry-christmas-png.png')}
          />
        </AutoScroll>
        <AutoScroll style={styles.scrolling2} >
          <Text style={styles.welcome}>MERRY CHRISTMAS AND HAPPY NEW YEAR</Text>
        </AutoScroll>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
  },
  scrolling1: {
    width: 400,
    padding: 10,
    marginBottom: 10,
  },
  scrolling2: {
    backgroundColor: 'red',
    width: 400,
    padding: 10,
    marginBottom: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

/*

import AutoScroll from '@homielab/react-native-auto-scroll'
//import AutoScroll from '@homielab/react-native-auto-scroll';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MSG = [
  'Happy Birthday!',
  'Congratulations on another year well lived',
  'Best wishes on your birthday – may you have many, many more',
  'Wishing you the happiest of birthdays',
  'Best wishes for a fantastic person on your birthday',
  'I hope you treat yourself to something special on your birthday – you deserve it!',
];

export default class App extends React.Component {
  state = {
    msgIndex: 0,
  };

  updateText = () => {
    this.setState({
      msgIndex:
        this.state.msgIndex === MSG.length - 1 ? 0 : this.state.msgIndex + 1,
    });
  };

  render() {
    const msg = MSG[this.state.msgIndex];
    return (
      <View style={styles.container}>
        <AutoScroll duration={3500}>
          <Image
            style={styles.image}
            source={require('../assets/merry-christmas-png.png')}
          />
        </AutoScroll>

        <View style={styles.banner}>
          <AutoScroll>
            <Text style={styles.welcome}>{msg}</Text>
          </AutoScroll>
        </View>

        <View style={styles.banner}>
          <AutoScroll isLTR>
            <Text style={styles.welcome}>{msg}</Text>
          </AutoScroll>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.updateText} style={styles.button}>
            <Text style={styles.buttonText}>Change Birthday Wish</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
  },
  banner: {
    backgroundColor: 'red',
    marginVertical: 10,
    padding: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    maxWidth: 200,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
*/