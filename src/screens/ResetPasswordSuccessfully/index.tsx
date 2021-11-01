import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CHECK_CIRCLE } from '@assets';
import { HEIGHT, WIDTH } from '@utils'

export function ResetPasswordSuccessfully({ navigation }: any) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <Image source={CHECK_CIRCLE} style={styles.circle}></Image>
                </View>

                <View>
                    <Text style={styles.alert}>
                        Your password has been reset successfully!
                    </Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.login2} >
                        <Text style={{
                            fontSize: 16, color: '#2B3641', fontFamily: 'NotoSans-Bold', fontWeight: '600', lineHeight: 22, textAlign: 'center'
                        }}>
                            Back to login</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    alert: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: WIDTH * 80 / 414,
        marginTop: HEIGHT * 32 / 896,
        color: '#5A636D',
        fontFamily: 'NotoSans',
        fontWeight: '500',
    },

    login2: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        marginTop: HEIGHT * 65 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderEndColor: '#2B3641',
        borderRadius: 8,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    circle: {
        marginTop: HEIGHT * 231 / 896,
        alignSelf: 'center'
    }
})
