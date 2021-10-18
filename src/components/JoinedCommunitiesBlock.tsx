import { joinedCommunities } from '@mocks'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const JOINED = joinedCommunities.data

export function JoinedCommunitiesBlock({ name, uri }: any) {
    return (
        <View style={styles.block} >
            <Image source={{ uri: uri }} style={styles.image}></Image>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#F6F5E8',
        height: 70,
        borderRadius: 15,
        // justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: "row",
        marginRight: 15,
        marginTop: 15
    },
    text: {
        color: '#5A636D',
        fontSize: 18,
        fontFamily: 'NotoSans-Bold',
        // alignSelf: 'center',
        marginHorizontal: 15

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 12

    }

})
