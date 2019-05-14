import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
export default class SignIn extends ValidationComponent {
    constructor(props){
        super(props)
        this.state= {
            email: '',
            password: '',
            errorEmail: '',
            errorPassword: ''
        }
    }
    onSubmit = () => {
        this.validate({
            email: { email: true},
            password: {required: true}
        });
        if (this.getErrorsInField('email')) {
            this.setState({errorEmail: this.getErrorsInField('email')[0]});
        }
        if (this.getErrorsInField('password')) {
            this.setState({errorPassword: this.getErrorsInField('password')[0]});
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.signintext}>SignIn</Text>
            <KeyboardAvoidingView behavior="padding" enabled>
                <View style={{ flexDirection: 'row'}} >
                    <Text style={styles.textInfo}>Email</Text>
                    <TextInput 
                        placeholder="Email"
                        returnKeyType="next"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(text)=> this.setState({email:text})}
                        autoCorrect={false}
                        style={styles.inputs}/>
                    
                    {/* {this.getErrorsInField('email').map(errorMessage => <Text>{errorMessage}</Text>) } */}
                </View>
                <Text style={styles.errorText}>
                        {this.state.errorEmail}
                </Text>
                <View style={{ flexDirection: 'row'}} >
                    <Text style={styles.textInfo}>Password</Text>
                    <TextInput 
                        placeholder="Password"
                        returnKeyType="go"
                        secureTextEntry
                        onChangeText={(text)=> this.setState({password:text})}
                        style={styles.inputs}/>
                </View>
                <Text style={styles.errorText}>
                        {this.state.errorPassword}
                </Text>
                    
                    

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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    inputs: {
        height: 45,
        marginBottom:20,
        backgroundColor: '#95afc0',
        paddingHorizontal: 10,
        width: 230,
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
    },

    errorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: -10
    },
    signintext: {
        marginBottom: 15
    }
});
