import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export function Community({ name, members, uri }: any) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image source={{ uri: uri }} style={styles.image}></Image>
            <View style={{ marginLeft: 20 }}>

                <Text style={styles.name}>{name}</Text>
                <Text style={styles.mem}>{members} members</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
        lineHeight: 25,
        color: '#191B1D'
    },
    mem: {
        color: '#A8ACAE',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'NotoSans',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 12
    }
})
