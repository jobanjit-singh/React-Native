import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import NameCard from "./components/NameCard";

const App = () => {
  let [name, setName] = useState('')
  return (
    <View>
      <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>Hello {name}</Text>

      <TextInput
        style={styles.textBox}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TouchableOpacity onPress={() => setName('Jit!')}>
        <View style={styles.buttonContainer}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Click Here</Text>
        </View>
      </TouchableOpacity>
      <NameCard name={name} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 20,
    margin: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  },
  textBox: {
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
    elevation: 3,
  }
})