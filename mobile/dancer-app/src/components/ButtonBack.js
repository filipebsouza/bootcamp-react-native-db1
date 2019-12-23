import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function ButtonBack({ navigation }) {
    function handlePress() {
        navigation.navigate('Menu');
    }

    return <TouchableOpacity onPress={() => {handlePress()}} style={styles.button}>
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
      marginTop: 20,
      marginHorizontal: 20
    },
  
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default withNavigation(ButtonBack);