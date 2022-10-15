import React ,{Component} from "react";
import {View,Text,TextInput,StyleSheet,Image} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class DrawerContent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profile}>
                    <View >
                    <View style={styles.squareView}>
                        <Icon name="close" style={styles.close} ></Icon>
                    </View>
                    <View style={{flexDirection :"row"}}>
                        <Image style={styles.profileicon} source={require("../../assets/profile.jpg")}></Image>
                        <View style={{flexDirection :"column"}}>
                        <Text style ={{color :"white" , marginLeft :25 , marginTop : 40}}> Ivana</Text>
                        <Text style ={{color :"white" , marginLeft : 28}}>ID : 123</Text>
                        </View>
                        <Icon name="arrow-right" style={{color :"lightgreen", marginTop:50,marginLeft : 40 , fontSize : 30}} ></Icon>
                     </View>
                    </View>
                   
                </View>
                <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                
               </View>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('ExamsCorner')}>Exam Corner</Text>
                </View>
                
                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                </View>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Subscriptions')}>Subscriptions</Text>
                    
                </View>

                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                </View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Analytics')}>Analytics</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                </View>
                    <Text style={styles.menu}>Downloads</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                </View>
                    <Text style={styles.menu}>Notifications</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                </View>
                    <Text style={styles.menu}>Referrals</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputmobcodeView}  >
                </View>
                    <Text style={styles.menu}>Share app</Text>
                    </View>
                    
                    <View style={styles.divider}></View>
                    <View style={{flexDirection :"row"}}>
                <View style ={styles.inputlogoutView}  >
                </View>
                    <Text style={styles.logoutmenu}>Logout</Text>
                    </View>

                    <View style={{flexDirection :"row"}}>
                <View style ={styles.enquire}  >
                <Text style={{color : "lightgreen" , marginLeft :20, marginTop : 5, marginRight :5}}>Enquire now</Text>
                </View>
                  
                    </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:'black'
    },
    menu :{
        fontSize:12,
        marginTop :15,
        marginLeft:20,
        marginBottom:15,
        color:'white',

    },
    logoutmenu :{
        fontSize:12,
        marginTop :15,
        marginLeft:20,
        marginBottom:15,
        color:'red',

    },
    info :{
        fontSize:15,
        marginTop :5,
        marginLeft:10,
        color:'#33ACFF',
        fontWeight:'bold'
    },
    name :{
        fontSize:15,
        marginTop :20,
        marginLeft:140,
        color:'white',
        fontWeight:'bold'
    },
    
    subtext :{
        color:'white',
        marginLeft:15,
        justifyContent:"center",
        alignItems:"center",
       
    },
    box:{
        borderStyle:"solid",
        backgroundColor:'gray',
        borderColor:'lightgray',
        borderRadius:5,
        marginLeft:130
    },
    invitebox:{
        borderStyle:"solid",
        backgroundColor:'white',
        borderStyle:"solid",
        borderRadius:5,
        marginTop:80,
        marginLeft :10,
        borderWidth:1,
        width:60,
        borderColor:'lightgray'
    },
    invitetext :{
        color:'black',
        marginLeft :10,
        width:"100%",
       
    },
    textview :{
        fontSize:15,
        marginTop : 80,
        marginLeft:120,
        color:'white'
        
       
    },
    textview1 :{
        fontSize:15,
        marginTop : 5,
        marginLeft:100,
        color:'white'
        
       
    },
   
    profile :{
        flexDirection: 'row',
        color:'#33ACFF',
        height:'25%',
        width :'100%',
        alignItems:'flex-start',
        backgroundColor:'black'
        
      },
      inputmobcodeView:{
        width:25,
        height:20,
        borderWidth:1,
        borderColor:'lightgreen',
        marginTop:15,
        marginLeft :20,
        borderRadius:5,
        backgroundColor:'black'
      },
      inputlogoutView:{
        width:25,
        height:20,
        borderWidth:1,
        borderColor:'red',
        marginTop:15,
        marginLeft :20,
        borderRadius:5,
        backgroundColor:'black'
      },
      squareView:{
        width:25,
        height:25,
        borderWidth:1,
        borderColor:'white',
        marginTop:30,
        marginLeft :30,
        marginRight :30,
        borderRadius:5,
        backgroundColor:'black'
      },
      close :{
        marginLeft:1,
        color:"lightgreen",
        fontSize : 20,
        
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
      infoview:{
        marginLeft:10
      },
    
      nameText:{
        color :'black'
      }, 
      logout:{
        fontSize:15,
        marginTop :130,
        marginLeft:120,
        color:'black',
        alignItems:"center",
        justifyContent:"center"
      },
      divider :{
  
        height:1,
        marginTop:10,
        marginLeft :20,
        backgroundColor:"lightgray"
      },
      enquire:{
        width:120,
        height:30,
        borderWidth:1,
        borderColor:'lightgreen',
        marginTop:30,
        marginLeft :80,
        marginBottom:10,
        borderRadius:5,
        backgroundColor:'black'
      }


}

)
