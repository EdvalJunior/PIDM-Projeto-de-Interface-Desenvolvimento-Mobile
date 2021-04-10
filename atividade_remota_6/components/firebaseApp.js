import React, { Component } from 'react';
import {View, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore'


export default class firebaseApp extends Component{
    
    constructor(props){
        super(props);
        this.getUser();
        this.state = {name= ''}
    }

    getUser = async () => {
        const userDocument = await firestore().collection('users').doc('cylcsBq5PZ0aFwLKOJKL').get()
        this.setState({name:userDocument._data.name})
    }
    
    render(){
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Nome: {this.state.name}
        </Text>
    </View>
    }

}
