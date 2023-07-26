import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AddNote = () => {
  const textcolor = useColorScheme() === 'dark' ? '#CCC' : '#000';

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  return (
    <View style={styles.baseView}>
      {/* header */}
      <View style={styles.header}>
        {/* header Text */}
        <Text style={[styles.headerText, {color: textcolor}]}>Add Note</Text>
      </View>
      {/* Add note Body */}
      <View style={styles.body}>
        <TextInput
          style={styles.titleNote}
          placeholder="Enter Note Title"
          placeholderTextColor={'#000'}
          onChangeText={text => setTitle(text)}
        />

        <TextInput
          style={styles.noteInput}
          placeholder="Enter Note"
          placeholderTextColor={'#000'}
          onChangeText={text => setNote(text)}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
    margin: 20,
  },
  header: {
    height: '10%',
  },
  headerText: {
    fontSize: 40,
  },
  body: {
    flex: 1,
    height: '80%',
  },

  titleNote: {
    padding: 10,
    marginBottom: 10,
    height: '10%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    opacity: 0.6,
    color: '#000',
  },

  noteInput: {
    padding: 10,
    height: '80%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    opacity: 0.6,
    textAlignVertical: 'top',
    color: '#000',
  },

  footer: {
    height: '10%',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF44F',
    borderRadius: 10,
  },

  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
