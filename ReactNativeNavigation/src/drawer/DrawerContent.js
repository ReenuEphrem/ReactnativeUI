import React ,{Component} from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import Divider from "react-native-divider";
export default class DrawerContent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profile}>
                    <View >
                   
                        <Image style={styles.profileicon} source={require("../../assets/crown.png")}></Image>
                      <View  style={styles.invitebox}>
                      <Text style={styles.invitetext}>Invite</Text>
                        </View>
                    </View>
                    <View style={styles.infoview}>
                        <Text style={styles.name}>Favas</Text>
                        <View style={styles.box}>
                        <Text style={styles.subtext}>Gold</Text>
                        </View>
                        <Text style={styles.textview}>Total Coin</Text>
                        <Text style={styles.textview1}>coin : 200000</Text>
                    </View>
                </View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Wallet')}>Wallet Balance</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Records')}>Records</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Refund')}>Refund and policies</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('AboutUs')}>About Us</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Help')}>Help</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.logout}>Logout</Text>
                    
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:'white'
    },
    menu :{
        fontSize:15,
        marginTop :10,
        marginLeft:10,
        color:'black',

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
        height:'30%',
        width :'100%',
        alignItems:'flex-start',
        backgroundColor:'black'
        
      },
      profileicon:{
        height:40,
        width:50,
        backgroundColor:'black',
        marginTop :30,
        marginLeft:10
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
        marginLeft :10,
        backgroundColor:"lightgray"
      }


}

)
