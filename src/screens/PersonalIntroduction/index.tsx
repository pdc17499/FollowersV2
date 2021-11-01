import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HEIGHT, WIDTH } from '@utils'
import { ArrowBlue, Logo, One } from '@svg'
import { SNSAccounts } from '@components';

export function PersonalIntroduction({ navigation }: any) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={styles.logo}>
                <Logo />
            </View>

            <View><Text style={styles.title}>Getting started</Text></View>

            <View><Text style={styles.intro}>Personal Introduction</Text></View>

            <View style={{ marginTop: -15 }}>
                <View style={{ flexDirection: 'row', marginTop: HEIGHT * 40 / 896, alignItems: 'center' }}>
                    <View style={{ marginLeft: WIDTH * 24 / 414, }}>
                        <One />
                    </View>
                    <Text style={{
                        marginTop: 3,
                        alignSelf: 'center',
                        marginLeft: 10,
                        fontFamily: 'NotoSans',
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#A8ACAE',

                    }}>(Up to 5 accounts)</Text>

                </View>
                <View style={{ marginHorizontal: WIDTH * 24 / 414, }}>
                    <SNSAccounts />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('PersonalIntroduction2')} style={{ position: 'absolute', top: HEIGHT - 255, left: WIDTH * 24 / 414 }} >
                    <View style={styles.next} >
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans', fontWeight: '600', color: "#3FAEC7", lineHeight: 22, marginRight: 5 }}>
                            Next</Text>
                        <ArrowBlue />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginLeft: WIDTH * 24 / 414,
        marginTop: HEIGHT * 86 / 896
    },
    sns: {
        marginLeft: WIDTH * 12 / 414,
        color: '#191B1D',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '600',
        fontFamily: 'NotoSans',
    },
    title: {
        marginTop: HEIGHT * 32 / 896,
        marginLeft: WIDTH * 24 / 414,
        color: '#5A636D',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '500',
        fontFamily: 'NotoSans',
    },
    intro: {
        marginLeft: WIDTH * 24 / 414,
        marginTop: 5,
        color: '#191B1D',
        fontSize: 28,
        lineHeight: 38,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
    },
    next: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})
