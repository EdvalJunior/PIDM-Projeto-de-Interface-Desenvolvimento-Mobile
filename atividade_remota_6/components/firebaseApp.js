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
        const userDocument = await firestore().collection('users')
        .doc('cylcsBq5PZ0aFwLKOJKL').get();

        this.setState({name:userDocument._data.name});
    }
    
    render(){
      return(
        <View style={{justifyContent:'center'}}>
            <Text style={{fontSize: 25}}>
                {this.state.name}
            </Text>
        </View>
      )
    }

}
