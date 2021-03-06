/**
 * Created by uiprj on 16-8-1.
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import PagerTitleIndicator from './indicator/PagerTitleIndicator';
import IndicatorViewPager from './indicator/IndicatorViewPager';
import ProductPreview from './product/ProductPriview';
import AddProduct from './product/AddProduct';
import MovementDetails from './product/MovementDetials';
import {Video} from 'react-native-media-kit';
import Search from './search/SearchActive'
import UmengShare from 'rn-umeng-share'
import LoadingView from './view/LoadingView';
import Personal from './page/Personal';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    PixelRatio,
    RefreshControl,
} from 'react-native';
let lineHeight = 1 / PixelRatio.get();
var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 10;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var MDATA = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'row9', 'row10', 'row11', 'row12', 'row13', 'row14', 'row15', 'row16', 'row17', 'row18', 'row19', 'row20', 'row21', 'row22', 'row23', 'row24',];

const PDATA = [
    'https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8',
    'http://cdn3.viblast.com/streams/hls/airshow/playlist.m3u8',
    'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8',
    'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
    'http://vevoplaylist-live.hls.adaptive.level3.net/vevo/ch3/appleman.m3u8',
    'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8'
];

let CHOICE = 1;
let LATEST = 2;
let MOVEMENT = 3;
let PROGRAM = 4;
export default  class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            selectedTab: 'gallery',
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            galleryloaded: false,
            movementDataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            movementLoaded: false,
            programDataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            programLoaded: false,
        };
        Main.initShare();

    }

    //生命周期方法，异步获取服务器数据进行加载,默认加载画廊数据
    componentDidMount() {
        this.setGalleryData();
    }

    //友盟分享设置qq和微信key
    static initShare(){
        UmengShare.setQQZone('1105543048','JFBbZIJ21sD8uhKP');
        UmengShare.setWXAppId('wx967daebe835fbeac','5bb696d9ccd75a38c8a0bfe0675559b3');
    }

    setGalleryData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    galleryloaded: true,
                });
            })
            .done();
    }

    setMovementData() {
        this.setState({
            movementDataSource: this.state.dataSource.cloneWithRows(MDATA),
            movementLoaded: true,
        });
    }

    setProgramData() {
        this.setState({
            programDataSource: this.state.dataSource.cloneWithRows(PDATA),
            programLoaded: true,
        });
    }


    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['精选展示', '最近更新']}/>;
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

    //搜索功能
    _search(){
        this.props.navigator.push({
            name: 'Search',
            component: Search,
        });
    }

    //发布作品
    _addProduct() {
            this.props.navigator.push({
                name: 'AddProduct',
                component: AddProduct,
            });
    }

    //分享功能
    _share(action) {
        UmengShare.openShareAction('欢迎使用','分享',"http://www.baidu.com",{uri:"https://www.baidu.com/img/bd_logo1.png"});
    }

    //点赞功能
    _praise(action) {
        alert('点赞');
    }

    _goMovement(action) {
        this.props.navigator.push({
            name: 'MovementDetails',
            component: MovementDetails,
            params: {
                url: "https://www.baidu.com",
            }
        });
    }

    //下拉刷新请求数据
    _onRefresh(mContent) {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 2000);
    }


    renderGallery(movie, sectionDI, rowID) {

        return <View style={styles.gallery_item_style}>
            <View style={styles.gallery_item_top}>
                <Image style={styles.gallery_item_icon} source={require('../res/image/touxiang2.jpg')}/>
                <View style={styles.gallery_item_content}>
                    <Text style={styles.gallery_item_name}>乔乔妞妞</Text>
                    <Text style={styles.gallery_item_info} numberOfLines={1}>创作年龄5岁 上海 浦东新区少年宫</Text>
                </View>
                <Text style={styles.gallery_item_date} numberOfLines={1}>2016-02-01</Text>
            </View>
            <TouchableOpacity onPress={this._onPressButton.bind(this, rowID, movie)}>
                <Image style={styles.gallery_item_product} source={require('../res/image/zuoping.jpg')}/>
            </TouchableOpacity>

            <Text style={styles.gallery_item_produce_title}>《小蜗牛上树》</Text>
            <Text style={styles.gallery_item_produce_info}>冰人和火人被困在一个恐怖的地方,他们齐心协力一起找到终点，回到他们的家</Text>
            <View style={styles.gallery_item_produce_bottom}>
                <Text style={styles.gallery_item_produce_id}>编号 {movie.id}</Text>
                <TouchableOpacity style={styles.gallery_item_produce_share_touch}
                                  onPress={this._share.bind(this, 'share')}>
                    <Image style={styles.gallery_item_produce_share} source={require('../res/image/share.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gallery_item_produce_praise_touch}
                                  onPress={this._praise.bind(this, 'praise')}>
                    <Image style={styles.gallery_item_produce_praise} source={require('../res/image/praiseicon.png')}/>
                </TouchableOpacity>
            </View>
        </View>;
    }


    renderMovieMent(data, sectionDI, rowID) {
        return (<View style={styles.movement_list_item}>
            <TouchableOpacity onPress={this._goMovement.bind(this, 'movement')}>
                <View style={styles.movement_list_item_root}>
                    <Image style={styles.movement_list_item_image} source={require('../res/image/zuoping.jpg')}/>
                    <View style={styles.movement_list_item_content}>
                        <Text style={styles.movement_list_item_content_title}>来自未来的你报名</Text>
                        <Text style={styles.movement_list_item_content_time}>2016-05-02</Text>
                    </View>
                </View>
                <View style={styles.line}/>
            </TouchableOpacity>
        </View>);
    }

    renderProgram(data, sectionDI, rowID) {
        return (
            <View style={styles.program_list_item}>
                <Video
                    style={styles.program_video}
                    src={data}
                    autoplay={false}
                    preload={'none'}
                    loop={false}
                    controls={true}
                    muted={false}
                    poster={'https://www.baidu.com/img/bd_logo1.png'}/>
                <View style={styles.program_video_content_root}>
                    <Text style={styles.program_video_content}>20160628期 画画学成语,可爱的细菌大作战</Text>
                </View>
                <View style={styles.program_video_time_root}>
                    <Text style={styles.program_video_time}>6.28</Text>
                </View>
            </View>
        );
    }

    setSelectedGallery(){
        this.setState({selectedTab: 'gallery'});
        this.setGalleryData();
    }

    setSelectedMovementTab(){
        this.setState({selectedTab: 'movement'});
        this.setMovementData();
    }

    setSelectedProgram(){
        this.setState({selectedTab: 'program'});
        this.setProgramData();
    }

    //Listview下拉刷新控件
    getRefreshControl(type){
        return  <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this,type)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"/>;
    }

    render() {
        let GalleryView;

        let GalleryTitleView =
                <View style={styles.gallery_title_root}>
                    <Text style={styles.gallery_title_empty}></Text>
                    <Text style={styles.gallery_title_text}>小小画廊</Text>
                    <View style={styles.gallery_title_touch_parent}>
                        <TouchableOpacity onPress={this._search.bind(this)}>
                            <Image style={styles.gallery_title_search} source={require('../res/image/search.png')}
                                   resizeMode={"stretch"}/>
                        </TouchableOpacity>
                    </View>
                </View>;

        if (this.state.galleryloaded) {
            GalleryView = <View style={styles.container}>
                {GalleryTitleView}
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={this._renderTitleIndicator()}>
                    <View>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderGallery.bind(this)}
                                refreshControl={this.getRefreshControl(CHOICE)
                                }/>
                        <View style={styles.floating}>
                            <TouchableOpacity onPress={this._addProduct.bind(this)}>
                            <Image source={require('../res/image/add.png')} style={styles.floatingImage}/>
                            </TouchableOpacity>
                            <Text style={styles.floatingText}>发布作品</Text>
                        </View>
                    </View>
                    <View>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderGallery.bind(this)}
                            refreshControl={
                                this.getRefreshControl(LATEST)}/>
                    </View>
                </IndicatorViewPager>
            </View>
        }

        else {
            GalleryView = <View style={styles.container}>
                {GalleryTitleView}
                <LoadingView/>
            </View>
        }

        let movementTitleView =  <View style={styles.movement_title}>
            <Text style={styles.movement_title_text}>活动</Text>
        </View>;

        let movementView;

        if (this.state.movementLoaded) {
            movementView = <View style={styles.container}>
                {movementTitleView}

                    <ListView
                        dataSource={this.state.movementDataSource}
                        renderRow={this.renderMovieMent.bind(this)}
                        refreshControl={
                            this.getRefreshControl(MOVEMENT)}
                    />
            </View>
        }
        else {
            movementView = <View style={styles.container}>
                {movementTitleView}
                <LoadingView/>
            </View>
        }

        let programTitleView = <View style={styles.program_title}>
            <Text style={styles.program_title_text}>节目</Text>
        </View>;

        let programView;

        if (this.state.programLoaded) {
            programView = <View style={styles.container}>
                {programTitleView}
                <ListView
                    dataSource={this.state.programDataSource}
                    renderRow={this.renderProgram.bind(this)}
                    refreshControl={
                        this.getRefreshControl(PROGRAM)}/>
            </View>
        }
        else {
            programView = <View style={styles.container}>
                {programTitleView}
                <LoadingView/>
            </View>
        }

        var personalView = <Personal _navigator={this.props.navigator}/>

        return (
            <TabNavigator >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'gallery'}
                    title="小小画廊"
                    renderIcon={() => <Image style={styles.gallery_bottom_icon}
                                             source={require('../res/image/tab_weixin_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.gallery_bottom_icon}
                                                     source={require('../res/image/tab_weixin_pressed.png')}/>}
                    onPress={this.setSelectedGallery.bind(this)}>
                    {GalleryView}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'movement'}
                    title="活动"
                    renderIcon={() => <Image style={styles.gallery_bottom_icon}
                                             source={require('../res/image/tab_address_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.gallery_bottom_icon}
                                                     source={require('../res/image/tab_address_pressed.png')}/>}
                    onPress={this.setSelectedMovementTab.bind(this)}>
                    {movementView}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'program'}
                    title="节目"
                    renderIcon={() => <Image style={styles.gallery_bottom_icon}
                                             source={require('../res/image/tab_find_frd_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.gallery_bottom_icon}
                                                     source={require('../res/image/tab_find_frd_pressed.png')}/>}
                    onPress={this.setSelectedProgram.bind(this)}>
                    {programView}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'personal'}
                    title="个人专区"
                    renderIcon={() => <Image style={styles.gallery_bottom_icon}
                                             source={require('../res/image/tab_settings_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.gallery_bottom_icon}
                                                     source={require('../res/image/tab_settings_pressed.png')}/>}
                    onPress={() => this.setState({selectedTab: 'personal'})}>
                    {personalView}
                </TabNavigator.Item>

            </TabNavigator>






        );
    }
}
const styles = StyleSheet.create({

    init: {
        flex: 1,
    },

    floating:{
        width:60,
        height:60,
        backgroundColor:'#FFC125',
        position: 'absolute',
        bottom:10,
        right:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },

    floatingImage:{
        width:30,
        height:30,
    },
    floatingText:{
        fontSize:11,
    },

    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
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

    gallery_bottom_icon: {
        width: 25,
        height: 25,
    },

    gallery_title_root: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FFC125',
        alignItems: 'center',
    },

    gallery_title_empty: {
        flex: 1,
    },

    gallery_title_text: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },

    gallery_title_touch_parent: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },

    gallery_title_search: {
        height: 25,
        width: 25,
        marginRight: 10,
    },


    gallery_item_style: {
        marginLeft: 10,
        marginTop: 8,
        marginRight: 10,
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },


    gallery_item_top: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    gallery_item_icon: {
        height: 36,
        width: 36,
        marginLeft: 10,
        borderRadius: 18,
    },
    gallery_item_content: {
        flex: 3,
        marginLeft: 10,
    },
    gallery_item_date: {
        flex: 1,
        fontSize: 12,
        color: '#8A8A8A',
    },

    gallery_item_name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    gallery_item_info: {
        fontSize: 13,
    },

    gallery_item_product: {
        marginTop: 3,
        marginBottom: 3,
    },

    gallery_item_produce_title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
    },
    gallery_item_produce_info: {},

    gallery_item_produce_bottom: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
    },

    gallery_item_produce_id: {
        flex: 6,
        marginLeft: 10,
        fontSize: 13,
        color: '#ADADAD',
    },

    gallery_item_produce_share_touch: {
        flex: 1,
    },
    gallery_item_produce_praise_touch: {
        flex: 1,
    },

    gallery_item_produce_share: {
        width: 18,
        height: 18,
    },

    gallery_item_produce_praise: {
        width: 18,
        height: 18,
    },

    gallery_viewpager: {
        flex: 1,
    },

    movement_title: {
        backgroundColor: '#FFC125',
        height: 50,
        justifyContent: 'center',
    },
    movement_title_text: {
        fontSize: 20,
        textAlign: 'center',
    },
    program_title: {
        backgroundColor: '#FFC125',
        height: 50,
        justifyContent: 'center',
    },
    program_title_text: {
        fontSize: 20,
        textAlign: 'center',
    },
    personal_title: {
        backgroundColor: '#FFC125',
        height: 50,
        justifyContent: 'center',
    },
    personal_title_text: {
        fontSize: 20,
        textAlign: 'center',
    },

    movement_list_item: {
        backgroundColor: 'white',
    },
    movement_list_item_root: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    movement_list_item_image: {
        width: 100,
        height: 80,
    },
    movement_list_item_content: {},
    movement_list_item_content_title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
    },
    movement_list_item_content_time: {
        marginLeft: 10,
        color: '#ADADAD',
        fontSize: 13,
    },


    program_list_item: {
        height: 180,
    },

    program_video: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'black',
    },

    program_video_content_root: {
        backgroundColor: 'white',
    },

    program_video_content: {
        marginLeft: 10,
        fontWeight: 'bold',

    },

    program_video_time_root: {
        backgroundColor: 'white',
    },

    program_video_time: {
        marginLeft: 10,
        backgroundColor: 'white',
    },

    line: {
        height: lineHeight,
        backgroundColor: '#ADADAD',
        marginLeft: 5,
        marginRight: 5,
    },
});
