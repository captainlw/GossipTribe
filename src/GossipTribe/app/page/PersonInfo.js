import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ChangeName from './ChangeName';
import SelectBirthDay from './SelectBirthDay';
import SelectAddress from './SelectAddress';
import ChangeSchool from './ChangeSchool';

var options = {
  title: '选择作品',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从相册中选取',
  cancelButtonTitle: '取消',
  storageOptions: {
      skipBackup: true,
      path: 'images'
  }
};

export default class PersonInfo extends Component{
      constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../../res/image/favicon.jpeg'),
            personName:this.props.personName,
            address:this.props.address,
            birth:this.props.birth,
            school:this.props.school,
        }
      }

     _changeIcon(){
       ImagePicker.showImagePicker(options, (response) => {
         //类似onActivityResult
         if (response.didCancel) {
         }
         else if (response.error) {
         }
         else {
           //获得照相或图库返回的数据
           const source = {uri: response.uri, isStatic: true};
           this.setState({avatarSource:source});
         }
       });
     }

    _goBack(){
      let _navigator = this.props._navigator;
      if(_navigator&&_navigator.getCurrentRoutes().length>1){
            _navigator.pop();
      }
    }


  render(){
    let _thiz = this;
    return(
      <View style={{flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'#EEEEEE',
                    flex:1,
                }}>
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

          <ScrollView>

          <TouchableOpacity onPress={this._changeIcon.bind(this)}>
            <View style={[styles.menuContainer,styles.menuIcon]}>
              <Text style={{}}>头像</Text>
              <View style={{flexDirection:'row',
                            justifyContent:'flex-start',
                            alignItems:'center'}}>
                <Image source={this.state.avatarSource}
                style={styles.menuImage}/>
                <Image
                source={require('../../res/image/right.png')}/>
              </View>
            </View>
          </TouchableOpacity>

          <MenuItem
              title="小画家姓名"
              params={this.state.personName}
              onForward={()=>{
                this.props._navigator.push({
                  component:ChangeName,
                  params:{
                    personName:this.state.personName,
                    title:"小画家姓名",
                    _navigator:this.props._navigator,
                    changeName:function(name){
                      _thiz.setState({personName:name})
                    }
                  }
                });
              }}
            />

          <MenuItem
            title="小画家出生日期"
            params={this.state.birth}
            onForward={()=>{
              this.props._navigator.push({
                component:SelectBirthDay,
                params:{
                  title:'选择出生日期',
                  _navigator:this.props._navigator,
                  date:this.state.birth,
                  selectBirthDay:function(birthday){
                    _thiz.setState({birth:birthday})
                  }
                }
              });
            }}/>

          <MenuItem
            title="地址"
            params={this.state.address}
            onForward={()=>{
              this.props._navigator.push({
                component:SelectAddress,
                params:{
                  title:'地址',
                  _navigator:this.props._navigator,
                  address:this.state.address

                }
              });
            }}/>

          <MenuItem
            title="培训机构"
            params={this.state.school}
            onForward={()=>{
              this.props._navigator.push({
                component:ChangeSchool,
                params:{
                  trainSchool:this.state.school,
                  title:"培训机构",
                  _navigator:this.props._navigator,
                  changeSchool:function(school){
                    _thiz.setState({school:school})
                  }
                }
              });
            }}/>
        </ScrollView>
      </View>
  )
  }
}


class MenuItem extends Component{
    render(){
      return(
        <TouchableOpacity onPress={this.props.onForward}>
          <View style={styles.menuContainer}>
            <Text >{this.props.title}</Text>
            <View style={{flexDirection:'row',
                          justifyContent:'flex-start',
                          alignItems:'center'}}>
              <Text style={{marginRight:10}}>{this.props.params}</Text>
              <Image style={[styles.menuRight]}
              source={require('../../res/image/right.png')}/>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
}


const styles = StyleSheet.create({
  menuContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:2,
      backgroundColor:'#FFFFFF',
      padding:10,
  },


  menuIcon:{
    marginTop:20,
  },

  menuRight:{
    width:10,
    height:15,
  },

 menuRight2:{
   position:'absolute',
   right:30,

 },

 menuImage:{
   width:80,
   height:80,
   marginRight:10,
   borderRadius:360,
   resizeMode:Image.resizeMode.contain,
 },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
