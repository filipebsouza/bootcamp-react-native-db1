import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu({ navigation }) {
    function handleMenuPress(path) {
        navigation.navigate(path);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carreta Dancer</Text>

            <View style={styles.form}>
                <TouchableOpacity 
                    onPress={() => {handleMenuPress('Dancer')}} 
                    style={styles.button}>
                    <Text style={styles.buttonText}> Cadastrar Dançarino</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {handleMenuPress('DancerList')}}
                    style={styles.button}>
                    <Text style={styles.buttonText}> Listar Dançarino</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, //para ocupar todo o tamnho da tela 
      justifyContent: 'center', // alinhar verticalmente o conteúdo da tela no centro
      alignItems: 'center' // alinhar o conteúdo da nossa tela horizontalmente
    },
  
    title: {
      color: '#f05a5b',
      fontWeight: 'bold',
      fontSize: 36,
      marginBottom: 50
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

