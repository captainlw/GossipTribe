import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image,DatePickerAndroid} from 'react-native';

    var birthYear;
    var birthMonth;
    var birthDay;
    var currentYear;
    var age;
    export default class SelectBirth extends Component{
      constructor(props){
        super(props);
        var age = this._getAge(this.props.date);
        this.state = {
          age:age,
          year:1970,

        }
      }

      _getAge(yearStr){
        var arr = yearStr.split("-");
        birthYear = arr[0];
        birthMonth = arr[1];
        birthDay = arr[2];
        currentYear = new Date().getFullYear();
        age = currentYear-birthYear;
        return age;
      }

      _cancle(){
        let _navigator = this.props._navigator;
        if(_navigator&&_navigator.getCurrentRoutes().length>1){
              _navigator.pop();
        }
      }

      _save(){
        var birthday = birthYear+'-'+birthMonth+'-'+birthDay;
        this.props.selectBirthDay(birthday);
        let _navigator = this.props._navigator;
        if(_navigator&&_navigator.getCurrentRoutes().length>1){
              _navigator.pop();
        }
      }

      async _showDatePicker(){
        try {
              const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date(birthYear,birthMonth-1,birthDay)});
              if (action !== DatePickerAndroid.dismissedAction) {
                  var age = currentYear-year;
                  this.setState({age:age})
              }
              birthYear = year;
              birthMonth = month+1;
              birthDay = day;
            } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
            }
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
                    <Text style={{marginLeft:10,fontSize:14,}}>{this.state.age}岁</Text>
                 </View>
               </TouchableOpacity>
            </View>
          )
      }
    }
