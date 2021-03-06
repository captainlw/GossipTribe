import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';

import PersonInfo from './PersonInfo';
import PersonZone from './PersonZone';
import PersonIntegration from './PersonIntegration';
import PersonRule from './PersonRule';


import ChangeName from './ChangeName';
export default class Personal extends Component{

  render(){
    return(
      <View style={{flexDirection:'column',
                    justifyContent:'flex-start',
                    backgroundColor:'#EEEEEE',
                    flex:1}}>
          <View style={{flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#FFC125',
                        height:40,
                        padding:10,
                      }}>
          <Text style={{textAlign:'center',
                        fontSize:20,}}>个人专区</Text>
          </View>
      <ScrollView >
      <TouchableOpacity onPress={()=>{
          this.props._navigator.push({
            component:PersonInfo,
            params:{
              name:"个人信息",
              _navigator:this.props._navigator,
              personName:"小屁孩",
              address:"上海",
              province:'上海',
              city:'浦东新区',
              detailedAddress:'浦东软件园',
              birth:"2008-08-17",
              school:"浦东新区少年宫",
            }
          })
      }}>
      <View style={[styles.menuContainer,{marginTop:20}]}>
        <View style={styles.menuContainer2}>
          <Image source={require('../../res/image/favicon.jpeg')} style={styles.menuIcon}/>
          <View style={{flexDirection:'column',
                      justifyContent:'flex-start',
                      alignItems:'center',
                      marginLeft:5}}>
                <Text>小屁孩</Text>
                <Text>上海 7岁</Text>
                <Text>浦东新区少年宫</Text>
          </View>
          </View>
          <Image source={require('../../res/image/right.png')}
                  style={styles.goToIcon}/>
        </View>
      </TouchableOpacity>

      <View style={{marginTop:20}}>
      <CustomItem
          menuName="个人空间"
          icon={require('../../res/image/personal.png')}
          onForward={()=>{
            this.props._navigator.push({
              component:PersonZone,
              params:{
                name:'个人空间',
                _navigator:this.props._navigator,
              }
            });
          }}
        />
      <CustomItem
        menuName="积分"
        icon={require('../../res/image/intergate.png')}
        onForward={()=>{
          this.props._navigator.push({
            component:PersonIntegration,
            params:{
              name:'积分',
              _navigator:this.props._navigator,
            }
          });
        }}/>

      <CustomItem
        menuName="规则说明"
        icon={require('../../res/image/rule.png')}
        onForward={()=>{
          this.props._navigator.push({
            component:PersonRule,
            params:{
              name:'规则说明',
              _navigator:this.props._navigator,
            }
          });
        }}/>
      </View>
      </ScrollView>
    </View>
    );
  }
}

class CustomItem extends Component{
    render(){
        return(
         <TouchableOpacity onPress={this.props.onForward}>
          <View style={styles.menuContainer}>
            <View style={styles.menuContainer2}>
              <Image source={this.props.icon}/>
              <Text style={styles.menuText}>{this.props.menuName}</Text>
            </View>
            <Image source={require('../../res/image/right.png')}
                  style={styles.goToIcon}/>
          </View>
        </TouchableOpacity>
        )
    }
  }



const styles = StyleSheet.create({
  menuContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    backgroundColor:'#FFFFFF',
    marginTop:1,
  },

  menuContainer2:{
    flexDirection:'row',
    alignItems:'center',
  },

  goToIcon:{
    width:10,
    height:15,
    marginRight:5,
  },

  menuText:{
    marginLeft:5,
  },

  menuIcon:{
    width:80,
    height:80,
    borderRadius:360,
    resizeMode:Image.resizeMode.contain,
  },
});
