import React,{Component} from "react";
import {View, StyleSheet, Text, TouchableHighlight } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';



export default class AppTourPage extends Component{
  render(){
    return(
     <View style={styles.container}> 
     <View style={styles.backgroundview}>
        <Text style={styles.BgText}> Images/Illustrations</Text>
     </View>
        <Text style={styles.textView}>  App tour title</Text>
        <Text style={styles.subtext}> The app tour description goes here</Text>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('BottomTab')}>
        <View style ={styles.arrowView} >
        <View style ={styles.greenarrowView} >
            <Icon name="arrow-right" color='white' size ={40}></Icon>
        </View>
        </View>
        </TouchableHighlight>
        
     </View>
    )}}


    const styles = StyleSheet.create({
        container : {
          height :'100%',
          width :'100%',
          alignItems:"center",
          backgroundColor:'#ffffff',
        },
        BgText:{
          color :'black' ,
          fontWeight:"bold",
          alignItems:"center",
          justifyContent:"center",
          marginLeft:100,
          marginTop:200
        },
        textView :{
          fontSize :15,
          fontWeight:"bold",
          marginTop:10,
          color:'black',
          marginTop:60,
          
         
        },
        subtext :{
          fontSize :12,
          fontWeight:"bold",
          color:'lightgray',
          marginTop:10,
          marginBottom :20
          
        },
        
        
      
        backgroundview :{
          backgroundColor:'#e6e6e6',
          borderRadius:5,
          marginTop :10,
          marginLeft:1,
          marginRight:1,
          width :'95%',
          height :'70%',
          borderRadius:10
         
        },
        buttonView:{
          width:'70%',
          height :55,
          backgroundColor:'lightgreen',
          marginTop:20,
          borderRadius:8,
          alignItems:"center",
          justifyContent:"center",
          marginLeft:60,
          marginBottom:50
      
        },
        
      
        buttonText :{
          fontSize:15,
          fontWeight:'bold',
          color : "white"
        },
        arrowView:{
            width:'14%',
            height:55,
            borderWidth:1,
            borderColor:'lightgray',
            marginTop:10,
            marginLeft :5,
            marginRight:5,
            borderRadius:5,
            backgroundColor:'white'
          },
          greenarrowView:{
            width:'85%',
            height:'85%',
            borderColor:'lightgray',
            marginTop:4,
            marginBottom:4,
            marginLeft:4,
            marginRight:4,
            borderRadius:5,
            backgroundColor:'lightgreen'
          }
      })
      