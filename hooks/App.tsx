import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {

  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    console.warn("Component Mounted")
  }, [])

  // useEffect(() => {
  //   console.warn('text Updated')
  // }, [text])

  // useEffect(() => {
  //   console.warn('Count Updated ' + count)
  // }, [count])

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>{text} this is text {count}</Text>
        <Button title='Click Me' onPress={() => setText('hello')}> </Button>
        <Button title='Count Update' onPress={() => setCount(count + 1)} />
        <Button title='toggle' onPress={() => setShow(!show)} />
        {
          show ? <User /> : null
        }
      </View>
    </SafeAreaView>
  )
}

const User = () => {
  useEffect(() => {
    return () => console.warn("unmounted")
  })
  return (
    <Text>this is user component</Text>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    margin: 8
  }
})

export default App