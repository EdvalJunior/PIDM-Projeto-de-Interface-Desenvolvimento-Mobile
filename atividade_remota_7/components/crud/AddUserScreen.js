import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import MyButton from '../MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'

import { uid } from 'uid';

export default class AddUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name:''}
    }

    addUser = () => {
        let id = uid(16)

        firestore()
            .collection('users')
            .doc(id)
            .set({
                uid: id,
                name: this.state.name.toUpperCase(),
            })
            .then(() => {
                this.props.navigation.goBack()
            });
    }

    render() {
        return (
            <Card>

                <CardItem style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Text>Add User</Text>
                </CardItem>

                <CardItem>
                    <TextInput
                        style={{ flex: 1, paddingLeft: 15, borderWidth: 1, borderColor: '#FFFFFF', fontSize: 16 }}
                        onChangeText={(name) => this.setState({ name })}
                        placeholder='Enter name'
                    />
                </CardItem>

                <CardItem style={{ justifyContent: 'space-around', alignContent: 'center' }}>
                    <Icon
                        name="user-plus"
                        size={18}
                        color="#009688"
                        onPress={
                            this.addUser
                        }
                    > <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#000000" }}>Cadastrar</Text> </Icon>

                    <Icon
                        name="user-slash"
                        size={18}
                        color="#d32f2f"
                        onPress={
                            () => this.props.navigation.goBack()
                        }
                    > <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#000000" }}>Cancelar</Text> </Icon>
                </CardItem>

            </Card>
        )
    }
}