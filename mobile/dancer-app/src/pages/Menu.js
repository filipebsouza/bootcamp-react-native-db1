import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu({ navigation }) {
  function handleMenuPress(path) {
    navigation.navigate(path);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity style={styles.button} 
          onPress={() => {handleMenuPress('Dancer')}}>
          <Text style={styles.buttonText}>Cadastrar dançarino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => {handleMenuPress('List')}}>
          <Text style={styles.buttonText}>Listar dançarinos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});