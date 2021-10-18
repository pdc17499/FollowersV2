import React from 'react'
import { FlatList, Image, StyleSheet, Text, View, } from 'react-native'
import { activitiesLog } from '@mocks'
import StyledText from 'react-native-styled-text';


const DATA = activitiesLog.data
export function ActivitiesLog() {

    const renderItem = ({ item }: any) => (

        <View style={styles.item} >
            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: item.seen ? '#F6F5E8' : '#406FF1', marginTop: 20, marginRight: 5 }}></View>
            <View>
                <Image source={{ uri: item.uri }} style={styles.image} ></Image>
            </View>
            <View style={{ marginLeft: 10, width: '80%' }}>
                <StyledText style={styles.styled} textStyles={textStyles}>{`<name>${item.name}</name> ${item.message}`}</StyledText>
                <Text style={{ fontSize: 13, fontFamily: 'NotoSans', color: '#5A636D', marginTop: 5 }}> {item.time}</Text>
            </View>
        </View >
    )


    return (
        <View style={styles.container}>

            <FlatList
                style={{ marginBottom: 10 }}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F6F5E8',

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    item: {
        height: 71,
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        marginLeft: 10,
        marginTop: 30
    },
    styled: {
        fontSize: 15, fontFamily: 'NotoSans', color: '#5A636D'

    }
})

const textStyles = StyleSheet.create({
    name: {
        fontSize: 15, fontFamily: 'NotoSans-Bold', color: 'black'
    },
});
