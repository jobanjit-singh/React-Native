import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FormEntryDetails = (props: any) => {
    return (
        <View style={styles.baseContainer}>
            <Text style={styles.textStyle}> {props.name} </Text>
            <Text style={styles.textStyle}>{props.email}</Text>
            <Text style={styles.textStyle}>{props.password}</Text>
        </View>
    )
}

export default FormEntryDetails

const styles = StyleSheet.create({
    baseContainer: {
        backgroundColor: '#E2E5DE',
        marginTop: 10,
        borderRadius: 10
    },
    textStyle: {
        fontSize: 15,
        color: '#536DFE',
        marginTop: 8,
        marginLeft: 8,
    }
})