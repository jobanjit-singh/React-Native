import React from "react";
import { Dimensions, StyleSheet, View, Image, ScrollView } from 'react-native';
import Form from "./component/form";
import { login } from "./images";

const App = () => {
  return (
    <ScrollView>
      <View style={styles.mainScreen}>
        <View style={{ elevation: 2 }}>
          <Image source={login} style={styles.imageStyle} />
        </View>
        <Form />
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: '#536DFE',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    alignItems: 'center'
  },
  imageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 50,
  },

})