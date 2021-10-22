import React from 'react';
import { StyleSheet, Alert, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as yup from 'yup';
import { dataUser } from '@mocks';
import { AppText } from '@components'
import { HEIGHT, I18n, WIDTH } from '@utils'
import { ArrowRight } from '@svg';

export function ForgotPassword({ navigation }: any) {

    const formInitialValues = {
        email: '',
        error: '',
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required(`${I18n.trans('forgot.requiredEmail')}`)
            .max(100, `${I18n.trans('forgot.maxEmail')}`)
            .email(`${I18n.trans('forgot.invalidEmail')}`),
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={styles.text}>{I18n.trans('forgot.forgotPasswordTxt')}</Text>
                    <Text style={styles.textUnder}>{I18n.trans('forgot.title')}</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.minitext}>{I18n.trans('forgot.email')}</Text>
                </View>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={values => {
                        if (values.email === dataUser.data.user.email) navigation.navigate('Verification')
                        else Alert.alert(`${I18n.trans('forgot.emailNotFound')}`)
                    }}
                >
                    {props => (
                        <View>
                            <TextInput
                                style={styles.input} placeholder={'Your email'}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />

                            {props.errors.email && (
                                <AppText style={styles.error}>
                                    {props.errors.email}
                                </AppText>
                            )}

                            <TouchableOpacity onPress={props.handleSubmit}>
                                <View style={styles.login} >
                                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>
                                        {I18n.trans('forgot.submit')}</Text>
                                    <ArrowRight />

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                                <View style={styles.login2} >
                                    <Text style={{
                                        fontSize: 16,
                                        fontFamily: 'NotoSans-Bold',
                                        fontWeight: '600',
                                        lineHeight: 22,
                                        color: '#2B3641',
                                        marginRight: 5
                                    }}>{I18n.trans('forgot.back')}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontWeight: '600',
        alignSelf: 'center',
        fontFamily: 'NotoSans-Bold',
        marginTop: HEIGHT * 233 / 896,
        color: '#191B1D',
        lineHeight: 38.14
    },
    // 1@gmail.com
    textUnder: {
        fontFamily: 'NotoSans',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22.4,
        color: '#5A636D',
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 25
    },
    input: {
        paddingLeft: 15,
        paddingRight: 15,
        width: WIDTH * 366 / 414,
        height: HEIGHT * 60 / 896,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        marginLeft: WIDTH * 25 / 414,
        borderRadius: 8
    },
    minitext: {
        fontSize: 16,
        lineHeight: 25.6,
        fontWeight: '500',
        fontFamily: 'NotoSans',
        color: '#A8ACAE',
        marginLeft: WIDTH * 25 / 414,
        marginTop: HEIGHT * 16 / 896,
        marginBottom: 5,
    },
    login: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        marginTop: HEIGHT * 36 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: '#3FAEC7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    login2: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        marginTop: HEIGHT * 20 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#2B3641',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    error: {
        marginLeft: 27,
        color: 'red',
        fontSize: 14,
    },
});
