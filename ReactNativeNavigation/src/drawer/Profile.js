import React,{Component} from "react";
import {View, Image, StyleSheet, Text, TouchableHighlight } from "react-native";
export default class Profile extends Component{
    render(){
        return(
         <View style={styles.container}> 
            <Text style ={styles.textView}>
               This is Profile Page
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
      backgroundColor:'#10c7ae'
    },
  
    menu :{
      marginTop:5,
      height:40,
        width:40,

    },
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginTop:10,
      color:'#33ACFF'
      
    },
    
  })
  