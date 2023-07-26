import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

const App = () => {

  const [show, setShow] = useState(true)
  const hide = () => {
    setTimeout(() => {
      setShow(false)
    }, 5000);
  }
  return (
    <View style={styles.baseView}>
      <Text style={styles.headerText}>Activity Indicator</Text>
      <ActivityIndicator color={'orange'} size={'large'} animating={show} />
      <Button title='hide button after 5 sec' onPress={() => hide()} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  baseView: {
    flex: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25
  }
})