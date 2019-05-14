import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/SignIn'
export default class App extends React.Component {
  render() {
    return (
      <SignIn/>
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
});
