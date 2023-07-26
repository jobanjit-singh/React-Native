import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const HomeScreen = (props) => {
    return (
        <View style={styles.baseView}>
            <View style={styles.headingView}>
                <Text style={styles.headerText}>Crud Operation</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Add Details')}
                >
                    <View style={styles.buttonBackView}>
                        <Text style={styles.buttonText}>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
        alignItems: 'center',
    },
    headingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonView: {
        flex: 1
    },
    buttonBackView: {
        backgroundColor: 'orange',
        width: Dimensions.get('screen').width - 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})