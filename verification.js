import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Pressable} from 'react-native'
import {OTP} from 'react-native-otp-form';


export default function Verification() {

  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
     <View style={styles.container1}>
        <Text style={styles.text}>Verification</Text>
     </View>
     <View style={styles.container2}>
      <Text style={styles.text1}>Please enter Code send to</Text>
      <View style={styles.container4}>
        <View>
      <Text style={styles.text2}>+325845123156</Text>
      </View>
      <View style={{marginLeft:100,marginTop:10}}>
      <Text style={styles.text3}>Change Phone Number</Text>
      </View>
      </View>
     </View>
     <View style={styles.container3}>
     <OTP
        codeCount={6}
        containerStyle={{marginTop: 50}}
        otpStyles={{backgroundColor: '#eee'}}/>
     </View>
     <View style={styles.container3}>
     <Pressable style={styles.button} >
        <Text  style={styles.text2}>Continue</Text>
      </Pressable>
      </View>
     <View style={styles.container3}>
      <Text style={{fontWeight:'bold'}}>Resend Code</Text>
     </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  container1:{
    height:'25%',
    width:'100%',
    backgroundColor:'#7d51ad',
    borderBottomRightRadius:200,
    justifyContent:'center'
  },
  text:{
    fontSize:20,
    color:"#fff",
    fontWeight:'bold',
    marginLeft:20
  },
  container2:{
    marginTop:30,
    marginLeft:20,
    
    
  },
  text1:{
    color:'#000'
  },
  phoneContainer:{
    width: '75%',
    height: 50
  },
  textInput: {
    paddingVertical: 0
  },
  container3:{
    marginTop:15,
    alignItems:'center',
    justifyContent:'center'
  },
  text2:{
    color:'#000',
    fontWeight:'bold',
    fontSize:15
  },
  container4:{
    marginTop:10,
    marginLeft:20,
    flexDirection:'row',
    
  },
  text3:{
    fontSize:10,
    textDecorationLine: 'underline',
    color:'#000'
  },
  button: {
    marginTop: 30,
    width: '75%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  }
})