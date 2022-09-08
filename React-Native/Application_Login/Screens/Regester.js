import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Styles} from '../Const/Style';

const Regester = () => {
  return (
    <View style={Styles.mainView}>
    <View style={Styles.innerView}>
      <Text style={Styles.labelText}>User Name :</Text>
      <TextInput
        style={Styles.textInput}
        value={userName}
        onChangeText={text => {
          SetUserName(text);
        }}
      />
      <Text style={Styles.labelText}>Password :</Text>
      <TextInput
        style={Styles.textInput}
        value={userPassword}
        secureTextEntry={true}
        onChangeText={text => {
          SetUserPassword(text);
        }}
      />

      {/* Forgot Password */}
      <TouchableOpacity
        style={{alignContent: 'stretch'}}
        onPress={() => {
          // Redirect to Forgotpassword Page
        }}>
        <Text style={{fontSize: 12}}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}

      <TouchableOpacity
        style={Styles.buttonStyle}
        onPress={() => {
          console.log(userName);
        }}>
        <Text style={Styles.bittonText}>Login</Text>
      </TouchableOpacity>
    </View>
    {/* Regester Account  */}

    <Text >
      Dont Have an Account?{' '}
      <TouchableOpacity
        onPress={() => {
          console.log(userName);
        }}>
        <Text style={{ color: '#121fff'}}>Regester Now</Text>
      </TouchableOpacity>
    </Text>
  </View>
  )
}

export default Regester