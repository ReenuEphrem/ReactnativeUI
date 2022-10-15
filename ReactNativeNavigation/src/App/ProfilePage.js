import React,{Component} from "react";
import {View, StyleSheet,ScrollView, Image, Text } from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ProfilePage extends Component{
  render(){
    return(
     
            <View style={styles.container}> 
              <View style={styles.backgroundview}>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.TextView}>Profile</Text>
                
                <Icon name="notifications" color="white" size={15} style={{marginTop: 50, marginLeft:90}}></Icon>
                <View style={{borderWidth :1,borderColor :"white", width : 22, height :22 , marginTop :45, marginLeft :10}}>
                <Icon name = "menu" color="lightgreen" size={12} style = {{padding:4}}></Icon>
                </View>
                </View>
                </View>
                <ScrollView>
                <View style={{borderWidth:1, borderRadius:10, borderColor:"lightgray", width:"90%", elevation:0, marginTop:10, marginLeft:20,marginRight:20 ,color:"white"}}>
               
                      <View style={{flexDirection :"row"}}>
                        <Image style={styles.profileicon} source={require("../../assets/profile.jpg")}></Image>
                        <View style={{flexDirection :"column"}}>
                        <Text style ={{color :"black" , marginLeft :25 , marginTop : 40}}> Ivana</Text>
                        <Text style ={{color :"black" , marginLeft : 28}}>ID : 123</Text>
                        </View>
                       </View>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20}}> Personal Info</Text>
                       <View style={styles.divider1}></View>
                       <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Account Settings</Text>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Ivana</Text>
                     </View>
                       <View style={styles.divider}></View>
                       <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Email</Text>
                      <Text style ={{color :"black" , marginLeft :71 , marginTop : 20, fontSize:10}}> Ivana@gmail.com</Text>
                     </View>
                     <View style={styles.divider}></View>
                     <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Number</Text>
                       <Text style ={{color :"black" , marginLeft :61 , marginTop : 20, fontSize:10}}> 901233445798</Text>
                     </View>
                     <View style={styles.divider}></View>
                     <Text style ={{color :"black" , marginLeft :20 , marginTop : 20}}> Course Info</Text>
                       <View style={styles.divider1}></View>
                       <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Center</Text>
                       <Text style ={{color :"black" , marginLeft :71 , marginTop : 20, fontSize:10}}> Trivandrum</Text>
                     </View>
                       <View style={styles.divider}></View>
                       <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Course</Text>
                       <Text style ={{color :"black" , marginLeft :71 , marginTop : 20, fontSize:10}}> Plus Two Science</Text>
                     </View>
                       <View style={styles.divider}></View>
                       <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Payment Status</Text>
                       <Text style ={{color :"black" , marginLeft :30 , marginTop : 20, fontSize:10}}> Free</Text>
                     </View>
                       <View style={styles.divider}></View>
                       <View style={{flexDirection :"row"}}>
                       <Text style ={{color :"black" , marginLeft :20 , marginTop : 20, fontSize:10}}> Expiry Date</Text>
                       <Text style ={{color :"black" , marginLeft :51 , marginTop : 20, fontSize:10}}> NA</Text>
                     </View>
                       
                       
                  </View>
                 
                  <View style={{borderWidth:1, borderRadius:5, backgroundColor :"lightgreen", margin:15, borderColor:"lightgreen",width:"90%", height:20}}>
                        <Icon name="payments" color="white" style={{margin:20}}></Icon>
                        <Text>Custom Payment</Text>
                       </View>
                
                  </ScrollView>    
                      
           </View>
       
  

 ) }
    }
    
    const styles = StyleSheet.create({
       
          container : {
           flex :1,
          height :'100%',
          width :'100%',
          backgroundColor:'white'
        },
        profileicon:{
          height:70,
          width:70,
          borderRadius:40,
          backgroundColor:'white',
          borderColor:'lightgreen',
          borderWidth:2,
          marginTop :25,
          marginLeft:30
        },
        backgroundview :{
            backgroundColor:'black',
            borderRadius:5,
            width :'100%',
            height :"30%"
           
          },
          TextView :{
            fontSize :15,
            color :"white",
          marginLeft : 160,
            marginTop : 50
          },
          SubTextView :{
            fontWeight:"bold",
            fontSize :10,
            color :"white",
            marginLeft :10,
            marginTop : 9
          },
          listTextView :{
            fontSize :10,
            color :"black",
            marginLeft :10,
            marginTop : 32
          },
          rectlistview:{
            marginRight :10,
            borderWidth:1,
            borderColor:'lightgray',
            borderRadius:5,
            paddingLeft :5,
            paddingRight:5,
            paddingTop:5,
            paddingBottom:5,
            backgroundColor:'white',
            marginBottom :10,
            elevation :10,
            height: 100
          }, 
          divider :{
  
            height:1,
            marginTop:10,
            marginLeft :20,
            backgroundColor:"lightgray"
          },
          divider1 :{
  
            height:1,
            marginTop:10,
            marginLeft :0,
            backgroundColor:"lightgray"
          },
      })
      