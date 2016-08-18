'use strict';
import React,{Component} from 'react';
import {
    View,
    Text,
    Platform,
    PickerIOS
} from 'react-native';

import PickerAndroid from 'react-native-picker-android';

let Picker = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;
let PickerItem = Picker.Item;

let CAR_MAKES_AND_MODELS = {
    amc: {
        name: 'AMC',
        models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
    },
    alfa: {
        name: 'Alfa-Romeo',
        models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
    },
    aston: {
        name: 'Aston Martin',
        models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
    },
    audi: {
        name: 'Audi',
        models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
    },
    austin: {
        name: 'Austin',
        models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
    },
    borgward: {
        name: 'Borgward',
        models: ['Hansa', 'Isabella', 'P100'],
    },
    buick: {
        name: 'Buick',
        models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal', 'Roadmaster', 'Skylark'],
    },
    cadillac: {
        name: 'Cadillac',
        models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
    },
    chevrolet: {
        name: 'Chevrolet',
        models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle', 'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
    },
};

let CITYS = {
       北京:{"p":"北京","c":["北京市"]},
       天津:{"p":"天津","c":["天津市"]},
       上海:{"p":"上海","c":["上海市"]},
       重庆:{"p":"重庆","c":["重庆市"]},
       河北:{"p":"河北","c":["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"]},
       山西:{"p":"山西","c":["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]},
       内蒙古:{"p":"内蒙古","c":["呼和浩特市","包头市","乌海市","赤峰市","通辽市","鄂尔多斯市","呼伦贝尔市","巴彦淖尔市","乌兰察布市","兴安盟","锡林郭勒盟","阿拉善盟"]},
       辽宁:{"p":"辽宁","c":["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"]},
       吉林:{"p":"吉林","c":["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"]},
       黑龙江:{"p":"黑龙江","c":["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市","佳木斯市","七台河市","牡丹江市","黑河市","绥化市","大兴安岭地区"]},
       江苏:{"p":"江苏","c":["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"]},
       浙江:{"p":"浙江","c":["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"]},
       安徽:{"p":"安徽","c":["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","六安市","亳州市","池州市","宣城市"]},
       福建:{"p":"福建","c":["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"]},
       江西:{"p":"江西","c":["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"]},
       山东:{"p":"山东","c":["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","菏泽市"]},
       河南:{"p":"河南","c":["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市","省直辖县级行政区划"]},
       湖北:{"p":"湖北","c":["武汉市","黄石市","十堰市","宜昌市","襄阳市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","省直辖县级行政区划"]},
       湖南:{"p":"湖南","c":["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"]},
       广东:{"p":"广东","c":["广州市","韶关市","深圳市","珠海市","汕头市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"]},
       广西:{"p":"广西","c":["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"]},
       海南:{"p":"海南","c":["海口市","三亚市"]},
       四川:{"p":"四川","c":["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"]},
       贵州:{"p":"贵州","c":["贵阳市","六盘水市","遵义市","安顺市","毕节市","铜仁市","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},
       云南:{"p":"云南","c":["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"]},
       西藏:{"p":"西藏","c":["拉萨市","昌都地区","山南地区","日喀则地区","那曲地区","阿里地区","林芝地区"]},
       陕西:{"p":"陕西","c":["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"]},
       甘肃:{"p":"甘肃","c":["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"]},
       青海:{"p":"青海","c":["西宁市","海东地区","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},
       宁夏:{"p":"宁夏","c":["银川市","石嘴山市","吴忠市","固原市","中卫市"]},
       新疆:{"p":"新疆","c":["乌鲁木齐市","克拉玛依市","吐鲁番地区","哈密地区","昌吉回族自治州","博尔塔拉蒙古自治州","巴音郭楞蒙古自治州","阿克苏地区","克孜勒苏柯尔克孜自治州","喀什地区","和田地区","伊犁哈萨克自治州","塔城地区","阿勒泰地区","自治区直辖县级行政区划"]},
};





export default class CityPicker extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            carMake: 'cadillac',
            modelIndex: 3,
        }
    }

    render() {
        let make = CAR_MAKES_AND_MODELS[this.state.carMake];
        let selectionString = make.name + ' ' + make.models[this.state.modelIndex];
        return (
            <View style={{flexDirection:'row',
                          justifyContent:'center',
                          alignItems:'center',
                          alignSelf:'flex-end'}}>
                <View style={{flex:1}}>
                  <Picker
                      selectedValue={this.state.carMake}
                      onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
                      {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                          <PickerItem
                              key={carMake}
                              value={carMake}
                              label={CAR_MAKES_AND_MODELS[carMake].name}
                          />
                      ))}
                  </Picker>
                </View>

                <View style={{flex:1}}>
                  <Picker
                      selectedValue={this.state.modelIndex}
                      key={this.state.carMake}
                      onValueChange={(modelIndex) => this.setState({modelIndex})}>
                      {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
                          <PickerItem
                              key={this.state.carMake + '_' + modelIndex}
                              value={modelIndex}
                              label={modelName}
                          />
                      ))}
                  </Picker>
                </View>
            </View>
        );
    }
};
