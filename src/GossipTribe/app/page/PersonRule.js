import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Picker} from 'react-native';

export default class PersonRule extends Component{

  render(){
    return(
        <View style={sceneStyle.container}>
          <Text style={sceneStyle.textStyle}>评比规则说明内容待提供</Text>
        </View>
    );
  }
}

const sceneStyle = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  textStyle:{
    textAlign:'center',
    fontSize:24
  },

});
