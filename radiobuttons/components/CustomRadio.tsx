import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomRadio = (props: any) => {
    const [show, setShow] = useState(1)
    return (
        <View style={[styles.baseView, { height: props.heightRadio }]}>
            <TouchableOpacity style={[styles.Button]}
                onPress={() => setShow(1)}
            >
                <View style={styles.Button}>
                    {
                        show == 1 ?
                            <View style={[styles.leftButtonClickStyle, { height: props.heightRadio, backgroundColor: props.colorRadio }]}>
                                <Text style={styles.clickText}>Male</Text>
                            </View>
                            : <Text style={{ color: props.colorRadio }}>Male</Text>
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Button]}
                onPress={() => setShow(2)}
            >
                <View style={styles.Button}>
                    {
                        show == 2 ?
                            <View style={[styles.rightButtonClickStyle, { backgroundColor: props.colorRadio, height: props.heightRadio }]}>
                                <Text style={styles.clickText}>Female</Text>
                            </View> : <Text style={{ color: props.colorRadio }}>Female</Text>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomRadio

const styles = StyleSheet.create({
    baseView: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginLeft: 18,
        marginRight: 18,
        borderRadius: 10,
    },
    Button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    rightButtonClickStyle: {
        flex: 1,
        width: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftButtonClickStyle: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    clickText: {
        color: 'grey'
    }
})