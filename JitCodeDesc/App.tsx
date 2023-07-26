import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ImageCard from './components/imageCard'
import TextCom from './components/TextCom'

const App = () => (
  <View style={{ backgroundColor: '#121212' }}>
    <ScrollView>
      <SafeAreaView>
        <ImageCard />
        <TextCom />
      </SafeAreaView>
    </ScrollView>
  </View>
)

export default App