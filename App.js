import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/vara.png")} />
       <Text> - </Text>
       <Text style={{fontSize: 20}}> JÃO FISHING </Text> 
       <Text> TuD0o Qui Vuxe pReSiza  </Text>
       <Text> -- Peixe do BÃO --</Text>
    </View>
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
