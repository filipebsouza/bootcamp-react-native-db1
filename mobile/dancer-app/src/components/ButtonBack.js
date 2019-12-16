import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonBack({ navigation }) {
  function handlePress() {
    navigation.navigate('Menu');
  }

  return <TouchableOpacity style={styles.button} 
    onPress={handlePress}>
    <Text style={styles.buttonText}>Voltar</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
