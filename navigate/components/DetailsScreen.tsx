import { View, Button, Text, StyleSheet } from 'react-native';

export const DetailsScreen = (props: any) => {
    const { name, age } = props.route.params
    return (
        <View style={styles.homeScreenView}>
            <Text style={styles.textStyle}>Details Screen</Text>
            <Text style={styles.textStyle}>Name: {name}</Text>
            <Text style={styles.textStyle}>Age: {age}</Text>
            <Button
                title='Go to Details'
                onPress={() => props.navigation.push('DetailsScreen')}
            />
            <Button
                title='Go to First Screen'
                onPress={() => props.navigation.popToTop()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#000'
    }
})