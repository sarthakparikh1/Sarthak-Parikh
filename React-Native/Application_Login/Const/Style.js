import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#1ffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    margin: 5,
    padding: 8,
    fontSize: 16,
    borderColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
  },
  innerView:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width:"100%",
    flexDirection:'column',
    padding:34,
    margin:24
  },
  labelText:{
    fontSize:20,
    
  },
  buttonStyle:{
    width:'100%',
   alignItems:'center',
   marginTop:8
  },
  bittonText:{
    fontSize:22
  }
});
