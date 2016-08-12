import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class MyScene extends Component{

  render(){
    return(
      <View style={{backgroundColor:'#EEEEEE',flex:1}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'flex-start',
          marginLeft:5,
          marginRight:5}}>

        <View style={{flexDirection:'column',
                      justifyContent:'flex-start',
                      alignItems:'center',
                      marginTop:10,}}>
                      <View style={{width:10,height:10,borderRadius:360,backgroundColor:'#FFC935'}}/>
                      <View style={{flex:1,width:1,backgroundColor:'#FFC935'}}/>
        </View>

        <View style={{flex:1,
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'flex-start',
                      marginTop:10,}}>
               <Text style={{marginLeft:5}}>2016-01-16</Text>

               <View style={{flex:1,
                            flexDirection:'column',
                            justifyContent:'flex-start',
                            backgroundColor:'#FFFFFF',
                            margin:5}}>

                        <View style={{flexDirection:'row',
                                      justifyContent:'space-between',
                                      alignItems:'center',
                                      margin:5}}>
                          <Text>《小蜗牛上树》</Text>
                          <TouchableOpacity>
                              <View style={{borderWidth:1,
                                            borderColor:'#FFC935',
                                            padding:2,
                                          }}>
                                 <Text style={{color:'#FFC935',
                                              fontSize:12}}>定制体恤</Text>
                              </View>
                          </TouchableOpacity>
                        </View>

                        <Image source={require('../.././image/favicon.jpeg')}
                               style={{marginLeft:10,
                                       marginRight:10,
                                       width:310,
                                       height:400,
                                       resizeMode:Image.resizeMode.cover}}/>

                        <Text style={{margin:5}}>冰人和火人被困在一个恐怖的地方，他们齐心协力一起找到终点，回到他们的家</Text>

                        <View style={{flexDirection:'row',
                                      justifyContent:'space-between',
                                      alignItems:'center',}}>
                          <View  style={{flexDirection:'row',
                                         alignSelf:'center'}}>
                          <TouchableOpacity>
                          <Image source={require('../.././image/praise.png')} style={{
                                width:20,
                                height:20,
                                marginLeft:10,
                          }}/>
                          </TouchableOpacity>

                          <Text style={{marginLeft:5}}>32</Text>
                          </View>


                          <TouchableOpacity>
                          <View style={{borderWidth:1,
                                        borderColor:'#EEEEEE',
                                        padding:2,
                                        margin:10,
                                      }}>
                             <Text style={{color:'#EEEEEE',
                                          fontSize:12}}>删除</Text>
                          </View>
                          </TouchableOpacity>
                        </View>
                </View>
            </View>
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

  text:{
    fontSize:24,
    textAlign:'center',
  }

});
