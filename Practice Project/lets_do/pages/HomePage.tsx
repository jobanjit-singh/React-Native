import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {EmptyData} from '../assets/images';

const HomePage = (props: any) => {
  const textColor = useColorScheme() === 'dark' ? '#ccc' : '#000';

  const goToAddNote = () => {
    props.navigation.navigate('Add Note');
  };

  return (
    <View style={styles.baseView}>
      {/* Header Notes */}
      <View style={styles.header}>
        <Text style={[styles.headingText, {color: textColor}]}>Your Notes</Text>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => goToAddNote()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* Body Notes */}
      <View style={styles.body}>
        {<Image source={EmptyData} style={styles.imageStyle} />}
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
  },

  header: {
    height: '10%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  headingText: {
    fontSize: 40,
    width: '90%',
    textAlignVertical: 'center',
  },

  buttonBack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    opacity: 0.8,
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 18,
    color: '#000',
  },

  buttonText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: 30,
  },

  body: {
    height: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    flex: 1,
    width: '50%',
    resizeMode: 'contain',
  },
});
