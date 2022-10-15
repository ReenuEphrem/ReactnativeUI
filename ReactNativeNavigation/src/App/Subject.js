import React,{Component} from "react";
import {View, StyleSheet,FlatList, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Subject extends Component{
  render(){
    return(
     
            <View style={styles.container}> 
              <View style={styles.backgroundview}>
                <View style={{borderWidth :1,borderColor :"white", width : 30, height :30 , marginTop :30, marginLeft :20}}>
                <Icon name = "arrow-left" color="lightgreen" size={25} style = {{padding:2}}></Icon>
                </View>
                <Text style={styles.TextView}>Biology</Text>
                <View style={{flexDirection:"row"}}>
                    <Image style ={{height:10, width :10, marginTop:10, marginLeft:20}} source={require('../../assets/radio_button.png')}></Image>
                    <Text style={styles.SubTextView}>12 Chapters</Text>
                    <Image style ={{height:10, width :10, marginTop:10, marginLeft:20}} source={require('../../assets/radio_button.png')}></Image>
                    <Text style={styles.SubTextView}>124 hours</Text>
                </View>
                </View>
                <FlatList contentContainerStyle ={{paddingright:1,marginLeft :20 , borderRadius:10 , padding :10, marginTop : 0}}   
data={[
{Chapter: 'Inheritance' , ID : "Chapter 1", Parts :"2 parts"},{Chapter: 'Inheritance', ID : "Chapter 2", Parts :"3 parts"},{Chapter: 'Inheritance', ID : "Chapter 3", Parts :"2 parts"},{Chapter : 'Inheritance', ID : "Chapter 4", Parts :"2 parts"},{Chapter :'Inheritance', ID : "Chapter 5", Parts :"2 parts"}
]}

renderItem={({item}) =>
<View style={styles.rectlistview}>
<View style={{flexDirection:"row"}}> 
<Text style={{fontSize :10 ,color :"black" , marginLeft : 5, marginRight :5, marginTop :20}} >{item.Chapter}</Text>
<View style={{flexDirection:"row", marginTop :10}}>
                    <Image style ={{height:10, width :10, marginTop:35, marginLeft:-50}} source={require('../../assets/radiobutton.png')}></Image>
                    <Text style={styles.listTextView}>{item.ID}</Text>
                    <Image style ={{height:10, width :10, marginTop:32, marginLeft:20}} source={require('../../assets/radiobutton.png')}></Image>
                    <Text style={styles.listTextView}>{item.Parts}</Text>
</View>
</View>
</View>
}
/> 
                
                
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
        
        backgroundview :{
            backgroundColor:'black',
            borderRadius:5,
            width :'100%',
            height :"30%"
           
          },
          TextView :{
            fontWeight:"bold",
            fontSize :20,
            color :"white",
            marginLeft :20,
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
          }
      })
      