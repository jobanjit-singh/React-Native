import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleRadioButton from './components/SimpleRadioButton';
import CheckBox from './components/CheckBox';
import CustomRadio from './components/CustomRadio';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.heading}>
        <Text style={styles.headingText} >Radio Buttons Design</Text>
      </View>
      <View style={styles.simpleRadioButton}>
        <SimpleRadioButton />
      </View>
      <View style={styles.checkBox}>
        <CheckBox />
      </View>
      <View style={styles.customRadio}>
        <CustomRadio heightRadio={40} colorRadio={'skyblue'} />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 8
  },
  simpleRadioButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  customRadio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    flex: 1,
    alignItems: 'center'
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})
