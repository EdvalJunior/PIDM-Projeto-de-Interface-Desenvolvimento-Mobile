import React from 'react';
import { StyleSheet } from 'react-native';

import Router from './src/router/Router'

export default function App() {
  return (
    <Router></Router>
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