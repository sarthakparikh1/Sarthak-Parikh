import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Login from './Screens/Login'

const App = () => {
  return (
    <View style={Style.rootScreen}>
      <Login></Login>
    </View>
  )
}

export default App

const Style = StyleSheet.create({
  rootScreen:{
    flex:1,
margin:5,
padding:8,
backgroundColor:'#1ffb',
  }
}) 