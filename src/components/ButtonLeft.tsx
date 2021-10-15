import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export function ButtonLeft({ name }: any) {
    return (
        <View style={styles.button} >
            <View><Text style={{ color: 'white', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>{name}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3FAEC7',
        height: 60,
        width: 130,
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },

})
