import react, { Component } from 'react';
//aqui se importan todos los componenetes que se van usar de react native
import { View, Text, Image, Button, Alert } from 'react-native';

export default class Ventana1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // declaracion de las variables

    };
  }

  render() {
    // aqui va la programaion de los objetos 

    const btnClick = () => {
      console.log("click");
      Alert.alert('Detalles del pedido...')
    }
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        <Text>Tu pedido llegara rapido y seguro! 🎉</Text>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/001/238/071/large_2x/delivery-man-running-with-packages-and-bag-vector.jpg',
          }} style={{width: 200, height: 200}}
          />
        <Button
        title='huevos'
        onPress={btnClick}
        >
            
        </Button>
    </View>
    );
  }
}