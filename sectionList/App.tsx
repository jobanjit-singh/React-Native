import React from 'react';
import { SectionList, StyleSheet, Text, View, } from 'react-native';

const App = () => {
  const list = [
    {
      name: "Joban",
      data: ["android", "c++", "React"]
    },
    {
      name: "Inder",
      data: ["Figma", "HTML", "CSS"]
    },
    {
      name: "Joban",
      data: ["Next.js", "Web", "Node.js"]
    }
  ]
  return (
    <View>
      <Text style={styles.headingText}>Section List</Text>
      <Text style={[styles.headingText, {}]}>this is text</Text>
      <SectionList
        sections={list}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 25 }}>{name}</Text>
        )
        }
      >
      </SectionList>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})