import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

const openJitCode = () => {
    Linking.openURL('https://www.youtube.com/jitcode')
}

const TextCom = () => {
    return (
        <View>
            <View style={{ flexDirection: "row", margin: 10 }}>
                <Text style={styles.textHeading}>Jit Code</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", width: 230 }}>
                    <TouchableOpacity onPress={() => openJitCode()}>
                        <View style={styles.buttonViewMore}>
                            <Text style={styles.viewMoreTextStyle}>View More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <ScrollView>
                    <Text style={styles.descriptionText}>Welcome to our programming and development channel ! Here, we provide high-quality tutorials, courses, and roadmaps to help you learn programming languages and advance your skills in software development.

                        Whether you're a beginner or an experienced programmer, our content is tailored to your needs and designed to help you succeed in your learning journey. Our team of experienced instructors covers a wide range of topics, including popular languages like Python, JavaScript, and Java, as well as cutting-edge technologies like machine learning and blockchain.

                        We believe that everyone should have access to quality education, which is why our content is always free and accessible to all. Join our community of learners today and take the first step towards mastering the art of programming!</Text>
                </ScrollView>
            </View>
        </View>
    )
}

export default TextCom

const styles = StyleSheet.create({
    textHeading: {
        color: "#ffffff",
        margin: 10,
        fontSize: 35,
        elevation: 5,
    },
    buttonViewMore: {
        backgroundColor: "#ffa500",
        width: 80,
        height: 30,
        color: '#000',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewMoreTextStyle: {
        fontWeight: 'bold',
    },
    descriptionContainer: {
        height: 250,
        margin: 15,
    },
    descriptionText: {
        color: '#fff',
        lineHeight: 22,
        fontSize: 20
    }
})