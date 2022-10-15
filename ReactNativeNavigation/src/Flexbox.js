import React,{cloneElement, Component} from "react";
import{View,StyleSheet,Text,    Image, TouchableHighlight
} from "react-native";
class FlexContent extends Component{
    render(){
        return(
            <View style={styles.textView}>
                <Text> My name is {this.props.name}</Text>
            </View>
        )
    }
}
export default class Flexbox extends Component{
   
    constructor(){
        super();
        this.state={
            main_text :'Hello',
            sub_text :'Ligin'
        }
    }
    componentDidMount(){
        console.log(this.props.route.params.loginname)
    }
    updateText(){
        this.setState({main_text:'Hi'})
    }
    render(){
        return(
            
<View style={styles.container}>

      
<Text style={styles.textView}>{this.state.main_text}</Text>
<FlexContent name={this.props.route.params.loginname}></FlexContent>
<View style={{flexDirection:"row"}}>
<TouchableHighlight style={styles.buttonView} onPress={()=>this.props.navigation.navigate('Tab')} underlayColor='grey'>
<Text style={styles.buttonText}>Tab</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.buttonView} onPress={()=>this.props.navigation.navigate('BottomTab')} underlayColor='grey'>
<Text style={styles.buttonText}>BottomTab</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.buttonView} onPress={()=>this.props.navigation.navigate('Drawer')} underlayColor='grey'>
<Text style={styles.buttonText}>Drawer</Text>
</TouchableHighlight>
</View>
</View>
        )
    }


}
const styles=StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:'white',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        
    },
    
    textView :{
        fontSize:20,
        color: "#33ACFF",
        padding : 5,
        marginBottom:10,
        
    },
    buttonView:{
        width :'25%',
        backgroundColor :'#369',
        alignContent:"center",
        justifyContent:"center",
        borderRadius:10,
        alignItems:"center",
        marginLeft:20,
        marginRight:10
    },
    buttonText :{
        fontSize:20, 
        fontWeight:'bold',
        color : "white",
        padding:10,
      },
      
    
})