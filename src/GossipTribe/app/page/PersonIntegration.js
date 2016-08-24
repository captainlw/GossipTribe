import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ListView,Image} from 'react-native';

export default class PersonIntegration extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2,
                                      sectionHeaderHasChanged:(s1,s2)=>s1!=s2,
                                      getSectionHeaderData:(dataBlob,sectionID)=>{
                                        return dataBlob[sectionID];
                                      },
                                    });
    let datalist = {'如何获取积分？':
      [['注册会员','+20积分'],['资料完整度','+10积分'],['上传作品','+5积分/幅'],
        ['转发分享','+5积分'],['成功邀请好友','+20积分'],['获得别人的点赞','+5积分']],
      '消耗积分':[['兑换产品',''],['兑换线下活动',''],['兑换邮费（兑换商品总额超过200元则包邮）',''],
      ['上节目（价值需核算）',''],['积分价值1积分=0.01元','']]};
    this.state={
      dataSource:ds.cloneWithRowsAndSections(datalist)
    }
  }


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
                    backgroundColor:'#EEEEEE',
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

                  <View style={{flexDirection:'row',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                backgroundColor:'#FFFFFF',
                                padding:20}}>
                        <Image source={require('../../res/image/nopass.png')} style={{width:20,height:20}}/>
                        <Text style={{marginLeft:10}}>我的积分：</Text>
                        <Text style={{color:'#FFC935'}}>150</Text>
                  </View>

                  <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData,sectionId)=><IntegrationItem  title={rowData[0]} mark={rowData[1]}/>}
                  renderSectionHeader={(sectionData,sectionId)=><IntegrationSectionItem section={sectionId}/>}
                  style={{marginTop:10,flex:1}}
                  />
     </View>
    );
  }
}

class IntegrationItem extends Component{

    render(){
      return(
        <View style={{flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      padding:5,
                      borderBottomWidth:1,
                      borderBottomColor:'#EEEEEE',
                      backgroundColor:'#FFFFFF',
                    }}>
              <View style={{flexDirection:'row',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            marginLeft:10,
                          }}>
                <View style={{width:8,height:8,borderRadius:360,backgroundColor:'#EEEEEE'}}/>
                <Text style={{marginLeft:5}}>{this.props.title}</Text>
              </View>
              <Text style={{color:'#FFC935'}}>{this.props.mark}</Text>
        </View>
      )
    }
}

class IntegrationSectionItem extends Component{
  render(){
    return(
      <View style={{flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    padding:5,
                    backgroundColor:'#EEEEEE'
                  }}>
         <Text>{this.props.section}</Text>
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
