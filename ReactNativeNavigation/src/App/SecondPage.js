import React,{Component} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class SecondPage extends Component{
  render(){
    return(
     <View style={styles.container}> 
          <ImageBackground style ={styles.bgImage} source={require('../../assets/bg2.jpg')}></ImageBackground> 
         <Text style ={styles.textView}>
           Verification Code
           </Text>
           <Text style ={styles.subtext}>
           Please type the verification code send
           </Text>

           <Text style ={styles.numview}>
          +91 9087654321
           </Text>
         <View style={styles.backgroundview}>
          
          <View style={{flexDirection:"row"}}>
            <TextInput style ={styles.inputmobcodeView}  >
            </TextInput>
            <TextInput style ={styles.inputmobcodeView}  >
            </TextInput>
            <TextInput style ={styles.inputmobcodeView} >
            </TextInput>
            <TextInput style ={styles.inputmobcodeView} >
            </TextInput>
            <TextInput style ={styles.inputmobcodeView}>
            </TextInput>
            <TextInput style ={styles.inputmobcodeView}  >
            </TextInput>
            
          </View>
          <TouchableHighlight style ={styles.buttonView} onPress={()=>this.props.navigation.navigate('StudentDetailsPage')}>
            <Text style ={styles.buttonText}>Resend OTP</Text>
          </TouchableHighlight>
          
          <Text style={styles.resend}>Resend after 28s</Text>
          <View style={{flexDirection:"row"}}>
            <Icon style={styles.icon} name='call' color='green'></Icon>
          <Text style={styles.contact}>Contact Us</Text>
          </View>
          </View>
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
    backgroundColor:'#ffffff',
    
   
  },
 
  bgImage :{
    alignItems:"center",
    justifyContent:"center"
  },
  logo:{
    height :50,
    width :50,
    marginBottom:5,
    marginTop:100
  },
  textView :{
    fontSize :20,
    fontWeight:"bold",
    marginTop:10,
    color:'black',
    marginTop:400
  },
  subtext :{
    fontSize :15,
    fontWeight:"bold",
    color:'lightgray',
    marginBottom :20
    
  },
  numview:{
    marginTop:10,
    color:'black',
    marginBottom:20
  },
  
  inputmobcodeView:{
    width:'14%',
    height:55,
    borderWidth:1,
    borderColor:'#4d4d4d',
    marginTop:40,
    marginLeft :5,
    marginRight:5,
    borderRadius:5,
    backgroundColor:'#4d4d4d'
  },
 

  backgroundview :{
    backgroundColor:'black',
    borderRadius:5,
    width :'100%',
    height:350
   
  },
  resend:{
    color:'gray',
    marginTop :1,
    marginLeft:120
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
    marginBottom:10

  },
  contact:{
    color :'green',
    marginTop:20,
    marginBottom:10,
    marginLeft:10
  },
  icon:{
    color :'green',
    marginTop:25,
    marginBottom:10,
    marginLeft:120
  },
  buttonText :{
    fontSize:15,
    fontWeight:'bold',
    color : "white"
  }
})
