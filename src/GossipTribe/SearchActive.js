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
} from 'react-native';
var TextInputState = TextInput.State;
import SearchResult from './SearchResult';


export default class SearchActive extends Component {

    constructor(props) {
        super(props);
        this.state={
            focus:true,
            searchText:"",
        }
    }
    //隐藏键盘
     dismissKeyboard() {
        TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
    }

    _cancel(action){
        this.dismissKeyboard();
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _go(action){
        this.dismissKeyboard();
        this.props.navigator.push({
            name: 'SearchResult',
            component: SearchResult,
            params: {
                keyword: this.state.searchText,
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchRoot}>
                    <TouchableOpacity style={styles.searchCancel} onPress={this._cancel.bind(this,1)}>
                        <Text style={styles.searchCancelText}>取消</Text>
                    </TouchableOpacity>
                    <View style={styles.searchInputRoot}>
                        <TextInput style={styles.searchInput} keyboardType={'web-search'}
                                   autoFocus={this.state.focus}
                                   placeholder={'编号/作品名/作者名/创作年龄/培训机构'}
                                   placeholderTextColor={'#ADADAD'}
                                   onChangeText={(searchText)=>this.setState({searchText})}/>
                    </View>
                    <TouchableOpacity style={styles.searchGo} onPress={this._go.bind(this,1)}>
                        <Text style={styles.searchGoText}>搜索</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchRoot: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#FFC125',
        alignItems: 'center',
        justifyContent:'center',

    },
    searchInputRoot:{
        flex: 5,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius:3,
    },
    searchInput: {
        backgroundColor: 'white',
        height: 40,
        fontSize:13,
    },
    searchCancel: {
        flex: 1,
    },
    searchCancelText: {
        textAlign: 'center',
    },
    searchGo: {
        flex: 1,
    },
    searchGoText: {
        textAlign: 'center',
    }


});