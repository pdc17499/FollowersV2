import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, Dimensions, Alert } from 'react-native'
import { HEADER_LEFT, ARROW_VECTOR, VERIFY } from '@assets';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { HEIGHT, WIDTH } from '@utils'
import { verificationCode } from '@mocks';
import { Back } from '@svg';

export function Verification({ navigation }: any) {

    const CELL_COUNT = 4;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const onVerify = () => {
        (value === verificationCode.data) ? navigation.navigate('ResetPassword')
            : Alert.alert('Your code is not correct !')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <View style={{ marginLeft: WIDTH * 32 / 414, marginTop: 7 }} >
                            <Back></Back>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: HEIGHT * 130 / 896,

                }}>
                    <Text style={styles.text} >Verification Code</Text>
                    <Text style={{
                        marginTop: 5,
                        textAlign: 'center',
                        marginHorizontal: 70,
                        fontSize: 16,
                        fontWeight: '500',
                        alignSelf: 'center',
                        fontFamily: 'NotoSans',
                        color: '#C6CBCC',
                        lineHeight: 22.5,
                    }}>
                        Enter the OTP code from the phone we just send you</Text>
                </View>

                <View>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View
                                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                                onLayout={getCellOnLayoutHandler(index)}
                                key={index}
                                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                                <Text style={styles.cellText}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                <TouchableOpacity onPress={onVerify}>
                    <View style={styles.login} >
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>Verify</Text>
                        <Image source={VERIFY}></Image>

                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 24, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'NotoSans',
                        color: '#2B3641',
                        marginRight: 3
                    }}>Didn't receive OTP code?</Text>
                    <TouchableOpacity onPress={() => setValue('')}>
                        <Text style={{
                            color: '#3FAEC7',
                            fontSize: 16,
                            fontFamily: 'NotoSans'
                        }}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: HEIGHT * 86 / 896,
    },
    login: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        marginTop: HEIGHT * 48 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: '#3FAEC7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 28,
        fontWeight: '600',
        alignSelf: 'center',
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
        lineHeight: 38.14
    },
    codeFieldRoot: {
        marginTop: 20,
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cellRoot: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#5A636D',
        borderBottomWidth: 2,
    },
    cellText: {
        color: '#5A636D',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    }
})
