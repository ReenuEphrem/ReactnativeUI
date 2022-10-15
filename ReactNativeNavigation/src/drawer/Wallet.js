import React,{Component} from "react";
import {View, StyleSheet, Image,Text, TouchableHighlight } from "react-native";
export default class Wallet extends Component{
  
    render(){
        return(
        <View style={styles.container}> 
            <Text style ={styles.textView}>
               This is Wallet Page
               </Text>
               </View>
        )
    }
}
const styles = StyleSheet.create({
    
      container : {
      height :'100%',
      width :'100%',
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#ffffff'
    },
    
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginTop:10,
      color:'#10c7ae'
      
    }
  })
  