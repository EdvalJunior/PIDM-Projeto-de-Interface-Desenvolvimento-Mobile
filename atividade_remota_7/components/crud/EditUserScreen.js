import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import MyButton from '../MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'


export default class EditUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            uid: this.props.route.params.item.uid,
            name: this.props.route.params.item.name
        }
    }

    updateUser = () => {
        firestore()
            .collection('users')
            .doc(this.state.uid)
            .update(
                {
                    name: this.state.name,
                }
            )
            .then(
                () => {
                    this.props.navigation.goBack()
                }
            );
    }

    render() {
        return (
            <Card>

                <CardItem style={{ justifyContent: 'center', alignContent: 'center' }} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>Editar Usuário</Text>
                </CardItem>

                <CardItem>
                    <TextInput
                        style={{ flex: 1, paddingLeft: 15, borderWidth: 1, borderColor: '#FFFFFF', fontSize: 16 }}
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                    />
                </CardItem>

                <CardItem style={{ justifyContent: 'space-around', alignContent: 'center' }}>
                    <Icon
                        name="user-edit"
                        size={18}
                        color="#03a9f4"
                        onPress={
                            this.updateUser
                        }
                    > <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>Editar</Text></Icon>

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