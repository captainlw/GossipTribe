/**
 * Created by uiprj on 16-8-2.
 */


import React, {Component} from 'react';
import Image from 'react-native-image-zoom'
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    View,
} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class ProductPriview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1,
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            imagesource: this.props.imagesource,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image scaleType={'fitCenter'} style={styles.image} source={{uri: this.state.imagesource}}/>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    image: {
        width: width,
        height: height,
    }
});



