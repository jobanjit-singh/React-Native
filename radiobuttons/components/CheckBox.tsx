import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CheckBox = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={styles.baseContainer}>
            <TouchableOpacity
                onPress={() => setShow(!show)}
            >
                <View style={styles.outerBox}>
                    <View style={show ? styles.innerMark : null}>
                        <View style={show ? styles.markLeft : null} />
                        <View style={show ? styles.markRight : null} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CheckBox;

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outerBox: {
        height: 20,
        width: 20,
        borderColor: 'grey',
        borderWidth: 2,
    },
    innerMark: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    markLeft: {
        position: 'absolute',
        marginLeft: 4,
        height: 5,
        borderWidth: 1,
        borderColor: 'white',
        transform: [{ rotate: '-40deg' }]
    },
    markRight: {
        position: 'absolute',
        marginLeft: 8,
        height: 9,
        borderWidth: 1,
        borderColor: 'white',
        transform: [{ rotate: '40deg' }]
    }
})