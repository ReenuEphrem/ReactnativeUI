import React,{Component} from "react";
import {View, StyleSheet, Image,Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";
export default class Home extends Component{
  
  
    render(){
        
        return(
        <View style={styles.container}> 
       <View style={{flexDirection:"row"}}>
       <Icon name="menu" color="Lightgreen" onPress={() => this.props.navigation.openDrawer()} />
       <View style={styles.rectview}></View>
       <View style={{flexDirection:"row"}}>
       <Icon name="circle" color="Lightgreen"/>
       <Text style={{fontSize :10 ,color :"lightgreen" }}>Classes</Text>
       </View>
          </View>
         <Text style ={styles.textView}>
               This is Home Page
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
    
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginTop:10,
      color:'#33ACFF'
      
    },
    rectview:{
      width:'30%',
      height:55,
      borderWidth:1,
      borderColor:'lightgreen',
      marginTop:10,
      marginLeft :50,
      marginRight:5,
      borderRadius:5,
      backgroundColor:'white'
    },
  })
  