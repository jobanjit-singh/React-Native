import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardDescription from './components/CardDescription';
const App = () => {
  const martyrs = [
    {
      imageUrl: "https://www.sikh24.com/wp-content/uploads/2017/07/Bhai-Taru-Singh.jpg",
      name: "Bhai Taru Singh Ji",
      description: 'Gurdwara Shaheed Bhai Taru Singh (Punjabi and Urdu: گوردوارہ شہید بھائی تارو سنگھ) or Gurdwara Shahidi Asthan Bhai Taru Singh ji[1][2] is a Sikh Gurdwara at Naulakha Bazaar in Lahore, Pakistan, which commemorates the spot where Bhai Taru Singh was executed.[3][4][5][6] The shrine was built on the grounds of the Shaheed Ganj Mosque, leading to a legal dispute over ownership that began in 1850.[7] British, and later Pakistani, courts upheld the right of Sikhs to maintain a place of worship at the site.[8] While a settlement was being negotiated by British authorities, a group of Sikhs demolished the mosque on 7–8 July 1935, triggering communal riots.[9]In December of 2022, the official Gurdwara’s doors where locked by the local people was turned into a mosque.',
      articleUrl: "https://en.wikipedia.org/wiki/Gurdwara_Shaheed_Bhai_Taru_Singh",
    },
    {
      imageUrl: "https://www.sikhnet.com/files/styles/social-sharing/public/news/image/main/Bhai_Mani_Singh_jee.jpg?itok=7KgTD-Rw",
      name: "Bhai Mani Singh Ji",
      description: 'Bhai Mani Singh ji is the most revered Sikh scholar and martyr. He was a very brave warrior as well as an elite scholar. He was a saint soldier in the real sense',
      articleUrl: "https://www.sikhnet.com/news/bhai-mani-singh-ji"
    }
  ];
  return (
    <View>
      <Text style={styles.headingText}>Sikh History</Text>
      <View>
        <FlatList horizontal={true}
          data={martyrs}
          renderItem={({ item }) => <CardDescription details={item} />}
        />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  headingText: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    elevation: 2
  }
})