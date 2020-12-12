import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Components/Cabecalho'
import Corpo from './Components/Corpo'
import Disciplina from './Components/Disciplina'

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Evaristinho Gomes' curso='Sistemas de Informação'/> 
      <Corpo />
      <Disciplina disciplina= 'PIDM'/>
      <Disciplina disciplina= 'PIW'/>
      <Disciplina disciplina= 'GPN'/>
      <Disciplina disciplina= 'MARKETING'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
