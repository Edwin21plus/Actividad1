import react, { Component } from 'react';
//aqui se importan todos los componenetes que se van usar de react native
import { View, Text, Image, Button, Alert, TextInput, StyleSheet } from 'react-native';

export default class Ventana1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // declaracion de las variables
      input1:"",
      input2:"",
      result: "",
    };
  }

  render() {
    // aqui va la programaion de los objetos 

    const btnClick = () => {
      console.log("click");
      

      if(this.state.input1 == 234 && this.state.input2 == 789){
        Alert.alert('Acceso concedido');
      }else{
        Alert.alert("Error");
      }
    }

    const btnSigVentana = () => {
      this.props.navigation.navigate("bienvenida",{usuario:this.state.input1, contrasena:this.state.input2});
    }
    return (
      <View
      style={styles.view}>
        <Text>Tu pedido llegara rapido y seguro! 🎉</Text>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/001/238/071/large_2x/delivery-man-running-with-packages-and-bag-vector.jpg',
          }} style={styles.img}
          />
          <Text>Usuario: </Text>
        <TextInput
        style={styles.input}
        keyboardType = "number-pad"
        defaultValue=""
        onChangeText={input1 => this.setState({input1})}
      />
       <Text>Constraseña: </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        defaultValue=""
        onChangeText={input2 => this.setState({input2})}
      />
      <Button
        title='Validar'
        onPress={btnClick}
        ></Button>
      
      <Text>El valor de input2 es: {this.state.input2}</Text>
      <Button
        title='Ventana siguiente'
        style={styles.btnVentanaSig}
        onPress={btnSigVentana}
        ></Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  input: {
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
  },
  img: {width: 200, height: 200},
  btnVentanaSig: {
    margin: 10
  }
})

//Actividad
//
//