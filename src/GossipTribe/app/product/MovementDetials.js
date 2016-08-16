/**
 * Created by uiprj on 16-8-5.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
} from 'react-native';


var WEBVIEW_REF = 'webview';
export default class MovementDetials extends Component{

    constructor(props){
        super(props);

        this.state={
            url: this.props.url,
            status: 'No Page Loaded',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
            scalesPageToFit: true,
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <WebView
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});