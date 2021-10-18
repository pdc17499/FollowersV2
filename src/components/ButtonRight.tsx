import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export function ButtonRight({ name }: any) {
    return (
        <View style={styles.button} >
            <View><Text style={{ color: '#5A636D', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>{name}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 60,
        width: 130,
        marginLeft: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#5A636D',
        justifyContent: 'center'
    },

})
