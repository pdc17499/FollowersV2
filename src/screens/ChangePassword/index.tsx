import { Back } from '@svg'
import { HEIGHT, WIDTH } from '@utils'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function ChangePassword({ navigation }: any) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}><Back /></TouchableOpacity>
                    <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: '#191B1D', marginLeft: 55, }}>
                        Change Password</Text>
                </View>



            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: WIDTH * 24 / 414,
        flex: 1
    },
    userName: {
        color: '#2B8093',
        fontFamily: 'NotoSans-Bold',
        fontSize: 16,
        marginLeft: 15
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 60 / 896,
        marginLeft: 10,


    },

})
