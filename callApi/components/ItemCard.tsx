import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const ItemCard = (props: any) => {
    const item = props.data
    return (
        <View key={item.id} style={styles.baseView}>
            <Text >{item.id}</Text>
            <Text >{item.title}</Text>
            <Text numberOfLines={1}>{item.body}</Text>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    baseView: {
        margin: 8,
        elevation: 1,
        padding: 4,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'grey'
    }
})
