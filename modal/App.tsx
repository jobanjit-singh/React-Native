import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';

const App = () => {
  const [Modals, setModals] = useState(false)
  return (
    <View style={styles.mainView}>

      <Modal
        transparent={true}
        visible={Modals}
        animationType='fade'
      >
        <View style={styles.ModalBack}>
          <View style={styles.modalBaseBack}>
            <Text>This is Modal</Text>
            <Pressable
              onPress={() => setModals(false)}
            >
              <Text style={styles.ModalButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.headerText}>Modal in React</Text>
      <View style={styles.baseContainer}>
        <Pressable style={styles.buttonView}
          onLongPress={() => setModals(true)}
          delayLongPress={1000}
        >
          <Text>Open Modal (Long Press)</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20
  },
  buttonView: {
    justifyContent: 'flex-end',
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  baseContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBaseBack: {
    backgroundColor: '#fff',
    padding: 10,
    elevation: 5,
    borderRadius: 10
  },
  ModalBack: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  ModalButtonText: {
    textAlign: 'center',
    backgroundColor: 'orange',
    marginTop: 10,
    borderRadius: 10,
    elevation: 3
  }
})