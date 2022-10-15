import React,{Component} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";



export default class FirstPage extends Component{
  render(){
    return(
     <View style={styles.container}> 
          <ImageBackground style= {styles.bgImage} source={require('../../assets/bg7.jpg')}>
         <Text style ={styles.textView}>
           Enter your mobile number
           </Text>
           <Text style ={styles.subtext}>
           We will sent you OTP to verify.
           </Text>
         <View style={styles.backgroundview}>
          <View style={{flexDirection:"row"}}>
            <TextInput style ={styles.inputmobcodeView} placeholder="+91" placeholderColor="white" >
            </TextInput>
            <TextInput style ={styles.inputmobView} placeholder="Mobile Number"placeholderColor="gray" keyboardType="numeric">
            </TextInput>
          </View>
          <TouchableHighlight style ={styles.buttonView} onPress={()=>this.props.navigation.navigate('SecondPage')}>
            <Text style ={styles.buttonText} >Continue</Text>
          </TouchableHighlight>
          </View>
          </ImageBackground>
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
    justifyContent:"center",
    width : "100%"
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
    marginTop:430
  },
  subtext :{
    fontSize :15,
    fontWeight:"bold",
    color:'lightgray',
    marginBottom :20
    
  },
  
  inputmobcodeView:{
    width:'20%',
    height:55,
    borderWidth:1,
    borderColor:'#4d4d4d',
    marginTop:40,
    paddingLeft:20,
    marginLeft :20,
    marginRight:10,
    borderRadius:5,
    backgroundColor:'#4d4d4d'
  },
  inputmobView:{
    width:'68%',
    height:55,
    borderWidth:1,
    borderColor:'#4d4d4d',
    marginTop:40,
    marginRight:20,
    paddingLeft:20,
    borderRadius:5,
    backgroundColor:'#4d4d4d'
  },

  backgroundview :{
    backgroundColor:'black',
    borderRadius:5,
    width :'100%',
   
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
  }
})
