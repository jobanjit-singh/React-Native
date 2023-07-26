import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FormEntryDetails from "./FormEntryDetails";

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showDetails, setShowDetails] = useState(false)
    function getDetails() {
        showDetails ? setShowDetails(false) : setShowDetails(true)
    }
    return (
        <View style={styles.baseFormContainer}>
            <Text style={styles.signUpText}>Sign Up</Text>

            <Text style={styles.text}>Name</Text>
            <TextInput
                style={styles.inputBox}
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.inputBox}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={getDetails}>
                <View style={styles.customButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </View>
            </TouchableOpacity>
            {
                showDetails ? <FormEntryDetails name={name} email={email} password={password} /> : null
            }
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({
    baseFormContainer: {
        backgroundColor: "#ffffff",
        margin: 10,
        borderRadius: 10,
        padding: 10,
        width: Dimensions.get('screen').width - 50,
        elevation: 10
    },
    signUpText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#536DFE'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5
    },
    inputBox: {
        backgroundColor: '#E2E5DE',
        height: 40,
        borderRadius: 10,
        padding: 10,
        elevation: 1
    },
    customButton: {
        backgroundColor: '#536DFE',
        height: 40,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})