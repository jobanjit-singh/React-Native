import React from 'react';
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = () => {
  function openYoutube(url: string) {
    Linking.openURL(url);
  }
  function openInsta(url: string) {
    Linking.openURL(url);
  }
  function openLinkedIn(url: string) {
    Linking.openURL(url);
  }
  return (
    <View style={styles.main}>
      <View style={styles.TextContainer}>
        <Text style={styles.actualText}>Jit Code</Text>
      </View>
      <View style={styles.linkContainer}>
        {/* youtube channel */}
        <TouchableOpacity
          onPress={() => openYoutube('https://www.youtube.com/jitcode')}
        >
          <Text style={styles.linkButton}>Youtube Channel</Text>
        </TouchableOpacity>

        {/* insta */}
        <TouchableOpacity
          onPress={() => openInsta('https://www.instagram.com/jit_code/')}
        >
          <Text style={styles.linkButton}>Instagram</Text>
        </TouchableOpacity>

        {/* linked in */}
        <TouchableOpacity
          onPress={() => openLinkedIn('https://www.linkedin.com/in/jobanjit-singh-b86723215/')}
        >
          <Text style={styles.linkButton}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>Work Hard {'\n'} Don't think about Rewards</Text>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'gray'
  },
  TextContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actualText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'orange',
    elevation: 2
  },
  linkContainer: {
    flex: 3,
    alignItems: 'center'
  },
  linkButton: {
    backgroundColor: 'orange',
    width: Dimensions.get('screen').width - 50,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    elevation: 2
  },
  quoteContainer: {
    flex: 1,
    alignItems: 'center'
  },
  quote: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: 'orange'
  }
})