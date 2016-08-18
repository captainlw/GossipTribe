import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,TextInput,Picker} from 'react-native';

import CityPicker from './CityPicker';

export default class SelectAddress extends Component{


  _cancle(){


  }

  _save(){


  }

  render(){
    return(
        <View style={{flexDirection:'column',
                      justifyContent:'flex-start',
                      flex:1,
                      backgroundColor:'#EEEEEE'}}>

                      <View style={{flexDirection:'row',
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    padding:10,
                                    backgroundColor:'#FFC125'}}>
                            <TouchableOpacity onPress={this._cancle.bind(this)}>
                                <Text>取消</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:20}}>{this.props.title}</Text>

                            <TouchableOpacity onPress={this._save.bind(this)}>
                                  <Text>保存</Text>
                            </TouchableOpacity>
                      </View>

                      <TouchableOpacity>
                      <View style={{marginTop:10,
                                    backgroundColor:'#FFFFFF',
                                    flexDirection:'row',
                                    justifyContent:'flex-start',
                                    alignItems:'center',
                                    padding:10,}}>
                                    <Text style={{width:60}}>省市</Text>
                                    <Text>上海浦东新区</Text>
                                    <Image source={require('../../res/image/right.png')}
                                           style={{position:'absolute',
                                                    top:10,
                                                    right:10,
                                                    width:10,
                                                    height:20,}}/>
                      </View>
                      </TouchableOpacity>

                      <View style={{marginTop:1,
                                    backgroundColor:'#FFFFFF',
                                    flexDirection:'row',
                                    justifyContent:'flex-start',
                                    alignItems:'center',}}>
                                    <Text style={{width:60,marginLeft:10}}>详细地址</Text>
                                    <TextInput style={{
                                        height:45,
                                        fontSize:12,
                                        flex:1,
                                        backgroundColor:'#FFFFFF',}}/>
                      </View>

                      <CityPicker/>


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

  text:{
    textAlign:'center',
    fontSize:24
  }

});
