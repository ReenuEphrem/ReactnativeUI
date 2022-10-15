import React,{Component} from "react";
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.welcometextView}>Hi {this.props.name} !! Please login to continue </Text>
            </View>
        )
    }
}

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            name:null
        }
    }
  //   componentDidMount(){
  //     console.log(this.props.route.params.username)
  // }
        Update(loginname){
           this.setState({name : loginname})
        }
        
    
  render(){
    return(
     <View style={styles.container}> 
          {/* <ImageBackground style ={styles.bgImage} source={require('../assets/bg1.jpg')}></ImageBackground>  */}
          <Image style ={styles.logo} source={require('../assets/logo.png')}></Image>
          <Text style ={styles.textView}>
           Welcome to GTec Global
           </Text>
          <FlexContent  name=''></FlexContent>
         {/*<FlexContent  name={this.props.route.params.loginname}></FlexContent> */}
          <TextInput style ={styles.inputView} placeholder="Username"placeholderColor="blue" maxLength={10} onChangeText={(loginname)=>this.Update(loginname)} >
          </TextInput>
          <TextInput style ={styles.inputView} placeholder="Password"  placeholderColor="blue" secureTextEntry={true}>
          </TextInput>
          <View style={{flexDirection:"row"}}>
          <TouchableHighlight style ={styles.buttonView} onPress={()=>this.props.navigation.navigate('Flexbox',{loginname : this.state.name})}>
            <Text style ={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style ={styles.buttonView} onPress={()=>this.props.navigation.navigate('Registration',{loginname : this.state.name})}>
            <Text style ={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          </View>
          <Text style ={styles.textView1}>
           {this.state.main_text}
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
  bgImage :{
    alignItems:"center",
    justifyContent:"center"
  },
  logo:{
    height :100,
    width :100,
    marginBottom:5
    
  },
  textView :{
    fontSize :20,
    fontWeight:"bold",
    marginTop:10,
    color:'#33ACFF'
    
  },
  welcometextView :{
    fontSize :12,
    fontWeight:"bold",
    marginTop:10
    
  },
  
  textView1 :{
    fontSize :10,
    fontWeight:"bold",
    marginTop:10
    
  },
  textView2 :{
    fontSize :20,
    fontWeight:"bold"
    
  },
  inputView:{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'#33ACFF',
    marginTop:20,
    paddingLeft:20
  },
  buttonView:{
    width:'40%',
    height :55,
    backgroundColor:'#33ACFF',
    marginTop:20,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:20,
    marginRight:10

  },
  buttonText :{
    fontSize:20,
    fontWeight:'bold',
    color : "white"
  }
})
