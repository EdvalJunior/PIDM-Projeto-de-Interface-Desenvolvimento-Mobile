import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default class Sobre extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={styles.containerHeaderText}>Sobre</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentText}>{this.props.route.params.sobre}</Text>
                </View>
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
        backgroundColor: '#87CEFA',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerHeader: {
        width: 200,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerHeaderText: {
        color:'#4682B4',
        padding: 10,
        fontSize: 25,
        fontWeight: "bold",
    },

    content: {
        padding: 50,
        borderColor:'#4682B4',
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 10
    },

    contentText: {
        color:'#4682B4',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'justify'
    },

    button: {
        padding: 5,
        width: 200,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:'#4682B4',
    },

    buttonText: {
        color: '#fff',
        padding: 5,
        fontSize: 15,
        fontWeight: "bold",
    }
}) 