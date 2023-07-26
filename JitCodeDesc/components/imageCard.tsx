import React from "react"
import { StyleSheet, Image, View, Dimensions } from 'react-native'

const ImageCard = () => (
    <Image source={require('/home/jobanjitsingh/React Native/passwordGenerator/images/logo.png')} resizeMode="cover" style={styles.imageContainer} />
)

export default ImageCard

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get('window').width,
        height: 350,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginBottom: 10,
        elevation: 3
    }
})