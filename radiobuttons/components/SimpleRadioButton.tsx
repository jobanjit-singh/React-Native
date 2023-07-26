import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SimpleRadioButton = () => {
    const [show, setShow] = useState(1)
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                onPress={() => setShow(1)}
            >
                <View style={styles.radioContainer}>
                    <View style={styles.radioButtonBack}>
                        <View style={show == 1 ? styles.radioButton : null}>

                        </View>
                    </View>
                    <Text>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setShow(2)}
            >
                <View style={styles.radioContainer}>
                    <View style={styles.radioButtonBack}>
                        <View style={show == 2 ? styles.radioButton : null}>
                        </View>
                    </View>
                    <Text>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SimpleRadioButton

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioButtonBack: {
        height: 30,
        width: 30,
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 15,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: 'skyblue',
        borderRadius: 10,

    }
})