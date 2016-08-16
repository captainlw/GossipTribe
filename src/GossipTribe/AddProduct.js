/**
 * Created by uiprj on 16-8-3.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio,
    TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DialogAndroid from  'react-native-dialogs';
let lineHeight = 1 / PixelRatio.get();

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

var dialogOptions = {
    title: '作品信息未填写完整',
    positiveText: '知道了',
};
export default class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasImageData: false,
            avatarSource: require('./res/add.png'),
            productCreateAge: "",
            productName: "",
            DELETE_HEIGHT : 0,
            DELETE_WIDTH : 0,
        }
    }

    _publish(action) {
        if (action == 0) {
            const {navigator} = this.props;
            if (navigator) {
                navigator.pop();
            }
        }
        else {
            //资料未填写,弹出对话框提示
            if (this.state.productCreateAge == "" || this.state.productName == "") {
                var dialog = new DialogAndroid();
                dialog.set(dialogOptions);
                dialog.show();
            }
            //发布作品,向服务器上传数据
            else{
                if(this.state.hasImageData){
                    alert("发布作品： " + this.state.productCreateAge+"  "+this.state.productName);
                }else{
                    alert("请添加一张图片")
                }

            }


        }
    }

    _delete(){

        this.setState({
            avatarSource: require('./res/add.png'),
            hasImageData: false,
            DELETE_HEIGHT : 0,
            DELETE_WIDTH : 0,
        });
    }

    _addProduct(action) {
        //跳转到相机或者图库
        ImagePicker.showImagePicker(options, (response) => {
            //类似onActivityResult
            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else {
                //获得照相或图库返回的数据
                // const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                const source = {uri: response.uri, isStatic: true};
                this.setState({
                    avatarSource: source,
                    hasImageData: true,
                    DELETE_HEIGHT : 30,
                    DELETE_WIDTH : 30,
                });
            }
        });
    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.product_title_root}>
                    <View style={styles.product_title_cancel}>
                        <TouchableOpacity style={styles.product_title_cancel_touch}
                                          onPress={this._publish.bind(this, 0)}>
                            <Text style={styles.product_title_cancel_text}>取消</Text>
                        </TouchableOpacity>
                    </View>


                    <Text style={styles.product_title_text}>发布作品</Text>
                    <View style={styles.product_title_publish}>
                        <TouchableOpacity style={styles.product_title_publish_touch}
                                          onPress={this._publish.bind(this, 1)}>
                            <Text style={styles.product_title_publish_text}>发布</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.product_content_image_root}>
                    <TouchableOpacity onPress={this._addProduct.bind(this, 0)}>
                        <Image style={styles.product_content_image} source={this.state.avatarSource}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._delete.bind(this)} style={styles.product_content_delete_touch}>
                    <Image style={{width:this.state.DELETE_WIDTH,height:this.state.DELETE_HEIGHT}} source={require('./res/delete.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <View style={styles.product_content_name_root}>
                    <Text style={styles.product_content_name_tag}>作品名称</Text>
                    <TextInput style={styles.product_content_name_value} placeholder={'必填'}
                               underlineColorAndroid={'transparent'}
                               placeholderTextColor={'#ADADAD'}
                               onChangeText={(productName)=>this.setState({productName})}/>
                </View>
                <View style={styles.line}/>

                <View style={styles.product_content_age_root}>
                    <Text style={styles.product_content_age_tag}>作品创作年龄</Text>
                    <TextInput style={styles.product_content_age_value} placeholder={'必填, 数字'}
                               underlineColorAndroid={'transparent'} keyboardType={'numeric'}
                               placeholderTextColor={'#ADADAD'}
                               onChangeText={(productCreateAge)=>this.setState({productCreateAge})}/>
                </View>
                <View style={styles.line}/>
                <View style={styles.product_content_description_root}>
                    <TextInput style={styles.product_content_description }
                               placeholder={'作品描述 (选填, 50字以内)'}
                               underlineColorAndroid={'transparent'}
                               placeholderTextColor={'#ADADAD'}/>
                </View>


            </View>

        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    product_title_root: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FFC125',
        alignItems: 'center',
    },
    product_title_cancel: {
        flex: 1,
    },
    product_title_text: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
    },
    product_title_publish: {
        flex: 1,
    },
    product_title_publish_text: {
        fontSize: 18,

    },
    product_title_cancel_text: {
        fontSize: 18,
        marginLeft: 10,
    },
    product_title_publish_touch: {
        width: 50,
        alignSelf: 'flex-end',
    },
    product_title_cancel_touch: {
        width: 50,
        alignSelf: 'flex-start',
    },
    product_content_image_root: {
        height: 120,
        justifyContent: 'center',
    },
    product_content_image: {
        width: 100,
        height: 100,
    },
    product_content_delete_touch:{
        position: 'absolute',
        left: 80,
        top: 0,
        width: 30,
        height: 30,

    },
    line: {
        height: lineHeight,
        backgroundColor: '#ADADAD',
        marginLeft: 5,
        marginRight: 5,
    },
    product_content_name_root: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    product_content_name_tag: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
    },
    product_content_name_value: {
        fontSize: 18,
        alignSelf: 'flex-end',
        width: 100,
        color: 'grey',
        textAlign: 'right',

    },

    product_content_age_root: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    product_content_age_tag: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
    },
    product_content_age_value: {
        fontSize: 18,
        alignSelf: 'flex-end',
        width: 100,
        color: 'grey',
        textAlign: 'right',
    },
    product_content_description_root: {
        flex: 1,
    },
    product_content_description: {
        fontSize: 18,
        color: 'grey',
        marginLeft: 5,

    },


});