import { useState } from 'react';
import { View, Button, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
export const HomeScreen = (props: any) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <View style={styles.homeScreenView}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your name'
                    placeholderTextColor={'#909090'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Enter your age'
                    placeholderTextColor={'#909090'}
                    value={age}
                    onChangeText={(text) => setAge(text)}
                />
            </View>
            <View style={styles.buttonView}>
                <Text style={styles.textStyle}>Home Screen</Text>
                <Button
                    title='Go to Details'
                    onPress={() => props.navigation.push('DetailsScreen', { name, age })}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#000'
    },
    inputView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        width: Dimensions.get('screen').width - 50,
        backgroundColor: '#fff',
        elevation: 5,
        margin: 10,
        borderRadius: 10,
        color: '#000',
    }
})