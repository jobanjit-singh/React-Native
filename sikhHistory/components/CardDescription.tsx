import React from "react";
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

function openUrl(url: string) {
    Linking.openURL(url);
}
const CardDescription = (props: any) => {
    const item = props.details;
    return (
        <View style={styles.baseCard}>
            <View style={styles.imageView}>
                <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
            </View>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text numberOfLines={6}>{item.description}</Text>
            <TouchableOpacity onPress={() => openUrl(item.articleUrl)}>
                <View style={styles.customButton}>
                    <Text style={styles.readMoreTxt}>Read More</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default CardDescription

const styles = StyleSheet.create({
    baseCard: {
        elevation: 1,
        borderRadius: 10,
        margin: 10,
        padding: 20,
        height: Dimensions.get('window').height - 100,
        width: Dimensions.get('window').width - 18
    },
    imageStyle: {
        height: 300,
        width: 300,
        borderRadius: 10
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
    titleText: {
        fontSize: 25,
        marginTop: 8,
        color: '#000',
        fontWeight: 'bold'
    },
    customButton: {
        backgroundColor: '#000',
        height: 40,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 2
    },
    readMoreTxt: {
        color: '#fff'
    }
})