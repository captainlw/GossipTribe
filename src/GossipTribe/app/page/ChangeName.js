import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image} from 'react-native';

export default class ChangeName extends Component{

      constructor(props){
        super(props);
        this.state = {
          nameValue:this.props.personName,
          showClear:false,
          deleteIconWidth:this.props.personName?20:0,
          deleteIconHeight:this.props.personName?20:0,
        }
      }

      _clearText(){
        if(this.nameInput!==null){
           this.nameInput.clear();
           this.setState({
             deleteIconHeight:0,
             deleteIconWidth:0,
           })
        }
      }

      _cancle(){
        let _navigator = this.props._navigator;
        if(_navigator&&_navigator.getCurrentRoutes().length>1){
              _navigator.pop();
        }
      }

      _save(){
        this.props.changeName(this.state.nameValue);
        let _navigator = this.props._navigator;
        if(_navigator&&_navigator.getCurrentRoutes().length>1){
              _navigator.pop();
        }
      }

      render(){
          return(
            <View style={sceneStyle.mainContainer}>
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

              <View style={sceneStyle.container}>

              <TextInput
                style={sceneStyle.inputText}
                onChangeText={(value) => this.setState({nameValue:value,
                                                        deleteIconWidth:20,
                                                        deleteIconHeight:20,})}
                value={this.state.nameValue}
                ref = {(ref)=>this.nameInput=ref}
                />

              <TouchableOpacity style={{position:'absolute',
                                        top:12,
                                        right:10,}}
                                  onPress={this._clearText.bind(this)}>
                  <Image source={require('../../res/image/clean.png')}
                         style={{height:this.state.deleteIconHeight,
                                width:this.state.deleteIconWidth,}}/>
              </TouchableOpacity>
              </View>
            </View>
          );
        }
      }



const sceneStyle = StyleSheet.create({
 mainContainer:{
   flexDirection:'column',
   justifyContent:'flex-start',

   flex:1,
   backgroundColor:'#EEEEEE',
 },


  container:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:10,
  },

  inputText:{
    height:45,
    fontSize:20,
    flex:1,
    backgroundColor:'#FFFFFF',
  },

  clearIcon:{
    height:20,
    width:20
  }
});
