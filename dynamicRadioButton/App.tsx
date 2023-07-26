import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {

  const skills = [
    {
      id: 1,
      name: 'Java'
    },
    {
      id: 2,
      name: 'React'
    },
    {
      id: 3,
      name: 'Python'
    }
  ];

  const [skill, setSkill] = useState(0)

  return (
    <View style={styles.baseView}>
      {/** HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dynamic Radio Button</Text>
      </View>

      {/** RADIO BUTTONS */}
      <View style={styles.contentContainer}>
        {
          skills.map((items: any, index: any) =>
            <View>
              <TouchableOpacity
                style={styles.baseContainer}
                onPress={() => {
                  setSkill(items.id)
                }
                }
              >
                <View style={styles.outerCircle}>
                  {
                    skill == items.id ? <View style={styles.innerCircle}></View> : null
                  }
                </View>
                <Text>{items.name}</Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    margin: 10
  },
  headerText: {
    fontSize: 25,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  baseContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  outerCircle: {
    margin: 3,
    height: 20,
    width: 20,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerCircle: {
    height: 12,
    width: 12,
    backgroundColor: 'orange',
    borderRadius: 6
  }
})