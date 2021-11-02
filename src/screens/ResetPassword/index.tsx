
import { AppText } from '@components'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as yup from 'yup';
import { Eye, EyeSlash } from '@svg';
import { HEIGHT, I18n, WIDTH } from '@utils'
import { INSTANCE, RESET_PASSWORD, VERIFY_CODE } from '@services'

export function ResetPassword({ route, navigation }: any) {
    const { email } = route.params
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const formInitialValues = {
        new_password: '',
        confirm_password: '',
        error: '',
    };


    const validationSchema = yup.object().shape({

        new_password: yup
            .string()
            .required('Please enter your password'),
        // .matches(
        //     /^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z\d@$!%*#?&;,]{6,32}$/,
        //     "Password must have 6-32 characters including numbers and letters"
        // ),
        confirm_password: yup
            .string()
            .required('Please enter your password')
        // .matches(
        //     /^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z\d@$!%*#?&;,]{6,32}$/,
        //     "Password must have 6-32 characters including numbers and letters"
        // ),
    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View >
                    <Text style={styles.text}>Reset Password</Text>
                </View>
                <View style={{ marginTop: 10 }}></View>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={async values => {
                        try {
                            const response: any = await INSTANCE.post(RESET_PASSWORD, { "email": email, "password": values.new_password, "password_confirmation": values.confirm_password });
                            console.log('rs', response);
                            if (response.data.success) {
                                navigation.navigate('ResetPasswordSuccessfully')
                            }
                        } catch (error) {
                            console.log(error);
                            Alert.alert('New password and Confirm password must be the same')
                        }
                    }}
                >
                    {props => (
                        <View>
                            <Text style={styles.minitext}>New Password</Text>
                            <View>
                                <TextInput
                                    style={styles.input} placeholder={'Enter new password'}
                                    secureTextEntry={!showPassword}
                                    onChangeText={props.handleChange('new_password')}
                                    value={props.values.new_password}
                                />
                                {props.errors.new_password && (
                                    <AppText style={styles.error}>
                                        {props.errors.new_password}
                                    </AppText>
                                )}

                                {(showPassword == true)
                                    ? <TouchableOpacity onPress={() => setShowPassword(false)} style={styles.eye}>
                                        <Eye />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setShowPassword(true)} style={styles.eye}>
                                        <EyeSlash />
                                    </TouchableOpacity>
                                }
                            </View>

                            <Text style={styles.minitext}>Confirm New Password</Text>

                            <View >
                                <TextInput style={styles.input2} placeholder={'Enter your password again'}
                                    onChangeText={props.handleChange('confirm_password')}
                                    value={props.values.confirm_password} secureTextEntry={!showPassword2} ></TextInput>
                                {props.errors.confirm_password && (
                                    <AppText style={styles.error}>
                                        {props.errors.confirm_password}
                                    </AppText>
                                )}
                                {(showPassword2 == true)
                                    ? <TouchableOpacity onPress={() => setShowPassword2(false)} style={styles.eye}>
                                        <Eye />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setShowPassword2(true)} style={styles.eye}>
                                        <EyeSlash />
                                    </TouchableOpacity>
                                }

                            </View>
                            <View style={{ marginTop: 20 }}>
                            </View>
                            <TouchableOpacity onPress={props.handleSubmit}>
                                <View style={styles.login} >
                                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>
                                        Reset</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <View style={styles.login2} >
                                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', lineHeight: 22, marginRight: 5 }}>
                                        Back to login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontWeight: '600',
        alignSelf: 'center',
        fontFamily: 'NotoSans-Bold',
        marginTop: HEIGHT * 175 / 896,
        color: '#191B1D',
        lineHeight: 38.14
    },

    textUnder: {
        fontFamily: 'NotoSans',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 22.4,
        color: '#5A636D',
        alignSelf: 'center',
        marginTop: 5
    },
    input: {
        paddingLeft: 15,
        paddingRight: 55,
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
    input2: {
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
        marginBottom: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'black',
        backgroundColor: 'white',
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
    eye: {
        position: 'absolute',
        top: HEIGHT * 11 / 896,
        left: WIDTH * 339.5 / 414,
    },
})
