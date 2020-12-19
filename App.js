import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Header from './components/Header'
import InputTodo from './components/InputTodo'
import Todo from './components/Todo'

const App = () => {

  const [ todos, setTodos ] = useState([]);

  const adicionarTodo = (textoTodo) => {
    setTodos(todosAtuais => [
      ...todosAtuais, 
      {
        id: Math.random().toString(), 
        texto: textoTodo 
      }
    ]);
  }

  const removerTodo = (id) => {
    setTodos(todosAtuais => [
      ...todosAtuais.filter(todo => todo.id !== id)
    ])
  }

  return (
    <>
    <Header title="Todo App dentro da prop" />
    <View style={styles.container}>
      <InputTodo aoAdicionarTodo={adicionarTodo} />

      <FlatList 
        data={todos} 
        keyExtractor={todo=> todo.id}
        renderItem={({item}) => (
          <Todo 
            id={item.id}
            textoTodo={item.texto}
            aoRemover={removerTodo}
          />
        )}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  }
});

export default App;
