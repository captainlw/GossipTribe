import React,{Component,PropTypes} from 'react';
import {View,
        Text,
        StyleSheet,
        Image,
        TextInput,
        Platform,
        PickerIOS,
        TouchableOpacity,} from 'react-native';

import PickerAndroid from 'react-native-picker-android';

let Picker = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;
let PickerItem = Picker.Item;


let CITYS = {
       北京:{province:"北京",city:["东城","西城","海淀","朝阳","丰台","门头沟","石景山","房山","通州","顺义","昌平","大兴","怀柔","平谷","延庆","密云"]},
       天津:{province:"天津",city:["滨海新区","和平区","河北区","河东区","河西区","南开区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","静海区","宁河区","蓟县"]},
       上海:{province:"上海",city:["黄浦","徐汇","长宁","静安","普陀","虹口","杨浦","闵行","宝山","嘉定","浦东新区","金山","松江","青浦","奉贤","崇明"]},
       重庆:{province:"重庆",city:["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","渝北区","巴南区","万州区","涪陵区","黔江区","长寿区","江津区","合川区","永川区","南川区","綦江区","大足区"]},
       河北:{province:"河北",city:["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"]},
       山西:{province:"山西",city:["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]},
       内蒙古:{province:"内蒙古",city:["呼和浩特市","包头市","乌海市","赤峰市","通辽市","鄂尔多斯市","呼伦贝尔市","巴彦淖尔市","乌兰察布市","兴安盟","锡林郭勒盟","阿拉善盟"]},
       辽宁:{province:"辽宁",city:["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"]},
       吉林:{province:"吉林",city:["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"]},
       黑龙江:{province:"黑龙江",city:["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭地区"]},
       江苏:{province:"江苏",city:["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"]},
       浙江:{province:"浙江",city:["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"]},
       安徽:{province:"安徽",city:["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","六安市","亳州市","池州市","宣城市"]},
       福建:{province:"福建",city:["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"]},
       江西:{province:"江西",city:["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"]},
       山东:{province:"山东",city:["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","菏泽市"]},
       河南:{province:"河南",city:["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市","省直辖县级行政区划"]},
       湖北:{province:"湖北",city:["武汉市","黄石市","十堰市","宜昌市","襄阳市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","省直辖县级行政区划"]},
       湖南:{province:"湖南",city:["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"]},
       广东:{province:"广东",city:["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"]},
       广西:{province:"广西",city:["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"]},
       海南:{province:"海南",city:["海口市","三亚市"]},
       四川:{province:"四川",city:["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"]},
       贵州:{province:"贵州",city:["贵阳市","六盘水市","遵义市","安顺市","毕节市","铜仁市","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},
       云南:{province:"云南",city:["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"]},
       西藏:{province:"西藏",city:["拉萨市","昌都地区","山南地区","日喀则地区","那曲地区","阿里地区","林芝地区"]},
       陕西:{province:"陕西",city:["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"]},
       甘肃:{province:"甘肃",city:["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"]},
       青海:{province:"青海",city:["西宁市","海东地区","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},
       宁夏:{province:"宁夏",city:["银川市","石嘴山市","吴忠市","固原市","中卫市"]},
       新疆:{province:"新疆",city:["乌鲁木齐市","克拉玛依市","吐鲁番","哈密","昌吉","博尔塔拉蒙古","巴音郭楞蒙古","阿克苏地区","克孜勒苏柯尔克孜","喀什","和田","伊犁哈萨克","塔城地区","阿勒泰地区","自治区直辖县级行政区划"]},
};

export default class SelectAddress extends Component{

  constructor(props){
    super(props);
    this.state = {
      pickerHeight:0,
      province:this.props.province,
      city:this.props.city,
      detailedAddress:this.props.detailedAddress,
      cityIndex:0,
    }
  }


  _getCityIndex(){
    var citys = Object.key(CITYS);
    alert("citys--->"+citys);
  }


  _cancle(){
    let _navigator = this.props._navigator;
    if(_navigator&&_navigator.getCurrentRoutes().length>1){
          _navigator.pop();
    }

  }

  _save(){


  }


  _canclePicker(){
    this.setState({
      pickerHeight:0,
    });
  }

  _showCityPicker(){
    this.setState({
      pickerHeight:225,
    });
  }

  render(){
    let _address = this.state.province+this.state.city;
    return(
      <View  style={{flexDirection:'column',
                    justifyContent:'space-between',
                    flex:1,
                    backgroundColor:'#EEEEEE'}}>

        <View style={{flexDirection:'column',
                      justifyContent:'flex-start',}}>

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

                      <TouchableOpacity onPress={this._showCityPicker.bind(this)}>
                      <View style={{marginTop:10,
                                    backgroundColor:'#FFFFFF',
                                    flexDirection:'row',
                                    justifyContent:'flex-start',
                                    alignItems:'center',
                                    padding:10,}}>
                                    <Text style={{width:60}}>省市</Text>
                                    <Text>{_address}</Text>
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
                                        flex:1,
                                        backgroundColor:'#FFFFFF',}}
                                        onChangeText={(detail) => this.setState({detailedAddress:detail,})}
                                        value={this.state.detailedAddress}
                                        />
                      </View>
                    </View>


                    <View style={{flexDirection:'column',
                                  backgroundColor:'#EEEEEE',
                                  height:this.state.pickerHeight,
                                }}>
                      <View style={{flexDirection:'row',
                                    justifyContent:'space-between',
                                    padding:10,
                                    backgroundColor:'#FFFFFF'
                                    }}>
                                    <TouchableOpacity onPress={this._canclePicker.bind(this)}>
                                    <Text>取消</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                    <Text>确定</Text>
                                    </TouchableOpacity>
                      </View>

                      <View style={{flexDirection:'row',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop:1,
                                    backgroundColor:'#FFFFFF',
                                  }}>
                          <View style={{flex:1}}>
                            <Picker
                                selectedValue={this.state.province}
                                onValueChange={(province) => this.setState({province, cityIndex: 0})}>
                                {Object.keys(CITYS).map((province) => (
                                    <PickerItem
                                        key={province}
                                        value={province}
                                        label={CITYS[province].province}
                                    />
                                ))}
                            </Picker>
                          </View>

                          <View style={{flex:1}}>
                            <Picker
                                selectedValue={this.state.city}
                                key={this.state.province}
                                onValueChange={(cityIndex) => this.setState({cityIndex})}>
                                {CITYS[this.state.province].city.map((cityName, cityIndex) => (
                                    <PickerItem
                                        key={this.state.province + '_' + cityIndex}
                                        value={cityIndex}
                                        label={cityName}
                                    />
                                ))}
                            </Picker>
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
    textAlign:'center',
    fontSize:24
  }

});
