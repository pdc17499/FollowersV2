import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export function ButtonRight({ name }: any) {
    return (
        <View style={styles.button} >
            <View><Text style={{ color: '#A8ACAE', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>{name}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2B3641',
        height: 60,
        width: 130,
        marginLeft: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A8ACAE',
        justifyContent: 'center'
    },

})
