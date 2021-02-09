import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';

import Sobre from '../views/pessoa/Sobre';
import Cadastro from '../views/pessoa/cadastro';
import Perfil from '../views/pessoa/Perfil';

import IMC from '../views/imc/Imc';
import Resultado from '../views/imc/Resultado';

const Stack = createStackNavigator();

function Router() {
  const estiloCabecalho = {
    headerStyle: {
      backgroundColor: '#4682B4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={estiloCabecalho} />

        <Stack.Screen name="Sobre" component={Sobre} options={estiloCabecalho} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={estiloCabecalho} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>

        <Stack.Screen name="IMC" component={IMC} options={estiloCabecalho} />
        <Stack.Screen name="Resultado" component={Resultado} options={estiloCabecalho} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: '#4682B4'
  }
});
export default Router;