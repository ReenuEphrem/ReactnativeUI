import React,{Component} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";



export default class StudentDetailsPage extends Component{
  render(){
    return(
     <View style={styles.container}> 
          <ImageBackground style ={styles.bgImage} source={require('../../assets/bg2.jpg')}></ImageBackground> 
         <Text style ={styles.textView}>
           Student Details
           </Text>
           
         <View style={styles.backgroundview}>
         <TextInput style ={styles.inputcolorView} placeholder="Full name"placeholderColor="gray" >
          </TextInput>
          <TextInput style ={styles.inputView} placeholder="Email"placeholderColor="gray" keyboardType="email-address">
          </TextInput>
          <View style={{flexDirection:"row"}}>
          <TextInput style ={styles.inputView} placeholder="Select state"placeholderColor="gray" >
          
          </TextInput>
          <Icon  name="expand-more" color="white" style={styles.dropdown}/>
          </View>
          <TextInput style ={styles.inputView} placeholder="Pincode"placeholderColor="gray" keyboardType="email-address">
         </TextInput>
          <TouchableHighlight style ={styles.buttonView} onPress={()=>this.props.navigation.navigate('SchoolBoardPage')}>
            <Text style ={styles.buttonText} >Register</Text>
          </TouchableHighlight>
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
  inputView:{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'#4d4d4d',
    marginTop:15,
    marginLeft : 35,
    backgroundColor:'#4d4d4d',
    borderRadius:5
  },
  stateView:{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'gray',
    marginTop:15,
    marginLeft : 35,
    marginRight:50,
    backgroundColor:'#4d4d4d',
    borderRadius:5
  },
  textView :{
    fontSize :20,
    fontWeight:"bold",
    marginTop:10,
    color:'black',
    marginTop:300,
    marginBottom:20
   
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
    borderColor:'gray',
    marginTop:40,
    paddingLeft:20,
    marginLeft :20,
    marginRight:10,
    borderRadius:5,
    backgroundColor:'gray'
  },
  inputmobView:{
    width:'68%',
    height:55,
    borderWidth:1,
    borderColor:'gray',
    marginTop:40,
    marginRight:20,
    paddingLeft:20,
    borderRadius:5,
    backgroundColor:'gray'
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
  dropdown:{
    height:10,
    width:10,
    marginLeft:-20,
    marginTop:40,
  },
  inputcolorView:{
    width:'80%',
    height:55,
    borderWidth:2,
    borderColor:'green',
    marginTop:15,
    marginLeft : 35,
    backgroundColor:'#4d4d4d',
    borderRadius:5
  },
  buttonText :{
    fontSize:15,
    fontWeight:'bold',
    color : "white"
  }
})
