import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image} from 'react-native';

export default class ChangeName extends Component{

  constructor(props){
    super(props);
    this.state = {
      textValue:this.props.name,
      showClear:false
    }
  }

  _clearText(){

  }

  render(){
    return(
      <View style={sceneStyle.mainContainer}>
        <View style={sceneStyle.container}>
        <TextInput
          style={sceneStyle.inputText}
          onChangeText={(value) => this.setState({textValue:value,
                                                 showClear:true})}
          value={this.state.textValue}
          />
          <Image source={require('../.././image/clean.png')}
                  style={sceneStyle.clearIcon}
                                />
        </View>
      </View>
    );
  }
}



const sceneStyle = StyleSheet.create({
 mainContainer:{
   flexDirection:'column',
   justifyContent:'flex-start',
   alignItems:'stretch',
   flex:1,
   backgroundColor:'#EEEEEE',
 },


  container:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:20,
  },

  inputText:{
    height:45,
    fontSize:20,
    flex:1,
    backgroundColor:'#FFFFFF',
  },

  clearIcon:{
    position:'absolute',
    right:10,
    top:12,
    height:20,
    width:20
  }
});
