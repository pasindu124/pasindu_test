import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn</Text>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={{ flexDirection: 'row'}} >
                <Text style={styles.textInfo}>Email</Text>
                <TextInput 
                    placeholder="Email"
                    returnKeyType="next"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.inputs}/>
            </View>
            <View style={{ flexDirection: 'row'}} >
                <Text style={styles.textInfo}>Password</Text>
                <TextInput 
                    placeholder="Password"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.inputs}/>
            </View>
                
                

                <TouchableOpacity onPress={ this.onSubmit} style={styles.button}>
                    <Text style={styles.buttontext}>SignIn</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    inputs: {
        height: 45,
        marginBottom:20,
        backgroundColor: '#95afc0',
        paddingHorizontal: 10,
        width: 260,
        marginRight: -20
    },
    button: {
        height: 50,
        backgroundColor: '#95afc0',
        paddingVertical: 15,
        width: 100,
        marginLeft: 250
    },
    buttontext: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 5
        
    },
    textInfo: {
        width: 120,
        textAlign: 'left'
    }
});
