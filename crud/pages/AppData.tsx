import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from "axios";

const AppData = () => {


    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const addDetails = async () => {
        if (name.length == 0 && age.length == 0) {
            setNameError(true)
            setAgeError(true)
            return
        }
        if (name.length == 0) {
            setNameError(true)
            return
        }
        if (age.length == 0) {
            setAgeError(true)
            return
        }
        const url = "http://localhost:3000/users/";
        console.warn(url)
        const result = await axios.post(url,
            {
                name: { name },
                age: { age }
            },
        )
        console.warn(result)
        // const var1 = await result.json();
        if (result) {
            console.warn('Data Added')
        }
        // }
        // catch {
        //     console.warn('Error')
        // }
    }
    const setNameInput = (text: string) => {
        setName(text)
        setNameError(false)
    }
    const setAgeInput = (text: string) => {
        setAge(text)
        setAgeError(false)
    }
    return (
        <View style={styles.baseView}>
            <View style={styles.headingView}>
                <Text style={styles.headingText}>Add Details</Text>
            </View>
            <View style={styles.formView}>
                {/** Name TextBox */}
                <View>
                    <Text>Name</Text>
                    <View style={styles.nameInputBack}>
                        <TextInput
                            style={{ color: 'black' }}
                            value={name}
                            onChangeText={(text) => setNameInput(text)}
                            placeholder="Enter your Name"
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    {nameError ?
                        <Text style={styles.errorText}>Name is Required</Text> :
                        null
                    }
                </View>
                {/* Age TextBox */}
                <View>
                    <Text>Age</Text>
                    <View style={styles.nameInputBack}>
                        <TextInput
                            style={{ color: 'black' }}
                            value={age}
                            onChangeText={(text) => setAgeInput(text)}
                            placeholder="Enter your Age"
                            placeholderTextColor={'grey'}
                            inputMode="numeric"
                        />
                    </View>
                    {ageError ?
                        <Text style={styles.errorText}>Age is Required</Text> :
                        null
                    }
                </View>

                {/** Add Button */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => addDetails()}
                    >
                        <View style={styles.buttonBackView}>
                            <Text style={styles.buttonText}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AppData

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
    },
    headingView: {
        flex: 1,
        justifyContent: 'center'
    },
    headingText: {
        fontSize: 45,
        marginStart: 10,
        fontWeight: 'bold'
    },
    formView: {
        flex: 3,
        justifyContent: 'center',
        margin: 10
    },
    nameInputBack: {
        backgroundColor: '#DADADA',
        borderRadius: 10
    },
    buttonBackView: {
        width: Dimensions.get('screen').width - 30,
        height: 40,
        backgroundColor: 'orange',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginStart: 5
    }
})