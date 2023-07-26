import React from "react";
import { StyleSheet, Text, View } from 'react-native'

const FlatCards = () => {
    return (
        <View>
            <View>
                <Text style={styles.textStyle}>Flat Card</Text>
            </View>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Card 1</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Card 2</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Card 3</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    container: {
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 100,
        width: 100,
        margin: 10
    },
    cardOne: {
        backgroundColor: '#808080'
    }
})