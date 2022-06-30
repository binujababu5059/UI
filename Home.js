import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';


const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.section1}>
           <Icon name='bell'size={26} style={{position:'absolute',color:'white',bottom:10,right:20}}></Icon>
           <Text style={styles.text1}>My</Text>
           <Text style={styles.text2}>Shop</Text>
        </View>
        <View style={styles.section2}>
        </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    section1:{
        height:'15%',
        width:'100%',
        backgroundColor:'#7d51ad',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'

    },
    section2:{
        height:'85%',
        width:'100%',
        backgroundColor:'#fff'
    },
    text1:{
       color:'yellow'
    },
    text2:{
        color:'#fff'
    }
})