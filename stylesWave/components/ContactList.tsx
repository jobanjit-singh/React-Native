import React from "react";;
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const ContactList = () => {
    const list = [
        {
            uid: 1,
            name: 'Jobanjit Singh',
            imageurl: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
            status: 'App in'
        },
        {
            uid: 2,
            name: 'Inderpal Singh',
            imageurl: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
            status: 'Figma is Life'
        },
        {
            uid: 3,
            name: 'Harpal Singh',
            imageurl: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
            status: 'Let\'s make another Website'
        }
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView>
                {list.map((listItem) => {
                    return (
                        <View key={listItem.uid} style={styles.baseContainer}>
                            <Image source={{ uri: listItem.imageurl }} style={styles.circleImage} />
                            <View>
                                <Text style={styles.nameText}>{listItem.name}</Text>
                                <Text style={styles.labelText}>{listItem.status}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    },
    baseContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        elevation: 2
    },
    circleImage: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    nameText: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    labelText: {
        fontSize: 18,
        marginLeft: 10
    }

})