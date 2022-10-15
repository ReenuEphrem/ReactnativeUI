import React, { Component } from 'react';
import { AppRegistry, FlatList,
StyleSheet, Text, View,Alert } from 'react-native';
export default class FlatListDemo extends Component {
renderHeader= () => {
var header= (
<View style ={styles.header_footer_style}>
<Text style ={styles.textStyle}> Courses Offered By Edubca </Text>
</View>
);
return header;
};
renderSeparator = () => {
return (
<View
style={{
height: 1,
width: "100%",
backgroundColor: "#000",
}}
/>
);
};
//handling item Press event
getListViewItem = (item) => {
Alert.alert('Clicked Item : ' + item.key);
}
render() {
return (
<View style={styles.container}>
<FlatList
data={[
{key: 'React Native'},{key: 'Java'}, {key: 'Hadoop'},{key: 'Spark'},
{key: 'AWS'},{key: 'Azure'},{key: 'Phython'},
{key: 'Python'},{key: 'Javascript'}, {key: 'C++'},
{key: 'Data Science'},{key: 'Machine Learning'},{key: 'MYSQL'},
{key: 'Hive'}
]}
renderItem={({item}) =>
<Text style={styles.item}
onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
ItemSeparatorComponent={this.renderSeparator}
ListHeaderComponent={this.renderHeader}
/>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
},
item: {
padding: 10,
fontSize: 18,
height: 44,
},
})
AppRegistry.registerComponent('ReactFlatListDemo',()=>FlatListDemo);
