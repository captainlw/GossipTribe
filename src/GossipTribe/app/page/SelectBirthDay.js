import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image,DatePickerAndroid} from 'react-native';


    export default class SelectBirth extends Component{
      constructor(props){



      }

      _cancle(){

      }

      _save(){

      }

      _showDatePicker(){

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

              <TouchableOpacity onPress={this._showDatePicker.bind(this)}>
                <View style={{flexDirection:'row',
                              justifyContent:'flex-start',
                              alignItems:'center',
                              padding:10,
                              backgroundColor:'#FFFFFF',
                              marginTop:10}}>
                    <Text style={{fontSize:14}}>年龄</Text>
                    <Text style={{marginLeft:10,}}></Text>
                 </View>
               </TouchableOpacity>
            </View>
          )
      }
    }
