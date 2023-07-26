import React from "react"
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  useColorScheme,
  StyleSheet
} from 'react-native'

function App() {
  const isDark = useColorScheme() === "dark"
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={isDark ? style.whiteText : style.BlackText}>Hello React</Text>
        <Text>Hello React</Text>
        <Text>Hello React</Text>
        <Text>Hello React</Text>
        <TextInput></TextInput>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  BlackText: {
    color: '#000000'
  }
})

export default App; 