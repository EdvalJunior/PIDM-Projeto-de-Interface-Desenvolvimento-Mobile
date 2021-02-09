import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const cidadesDef = ['Fortaleza', 'Quixada', 'Limoeiro', 'Juazeiro']

export default class Votacao extends Component {

    constructor(props) {
        super(props);

        this.state = { fortaleza: 0, quixada: 0, limoeiro: 0, juazeiro: 0, maiorQtdVot: 0, menorQtdVot: 0 }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.fortaleza != this.state.fortaleza ||
           prevState.quixada != this.state.quixada ||
           prevState.limoeiro != this.state.limoeiro ||
           prevState.juazeiro != this.state.juazeiro){
               const cidades = [this.state.fortaleza, this.state.quixada,this.state.limoeiro, this.state.juazeiro];
               
               let localMaisVotado = this.state.maiorQtdVot;
               for(let i = 0; i < cidades.length ; i++){
                    if(cidades[i] > localMaisVotado){
                        localMaisVotado = cidades[i];
                    }
               }
               this.setState({maiorQtdVot: localMaisVotado})

               let localMenosVotado = this.state.menorQtdVot;
               for(let i = 0; i < cidades.length; i++){
                    if(cidades[i] < localMenosVotado){
                        localMenosVotado = cidades[i];
                    }
               }
               this.setState({menorQtdVot: localMenosVotado})
        }
    }

    maisVotadas(){
        let saida = ' '
        const cidades = [this.state.fortaleza,this.state.quixada, this.state.limoeiro, this.state.juazeiro];
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.maiorQtdVot){ 
                saida+= cidadesDef[i] + ' '
            }
        }
        return saida
    }

    menosVotadas(){
        let saida = ''
        const cidades = [this.state.fortaleza,this.state.quixada, this.state.limoeiro, this.state.juazeiro]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.menorQtdVot) {
                saida += cidadesDef[i] + ' '
            }
        }
        return saida
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                        <h4>VOTAÇÃO DE CIDADES</h4>
                </View>
                <View style={styles.Bd_content}>
                    <h5>Fortaleza: {this.state.fortaleza}</h5>
                    <h5>Quixadá: {this.state.quixada}</h5>
                    <h5>Limoeiro: {this.state.limoeiro} </h5>
                    <h5>Juazeiro: { this.state.juazeiro} </h5>
                    <h5>MAIS VOTADO: {this.state.maiorQtdVot} : {this.maisVotadas()} </h5>
                    <h5>MENOS VOTADO: {this.state.menorQtdVot} : {this.menosVotadas()} </h5>
                </View>
                <View id="Btn_vote" style={styles.Btn_vote}>
                    <Button title="Fortaleza" onPress={() => this.setState({fortaleza : this.state.fortaleza +1})} />
                    <Button title="Quixadá" onPress={() => this.setState({quixada : this.state.quixada +1})} />
                    <Button title="Limoeiro" onPress={() => this.setState({limoeiro : this.state.limoeiro +1})} />
                    <Button title="Juazeiro" onPress={() => this.setState({juazeiro : this.state.juazeiro +1})} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignContent: 'center',
        justifyContent: 'center',
    },
    Header : {
        justifyContent : "center",
        backgroundColor: '#92C1E9'
    },
    Bd_content:{
        marginLeft : '20px',
        marginRight : '20px',
        marginBottom : '20px'
    },
    Btn_vote: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
});
