import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Menu from './Menu';

export default function App() {
  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!bhbbhbyhbhbhbwswswswswswswswswswswswswshbhbhb</Text>
      <StatusBar style="auto" />
    </View>*/
    <Menu/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
