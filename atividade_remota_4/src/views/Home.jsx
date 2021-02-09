import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Cadastro')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('IMC')}>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>IMC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Sobre', { sobre: 'ghghghjgjhg' })}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sobre</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '	#87CEFA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        padding: 10,
        width: 200,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#4682B4',
    },

    buttonText: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
    }
});