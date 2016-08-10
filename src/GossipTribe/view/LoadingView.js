/**
 * Created by uiprj on 16-8-10.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import ProgressBar from 'ProgressBarAndroid';
export default class LoadingView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingText}>正在加载数据...</Text>
                <ProgressBar styleAttr="Inverse"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loadingText: {
        fontSize: 20,
    },
});
