import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App