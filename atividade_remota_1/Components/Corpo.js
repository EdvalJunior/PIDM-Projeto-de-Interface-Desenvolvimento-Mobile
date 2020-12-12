import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';


export default class Corpo extends Component {
    render() {
        let pic = {
            uri: 'https://static.wikia.nocookie.net/dccomics/images/a/a6/Batman_Vol_2_2_Variant_Textless.jpg/revision/latest?cb=20180103172517&path-prefix=pt'
        }
        return (
            <Image source={pic} style={{width: 200, height: 200}}/>
        );
    }
}
