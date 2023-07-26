import React from "react";
import { Image, StyleSheet, Text, View, useColorScheme, TouchableOpacity, Linking } from 'react-native';

var isDark

const FancyCard = () => {
    isDark = useColorScheme() === 'dark'
    function openWebsite(link: string) {
        Linking.openURL(link);
    }
    return (
        <View>
            <Text style={styles.headingText}>Fancy Card</Text>
            <View style={styles.baseCard}>
                <Text style={styles.textColor}>Golden Temple</Text>
                <Image style={[styles.imageStyle]} source={{ uri: 'https://cdn.britannica.com/13/173813-050-1DCA15F5/Harmandir-Sahib-Amritsar-India-Punjab.jpg?w=300' }} />
                <Text style={styles.textLabel}>Harmandir Sahib</Text>
                <Text style={styles.textDescription}>The first Harmandir Sahib was built in 1604 by Arjan, the fifth Sikh Guru, who symbolically had it placed on a lower level so that even the humblest had to step down to enter it. He also included entrances on all four sides, signifying that it was open to worshippers of all castes and creeds. The foundation stone was laid by Mian Mīr, a Muslim divine of Lahore (now in Pakistan). The temple was destroyed several times by Afghan invaders and was finally rebuilt in marble and copper overlaid with gold foil during the reign (1801–39) of Maharaja Ranjit Singh. The structure thus became known as the Golden Temple.</Text>
                <View style={styles.textJustify}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.britannica.com/topic/Harmandir-Sahib')}
                    >
                        <Text style={styles.textColor}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    baseCard: {
        backgroundColor: isDark ? '#CCCCCC' : '#6a6a6a',
        margin: 10,
        borderRadius: 10,
        elevation: 5
    },
    textColor: {
        color: '#ffffff',
        margin: 5,
        fontSize: 25
    },
    textLabel: {
        fontSize: 20,
        color: '#ffffff',
        margin: 8,
    },
    imageStyle: {
        height: 200,
    },
    textDescription: {
        fontSize: 15,
        color: '#fff',
        margin: 8,
    },
    textJustify: {
        alignContent: 'center',
        alignItems: 'center',
    }
})