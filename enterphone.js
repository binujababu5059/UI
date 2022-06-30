import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Pressable} from 'react-native'
import PhoneInput from 'react-native-phone-number-input';


export default function Enterphone() {

  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
     <View style={styles.container1}>
        <Text style={styles.text}>What Is Your Phone</Text>
     </View>
     <View style={styles.container2}>
      <Text style={styles.text1}>Please enter your phone number to verify your account</Text>
     </View>
     <View style={styles.container3}>
     <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
      <Pressable style={styles.button} >
        <Text style={styles.continueText}>Send Verification Code</Text>
      </Pressable>
     </View>
     <View style={styles.container3}>
      <Text style={{fontWeight:'bold'}}>Skip</Text>
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
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:18,
    color:"#fff",
    fontWeight:'bold'
  },
  container2:{
    marginTop:30,
    alignItems:'center',
    justifyContent:'center'
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
  button: {
    marginTop: 30,
    width: '75%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  container3:{
    marginTop:30,
    alignItems:'center',
    justifyContent:'center'
  }
})