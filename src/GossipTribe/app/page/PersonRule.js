import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class PersonRule extends Component{

  _goBack(){
    let _navigator = this.props._navigator;
    if(_navigator&&_navigator.getCurrentRoutes().length>1){
          _navigator.pop();
    }
  }
  render(){
    return(
      <View style={{flexDirection:'column',
                    justifyContent:'flex-start',
                    flex:1}}>
                    <View style={{flexDirection:'row',
                                  justifyContent:'center',
                                  alignItems:'center',
                                  backgroundColor:'#FFC125',
                                  height:40,
                                  padding:10,
                                }}>
                    <TouchableOpacity onPress={this._goBack.bind(this)}
                                      style={{position:'absolute',
                                              top:10,
                                              left:10}}>
                    <Image source={require('../../res/image/back.png')}
                            style={{width:10,height:20,}}/>
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',
                                  fontSize:20,}}>{this.props.name}</Text>
                    </View>
                    <View style={sceneStyle.container}>
                      <Text style={sceneStyle.textStyle}>评比规则说明内容待提供</Text>
                    </View>
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
