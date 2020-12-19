import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = (props) => {

  const removerTodo = () => {
    props.aoRemover(props.id);
  }

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={removerTodo}
    >
      <Text style={styles.todo}>{props.textoTodo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B10AE',
    padding: 10,
    marginVertical: 1,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  todo: {
    color: '#fff'
  }
});

export default Todo;