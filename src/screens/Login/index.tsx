import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { dataUser } from '@mocks';
import * as yup from 'yup';
import { AppText } from '@components'
import { ArrowRight, Eye, EyeSlash, LoginLogo } from '@svg';
import { HEIGHT, WIDTH } from '@utils'
import { useDispatch } from 'react-redux';
import { setUserInfo, setToken } from '@redux';
import { I18n } from '@utils';

export function Login({ navigation }: any) {

    const [showPassword, setShowPassword] = useState(false)
    const formInitialValues = {
        email: '',
        password: '',
        error: '',
    };
    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required(`${I18n.trans('login.requiredEmail')}`)
            .max(100, `${I18n.trans('login.maxEmail')}`)
            .email(`${I18n.trans('login.invalidEmail')}`),
        password: yup
            .string()
            .required(`${I18n.trans('login.requiredPassword')}`)
            .matches(
                // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                /^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z\d@$!%*#?&;,]{6,32}$/,
                `${I18n.trans('login.invalidPassword')}`
            ),
    });
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={styles.logo}>
                    <LoginLogo></LoginLogo>
                </View>
                <Text style={styles.text}>{I18n.trans('login.loginBtn')}</Text>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={values => {
                        if ((values.email === dataUser.data.user.email && values.password === dataUser.data.user.password) == true) {
                            dispatch(setUserInfo(dataUser.data.user)),
                                dispatch(setToken(dataUser.data.token)),
                                navigation.navigate('MyHome')
                        }
                        else {
                            Alert.alert(`${I18n.trans('login.userNotFound')}`)
                        }
                    }}
                >
                    {props => (
                        <View>
                            <Text style={styles.minitext}>{I18n.trans('login.email')}</Text>
                            <TextInput
                                style={styles.input} placeholder={`${I18n.trans('login.emailPlaceholder')}`}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                            {props.errors.email && (
                                <AppText style={styles.error}>
                                    {props.errors.email}
                                </AppText>
                            )}

                            <Text style={styles.minitext}>{I18n.trans('login.password')}</Text>

                            <View >
                                <TextInput style={styles.inputPass} placeholder={`${I18n.trans('login.passwordPlaceholder')}`}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password} secureTextEntry={!showPassword} ></TextInput>

                                {props.errors.password && (
                                    <AppText style={styles.error}>
                                        {props.errors.password}
                                    </AppText>
                                )}
                                {(showPassword == true)
                                    ?
                                    <TouchableOpacity onPress={() => setShowPassword(false)} style={styles.eye}>
                                        <Eye />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setShowPassword(true)} style={styles.eye}>
                                        <EyeSlash />
                                    </TouchableOpacity>
                                }
                                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>

                                    <Text style={styles.minitext2}>{I18n.trans('login.forgotPasswordTxt')}</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={props.handleSubmit}>
                                <View style={styles.login} >
                                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>{I18n.trans('login.loginBtn')}</Text>
                                    <ArrowRight />
                                </View>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', marginTop: 24, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontFamily: 'NotoSans',
                                    color: '#2B3641',
                                    marginRight: 3
                                }}>{I18n.trans('login.dontHaveAccount')}</Text>

                                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                    <Text style={{
                                        color: '#3FAEC7',
                                        fontSize: 16,
                                        fontFamily: 'NotoSans',
                                    }}>{I18n.trans('login.register')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: HEIGHT * 121 / 896
    },
    text: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '600',
        alignSelf: 'center',
        fontFamily: 'NotoSans-Bold',
        marginTop: HEIGHT * 67 / 896,
        color: '#191B1D',
        lineHeight: 38.14
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
    inputPass: {
        paddingLeft: 15,
        paddingRight: 60,
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

    minitext2: {
        fontSize: 16,
        lineHeight: 25.6,
        fontWeight: '500',
        fontFamily: 'NotoSans',
        color: '#A8ACAE',
        alignSelf: 'flex-end',
        marginRight: WIDTH * 24 / 414,
        marginTop: HEIGHT * 16 / 896
    },
    eye: {
        position: 'absolute',
        top: HEIGHT * 11 / 896,
        left: WIDTH * 339.5 / 414,
    },

    login: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        marginTop: HEIGHT * 33 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: '#3FAEC7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    error: {
        marginLeft: 27,
        marginRight: 20,
        color: 'red',
        fontSize: 14,
    },

});
