import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Perfil extends Component {
    render() {
        let pic = {
            uri: 'https://static.wikia.nocookie.net/dccomics/images/a/a6/Batman_Vol_2_2_Variant_Textless.jpg/revision/latest/scale-to-width-down/600?cb=20180103172517&path-prefix=pt'
        };

        return (
            <View style={styles.container}>
                <Image  source={pic} style={styles.imagem} />

                <View style={styles.content}>
                    <Text style={styles.contentText}>Nome: {this.props.route.params.nome}</Text>
                    <Text style={styles.contentText}>Idade: {this.props.route.params.idade}</Text>
                    <Text style={styles.contentText}>Email: {this.props.route.params.email}</Text>
                </View>
                <TouchableHighlight 
                    onPress={
                        () => this.props.navigation.navigate('Home')}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>HOME</Text>
                    </View>
                </TouchableHighlight>
            </View>)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87CEFA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        padding: 20,
        alignContent: 'flex-start'
    },

    contentText: {
        color: '#4682B4',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'justify'
    },

    button: {
        padding: 5,
        width: 150,
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

    imagem: {
        width: 203, 
        height: 200,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 5,
    }
});