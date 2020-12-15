import React, { useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

import Header from './components/Header'
import InputTodo from './components/InputTodo'

const App = () => {

  const [ todos, setTodos ] = useState([]);

  const adicionarTodo = (textoTodo) => {
    setTodos(todosAtuais => [
      ...todosAtuais, 
      {
        id: Math.random().toString(), 
        value: textoTodo 
      }
    ]);
  }

  return (
    <>
      <Header title="Todo App dentro da prop" />
      <InputTodo aoAdicionarTodo={adicionarTodo} />

      <FlatList 
        data={todos} 
        keyExtractor={todo=> todo.id}
        renderItem={({item}) => (
          <Text>{item.value}</Text>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
