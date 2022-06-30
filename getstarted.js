import React from 'react'
import { View, Text, StyleSheet, Image, Button} from 'react-native'


const Getstarted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require('./assets/img.png')} style={styles.img} /> 
      </View>
      <View style={styles.container2}>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'yellow',fontSize:20}}>My</Text>
        <Text  style={{color:'#fff',fontSize:20}}>Shop</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center',width:'70%', marginTop:30}}>
        <Text style={{color:'#fff',fontSize:15}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
        <View style={{marginTop:25,alignItems:'center',justifyContent:'center'}}>
         <Button title='Get Started' color='#eecb1e' ></Button>
        </View>
      </View>
    </View>
  )
}

export default Getstarted

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#9179a2'
   },
   container1:{
     height:'75%',
     width:'100%',
   },
   container2:{
    height:"25%",
    width:"100%",
    backgroundColor:'#7d51ad',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    alignItems:'center'
  
},
img:{
   height:'100%',
   width:'100%',
   resizeMode:'cover'
}
})

 
