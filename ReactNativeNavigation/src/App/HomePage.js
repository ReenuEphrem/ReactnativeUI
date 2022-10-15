import React,{Component} from "react";
import {View, StyleSheet,Text, FlatList, ImageBackground } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class HomePage extends Component{


    render(){
      
        return(
        <View style={styles.container}> 
       <View style={{flexDirection:"row"}}>
       <Icon name="menu" style={styles.menu} onPress={()=>this.props.navigation.navigate('Drawer')} />
       <View style={styles.rectview}>
       <View style={{flexDirection:"row"}}> 
       <Icon name="circle" color="green"  />
       <Text style={{fontSize :10 ,color :"lightgreen" , marginLeft : 10}}>Classes</Text>
       </View>
       </View>
       </View>
       <View style={styles.divider}></View>
       <Text style={styles.subtext}>Good Morning</Text>
        <Text style={styles.textView}>Ivana</Text>
        <View style={styles.classview}>
          <Text style={styles.classtext}>Class</Text>
          <View style={{flexDirection:"row"}}> 
          <Text style={styles.classtext1}>Plus Two Science</Text>
          <Icon  name="expand-more" color="white" style={styles.dropdown}/>
         </View>
        </View>
        <FlatList contentContainerStyle ={{paddingright:1, marginTop:20,marginLeft :20 , maxHeight:30}}  horizontal={true} 
data={[
{key: 'Biology'},{key: 'Physics'},{key: 'Chemistry'},{key : 'Maths'},{key :'Computer'}
]}

renderItem={({item}) =>
<View style={styles.rectlistview}>
<View style={{flexDirection:"row"}}> 
<Icon name="circle" color="green"  />
<Text style={{fontSize :10 ,color :"black" , marginLeft : 5, marginRight :5}}  onPress={()=>this.props.navigation.navigate('Subject')}>{item.key}</Text>
</View>
</View>
}
/> 
<View >
<Text style={styles.courses}>Recent courses</Text>
</View>
<FlatList contentContainerStyle ={{paddingright:1,marginLeft :20 , maxHeight:500}}  horizontal={true}
data={[
{key: 'Course Title', Image : '../../assets/bg1.jpg'},{key: 'Couse Title1',key: 'Course Title2'},{key: 'Couse Title3'}
]}

renderItem={({item}) =>
<View style={styles.courselistview}>
<ImageBackground style ={styles.bgImage} source={require('../../assets/bg1.jpg')}>
<View style={{flexDirection:"row", marginTop :80 , marginLeft :10}}> 
<Icon name="play-arrow" color="white"/>
<Text style={{fontSize :10 ,color :"white" , marginLeft : 5, marginRight :5}}>{item.key}</Text>
</View></ImageBackground> 
         

</View>
}
/> 

<View style ={{flexDirection : "row",borderWidth :1, marginRight:10, borderColor :"white" , marginLeft :20, width :155, borderRadius:10, backgroundColor:"white", height :130, marginTop : 10}}>
  
{/* <View style ={{borderWidth :1, borderColor :"white" , marginLeft :20, width :160, borderRadius:10, backgroundColor:"white", height :130, marginTop : 10}}> */}
<ImageBackground style ={styles.bgImage1} source={require('../../assets/bg6.jpg')}>

  <Text style={{color :"white" , marginTop:20,marginLeft :10, fontSize : 10}}>Target Live Classes</Text>
  </ImageBackground>
  
{/* <View style ={{borderWidth :1, borderColor :"white" , marginLeft :20, width :150, borderRadius:10,backgroundColor :"white", height :130, marginTop : 10}}> */}
<ImageBackground style ={styles.bgImage1} source={require('../../assets/bg5.jpg')}>

<Text style={{color :"white", marginTop:20,marginLeft :10, fontSize : 10}}> Availed Live Classes</Text>
  </ImageBackground>
{/* </View> */}
</View>
</View>
        )
    }
}

const styles = StyleSheet.create({
   
      container : {
       flex :1,
      height :'100%',
      width :'100%',
      backgroundColor:'white'
    },
    
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginLeft :30,
      color:'black'
      
    },
    subtext :{
      fontSize :10,
      marginTop:40,
      marginLeft :30,
      color:'black'
      
    },
    divider :{
  
      height:1,
      marginTop:10,
      backgroundColor:"lightgray"
    },
    rectview:{
      width:'25%',
      height:30,
      borderWidth:1,
      borderColor:'lightgreen',
      marginTop:10,
      marginLeft :200,
      marginRight:5,
      borderRadius:5,
      paddingLeft :10,
      paddingRight:10,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:'white'
    },
    menu :{
      color:"lightgreen",
      fontSize :30,
      marginTop :10,
      marginLeft :10
    },
    classview:{
      width:'89%',
      height:"12%",
      borderWidth:1,
      marginTop:30  ,
      marginLeft :20,
      borderRadius:2,
      backgroundColor:'black'
    },
    classtext:{
      color:'gray',
      paddingLeft:10,
      paddingTop:10
    },
    classtext1:{
      color:'white',
      paddingLeft:10,
      marginTop:5,
      paddingBottom:10,
      fontSize:15
    },
    dropdown:{
      height:10,
      width:10,
      marginTop:10,
      marginLeft :170,
      backgroundColor:"black"
    },
    rectlistview:{
      marginRight :10,
      borderWidth:1,
      borderColor:'black',
      borderRadius:5,
      paddingLeft :5,
      paddingRight:5,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:'white'
    },
    courselistview:{
      marginRight :10,
      borderWidth:1,
      borderColor:'white',
      borderRadius:5,
      backgroundColor:'white',
      width :120,
      
    },
    courses :{
      color :"black",
      marginTop : 10,
      marginLeft : 20,
      marginBottom:10,
      fontSize:12
    }, 
    boxview :{
      marginTop:-200,
      fontSize :10,
      marginLeft :20

    },
    bgImage :{
      alignItems:"flex-start",
      justifyContent:"flex-start",
      borderRadius :10,
      height :100,
      width:120
    },
    bgImage1 :{
      alignItems:"center",
      justifyContent:"center",
   
      borderRadius :60, 
      marginRight :10,
      width : 150
    }
  })
  