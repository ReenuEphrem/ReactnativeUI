import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, createMaterialBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstPage from './src/App/FirstPage';
import SecondPage from './src/App/SecondPage'
import StudentDetailsPage from './src/App/StudentDetailsPage'
import SchoolBoardPage from './src/App/SchoolBoardPage'
import AppTourPage from './src/App/AppTourPage'
import HomePage from './src/App/HomePage';
import ExamsPage from './src/App/ExamsPage';
import ProfilePage from './src/App/ProfilePage';
import ContactPage from './src/App/ContactPage';
import RecentPage from './src/App/RecentPage';
import DrawerContent from './src/App/DrawerContent';
import ExamsCorner  from './src/App/ExamsCorner';
import Subscriptions from './src/App/Subscriptions';
import Analytics from './src/App/Analytics';
import Logout from './src/App/Logout';
import Subject from './src/App/Subject';
 
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyStack(){
  
  return (
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{headerShown:false}}/>
        <Stack.Screen name="StudentDetailsPage" component={StudentDetailsPage} options={{headerShown:false}} />
        <Stack.Screen name="SchoolBoardPage" component={SchoolBoardPage} options={{headerShown:false}}/>
        <Stack.Screen name="AppTourPage" component={AppTourPage} options={{headerShown:false}}/>
        <Stack.Screen name="BottomTab" component={MyBottomTab} options={{headerShown:false}}/>
        <Stack.Screen 
         name="Drawer"
         component={MyDrawer} options={{headerShown:false}}/>
         <Stack.Screen name="Subject" component={Subject} options={{headerShown:false}}/>
      </Stack.Navigator>
   
  );
}

function MyBottomTab(){
  return(
    <BottomTab.Navigator 
    // tabbarOptions ={{
    //   showLabel :false,
    //   style :{
    //     position :'absolute',
    //     bottom: 25,
    //     left :20,
    //     right:20,
    //     elevation:0,
    //     borderradius :5,
    //     backgroundColor:"white",
    //     height:50
    //   }
    // }}
    
    screenOptions={{
      tabBarLabelStyle:{fontSize:10},
      tabBarItemStyle :{width:90},
      tabBarStyle:{backgroundColor:'#ffffff', elevation:5, borderColor:"white", marginLeft:10,marginRight:10, borderRadius:10,bottom:25,height:80}
    }}
  >
      <BottomTab.Screen name=" " options={{ tabBarLabelPosition:"beside-icon",
        tabBarActiveTintColor :'#369',
        tabBarInactiveTintColor :'gray',
        
        tabBarIcon:({focused})=>focused?<Icon name='home' size={20} color="lightgreen" elevation={10}/>:<Icon name='home' size={20} color='gray'/>}} 
         component={HomePage}
        ></BottomTab.Screen>
      <BottomTab.Screen name="Recent" options={{ tabBarLabelPosition:"beside-icon", 
        
        tabBarActiveTintColor :'#369',
        tabBarInactiveTintColor :'gray',
        tabBarIcon:({focused})=>focused? <Icon name='play-arrow' size={24} color="lightgreen" elevation={10}/>:<Icon name='play-arrow' size={24} color='gray'/>}} 
         component={RecentPage}
        ></BottomTab.Screen>
        <BottomTab.Screen name="Exams" options={{tabBarLabelPosition:"beside-icon",
        tabBarActiveTintColor :'#369',
        tabBarInactiveTintColor :'gray',
        tabBarIcon:({focused})=>focused?<Icon name='subject' size={20} color="lightgreen"/>:<Icon name='subject' size={20} color='gray'/>}} 
         component={ExamsPage}
        ></BottomTab.Screen>
        <BottomTab.Screen name="  " options={{tabBarLabelPosition:"beside-icon",
        tabBarActiveTintColor :'#369',
        tabBarInactiveTintColor :'gray',
        tabBarIcon:({focused})=>focused?<Icon name='person'size={20} color="lightgreen"/>:<Icon name='person' size={20} color='gray'/>}} 
         component={ProfilePage}
        ></BottomTab.Screen>
         <BottomTab.Screen name="Contact" options={{ tabBarLabelPosition:"beside-icon",
        tabBarActiveTintColor :'#369', 
        tabBarInactiveTintColor :'gray',
        tabBarIcon:({focused})=>focused?<Icon name='mail' size={20} color="lightgreen"/>:<Icon name='mail' size={20} color='gray'/>}} 
         component={ProfilePage}
        ></BottomTab.Screen>
    </BottomTab.Navigator>
  )

        }
  function MyDrawer(){
    return(
      <Drawer.Navigator drawerContent={(props)=><DrawerContent {...props}/>}>
        <Drawer.Screen 
           name=' ' 
           component={ExamsCorner} 
          />
        <Drawer.Screen  
           name='Analytics'
           component={Analytics} 
           />
            
          <Drawer.Screen  
           name='Subscriptions'
           component={Subscriptions} 
          />
           <Drawer.Screen  
           name='Logout'
           component={Logout} 
          />
      </Drawer.Navigator>
    )
  }
  
  
 
export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )}


  // https://fonts.google.com/icons?selected=Material+Icons&icon.query=list&icon.style=Rounded
  