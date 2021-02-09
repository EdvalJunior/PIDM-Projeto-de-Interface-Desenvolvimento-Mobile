import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Resultado extends Component {
    render() {
        const peso  = this.props.route.params.peso
        const altura = this.props.route.params.altura;
        
        let msg = ''

        const imc = peso / (altura ** 2)

        if(isNaN(imc)) msg = 'Dados invalidos'
        else if (imc < 17) msg = 'Muito abaixo do peso'
        else if (imc > 17 && imc < 18.49) msg = 'Abaixo do peso'
        else if (imc > 18.5 && imc < 24.99) msg = 'Peso normal'
        else if (imc > 25 && imc < 29.99) msg = 'Acima do peso'
        else if (imc > 30 && imc < 34.99) msg = 'Obesidade I'
        else if (imc > 35 && imc < 39.99) msg = 'Obesidade II (severa)'
        else msg = 'Obesidade III (mórbida)'

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Seu IMC é: {imc}
                </Text>
                <Text style={styles.text}>
                    {msg}
                </Text>
                <TouchableHighlight 
                    onPress={
                        () => this.props.navigation.navigate('Home')}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>HOME</Text>
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
        width: 150,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fa7921',
    },

    buttonText: {
        color: '#fff',
        padding: 5,
        fontSize: 18,
        fontWeight: "bold",
    },

    text: {
        color: '#fa7921',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'justify',
        marginBottom: 20
    },
})