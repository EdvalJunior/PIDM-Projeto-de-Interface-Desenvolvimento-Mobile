import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Cadastro extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nome: '', email: '', idade: 0 }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(nome) => this.setState({ nome })}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(idade) => this.setState({ idade })}
                    placeholder="Idade"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder="Email"
                />

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Perfil', {nome: this.state.nome, idade: this.state.idade, email: this.state.email})}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>OK</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEFA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        padding: 5,
        width: 100,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#4682B4',
    },

    buttonText: {
        color: '#fff',
        padding: 5,
        fontSize: 18,
        fontWeight: "bold",
    },

    textInput: {
        height: 45,
        width: "80%",
        borderColor: "#4682B4",
        borderWidth: 2,
        paddingLeft: 20,
        margin: 15,
        color: '#111111'
    },
});