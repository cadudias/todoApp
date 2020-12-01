import React from 'react';
import { StyleSheet } from 'react-native';

import Header from './components/Header'

const App: () => React$Node = () => {
  return (
    <>
      <Header title="Todo App dentro da prop" />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
