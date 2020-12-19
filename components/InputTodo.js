import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const InputTodo = (props) => {

  const [textoTodo, setTextoTodo] = useState('');
  
  const aoDigitarNoInput = (textoInput) => {
    setTextoTodo(textoInput)
  }

  const adicionarTodo = () => {
    props.aoAdicionarTodo(textoTodo)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Digite um todo" 
        style={styles.inputTodo}
        onChangeText={aoDigitarNoInput}
      />
      
      <TouchableOpacity
        style={styles.botaoTodo}
        onPress={adicionarTodo}
      >
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

/* estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTodo: {
      borderWidth: 1,
      borderColor: 'purple',
      width: '80%',
      padding: 10
  },
  botaoTodo: {
    backgroundColor: '#8B10AE',
    padding: 10,
    marginTop: 5
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16
  }
});

export default InputTodo;