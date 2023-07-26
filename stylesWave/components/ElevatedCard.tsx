import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView style={styles.container} horizontal={true}>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevation]}>
                    <Text style={styles.textColor}>One</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
    },
    container: {
        margin: 8
    },
    card: {
        borderRadius: 8,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    cardElevation: {
        backgroundColor: '#802345',
        elevation: 3
    },
    textColor: {
        color: '#ffffff'
    }
})