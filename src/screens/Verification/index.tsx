import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from 'react-native'
import { VERIFY } from '@assets';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { HEIGHT, I18n, WIDTH } from '@utils'
import { verificationCode } from '@mocks';
import { Back } from '@svg';
import { verifyCodeApi } from '@services';

export function Verification({ route, navigation }: any) {

    const { email } = route.params
    console.log('emailll', email);


    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const onVerify = async () => {
        try {
            const response: any = await verifyCodeApi({ "email": email, "code": value, "type": 1, "device_token": "uulq84ejbkPeWTzIgZcDGqUAhbsY6ZPdbLyr61Y2sSLtXx-DtSS3XLqnuyWHNu1n6DbH0cURQeqc4FT5asddasdaN" });
            console.log('rs', response);
            if (response.success) {
                navigation.navigate('ResetPassword', { email: email })
            }
        } catch (error) {
            console.log(error);
            Alert.alert(`${I18n.trans('verification.wrongCode')}`)
        }
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

                <View style={{ marginTop: HEIGHT * 130 / 896 }}>
                    <Text style={styles.text} >{I18n.trans('verification.verification')}</Text>
                    <Text style={styles.titleTxt}>
                        {I18n.trans('verification.title')}</Text>
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
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>{I18n.trans('verification.verify')}</Text>
                        <Image source={VERIFY}></Image>
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 24, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'NotoSans',
                        color: '#2B3641',
                        marginRight: 3
                    }}>{I18n.trans('verification.didntOTP')}</Text>
                    <TouchableOpacity onPress={() => setValue('')}>
                        <Text style={{
                            color: '#3FAEC7',
                            fontSize: 16,
                            fontFamily: 'NotoSans'
                        }}>{I18n.trans('verification.resend')}</Text>
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
    },
    titleTxt: {
        marginTop: 5,
        textAlign: 'center',
        marginHorizontal: 70,
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
        fontFamily: 'NotoSans',
        color: '#C6CBCC',
        lineHeight: 22.5,
    }
})

