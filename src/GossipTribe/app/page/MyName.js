import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Picker} from 'react-native';

export default class MyName extends Component{

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  goBack(){
    const {navigator} = this.props;
    if (navigator) {
    navigator.pop();
  }
  }

  render(){
    return(
        <View style={sceneStyle.container}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
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
