/**
 * Created by uiprj on 16-8-8.
 */


import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ListView,
    Image,
} from 'react-native';
var MDATA = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'row9', 'row10', 'row11', 'row12', 'row13', 'row14', 'row15'];
import ProductPreview from './ProductPriview';
export default class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.keyword,
            searchSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    }

    componentDidMount() {
        this.setData();
    }

    _onPressButton(id, movie) {
        this.props.navigator.push({
            name: 'ProductPreview',
            component: ProductPreview,
            params: {
                id: id,
                // imagesource: movie.posters.thumbnail,
                imagesource: 'https://www.baidu.com/img/bd_logo1.png',
            }
        });
    }

    _share(action) {
        alert('分享');
    }

    _praise(action) {
        alert('点赞');
    }

    setData(){
        this.setState({
            searchSource: this.state.searchSource.cloneWithRows(MDATA),
        });
    }

    renderSearch(data, sectionDI, rowID){

        return (
            <View style={styles.list_item_style}>
                <View style={styles.list_item_top}>
                    <Image style={styles.list_item_icon} source={require('./res/touxiang2.jpg')}/>
                    <View style={styles.list_item_content}>
                        <Text style={styles.list_item_name}>乔乔妞妞</Text>
                        <Text style={styles.list_item_info} numberOfLines={1}>创作年龄5岁 上海 浦东新区少年宫</Text>
                    </View>
                    <Text style={styles.list_item_date} numberOfLines={1}>2016-02-01</Text>
                </View>
                <TouchableOpacity onPress={this._onPressButton.bind(this, rowID, data)}>
                    <Image style={styles.list_item_product} source={require('./res/zuoping.jpg')}/>
                </TouchableOpacity>

                <Text style={styles.list_item_produce_title}>《小蜗牛上树》</Text>
                <Text style={styles.list_item_produce_info}>冰人和火人被困在一个恐怖的地方,他们齐心协力一起找到终点，回到他们的家</Text>
                <View style={styles.list_item_produce_bottom}>
                    <Text style={styles.list_item_produce_id}>编号 {data}</Text>
                    <TouchableOpacity style={styles.list_item_produce_share_touch}
                                      onPress={this._share.bind(this, 'share')}>
                        <Image style={styles.list_item_produce_share} source={require('./res/share.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list_item_produce_praise_touch}
                                      onPress={this._praise.bind(this, 'praise')}>
                        <Image style={styles.list_item_produce_praise} source={require('./res/praise.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{this.state.keyword}</Text>
                </View>
                <ListView
                    style={styles.list}
                    dataSource={this.state.searchSource}
                    renderRow={this.renderSearch.bind(this)}/>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        height: 50,
        backgroundColor: "#FFC125",
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 18,
    },
    list:{
        flex:1,
    },
    list_item:{
        height:100,
        backgroundColor:'red',
    }
    ,
    list_item_style: {
        marginLeft: 10,
        marginTop: 8,
        marginRight: 10,
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },


    list_item_top: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    list_item_icon: {
        height: 36,
        width: 36,
        marginLeft: 10,
        borderRadius: 18,
    },
    list_item_content: {
        flex: 3,
        marginLeft: 10,
    },
    list_item_date: {
        flex: 1,
        fontSize: 12,
        color: '#8A8A8A',
    },

    list_item_name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    list_item_info: {
        fontSize: 13,
    },

    list_item_product: {
        marginTop: 3,
        marginBottom: 3,
    },

    list_item_produce_title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
    },
    list_item_produce_info: {},

    list_item_produce_bottom: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
    },

    list_item_produce_id: {
        flex: 6,
        marginLeft: 10,
        fontSize: 13,
        color: '#ADADAD',
    },

    list_item_produce_share_touch: {
        flex: 1,
    },
    list_item_produce_praise_touch: {
        flex: 1,
    },

    list_item_produce_share: {
        width: 18,
        height: 18,
    },

    list_item_produce_praise: {
        width: 18,
        height: 18,
    },
});