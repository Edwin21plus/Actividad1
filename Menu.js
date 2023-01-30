import react, { Component } from 'react';
//aqui se importan todos los componenetes que se van usar de react native
import { View, Text, Image, Button, Alert, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ventana2 from './Ventana2';
import Bienvenida from './Bienvenida';

export default class Ventana1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // declaracion de las variables
      
    };
  }

  render() {
    // aqui va la programaion de los objetos 
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="inicio" component={Ventana2} />
          <Stack.Screen name="bienvenida" component={Bienvenida} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  //Aqui van los estilos
})