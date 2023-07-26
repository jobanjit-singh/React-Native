import React from "react";
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { back, back1 } from "./assets";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          flex: 1
        }}
        blurRadius={10}
        source={back1}
        resizeMode="cover"
      >
        <View style={{
          backgroundColor: 'rgba(94,94,94,0.3)',
          borderColor: '#fff',
          margin: 10,
          flex: 1,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 8.9,
          shadowOpacity: 1,
          elevation: 2,
        }}
        >
          <Text
            style={{
              flex: 1,
              color: '#fff',
              textAlign: 'center',
              fontSize: 45,
            }}
          >Login</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default App