import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class IMC extends Component {
    constructor(props) {
        super(props);
        this.state = { peso: 0, altura: 0 }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(peso) => this.setState({ peso })}
                    placeholder="Digite o seu peso"
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(altura) => this.setState({ altura })}
                    placeholder="Digite a sua altura"
                />

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Resultado', { peso: this.state.peso, altura: this.state.altura})}>
                    <View style={styles.button}>
                        <Text  style={styles.buttonText}>OK</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6c7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        padding: 5,
        width: 100,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:'#4682B4',
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
})