import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const NameCard = (props: any) => {
    return (
        <View style={styles.baseContainer}>
            <Text style={{ fontSize: 25, color: 'white', elevation: 3 }}>{props.name}</Text>
        </View>
    )
}

export default NameCard

const styles = StyleSheet.create({
    baseContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080',
        height: 200,
        margin: 20,
        borderRadius: 20,
        elevation: 5
    }
})