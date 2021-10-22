import { AppText } from '@components'
import { dataUser } from '@mocks'
import { Back, Eye, EyeSlash } from '@svg'
import { HEIGHT, I18n, WIDTH } from '@utils'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as yup from 'yup';

export function ChangePassword({ navigation }: any) {

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const formInitialValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        error: '',
    };

    const validationSchema = yup.object().shape({

        currentPassword: yup
            .string()
            .required('Please enter your current password'),
        newPassword: yup
            .string()
            .required(`${I18n.trans('login.requiredPassword')}`)
            .matches(
                // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                /^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z\d@$!%*#?&;,]{6,32}$/,
                `${I18n.trans('login.invalidPassword')}`
            ),
        confirmPassword: yup
            .string()
            .required(`${I18n.trans('login.requiredPassword')}`)
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}><Back /></TouchableOpacity>
                    <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: '#191B1D', marginLeft: 35, }}>
                        Change Password</Text>
                </View>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={values => {
                        if ((values.currentPassword === dataUser.data.user.password && values.newPassword === values.confirmPassword) == true) {
                            navigation.navigate('MyHome')
                        }
                        else {
                            Alert.alert('Your current password is incorrect')
                        }
                    }}
                >
                    {props => (
                        <View style={{ marginTop: 30, flex: 1, height: '100%' }}>
                            <Text style={styles.minitext}>Current password</Text>
                            <View>
                                <TextInput
                                    style={styles.input} placeholder={'Your current password'}
                                    onChangeText={props.handleChange('currentPassword')}
                                    value={props.values.currentPassword} secureTextEntry={!showCurrentPassword}
                                />
                                {props.errors.currentPassword && (
                                    <AppText style={styles.error}>
                                        {props.errors.currentPassword}
                                    </AppText>
                                )}
                                {(showCurrentPassword == true)
                                    ?
                                    <TouchableOpacity onPress={() => setShowCurrentPassword(false)} style={styles.eye}>
                                        <Eye />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setShowCurrentPassword(true)} style={styles.eye}>
                                        <EyeSlash />
                                    </TouchableOpacity>
                                }
                            </View>
                            <Text style={styles.minitext}>New password</Text>
                            <View >
                                <TextInput style={styles.inputPass} placeholder={'Your new password'}
                                    onChangeText={props.handleChange('newPassword')}
                                    value={props.values.newPassword} secureTextEntry={!showNewPassword} ></TextInput>

                                {props.errors.newPassword && (
                                    <AppText style={styles.error}>
                                        {props.errors.newPassword}
                                    </AppText>
                                )}
                                {(showNewPassword == true)
                                    ?
                                    <TouchableOpacity onPress={() => setShowNewPassword(false)} style={styles.eye}>
                                        <Eye />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setShowNewPassword(true)} style={styles.eye}>
                                        <EyeSlash />
                                    </TouchableOpacity>
                                }
                            </View>

                            <Text style={styles.minitext}>Confirm new password</Text>

                            <View >
                                <TextInput style={styles.inputPass} placeholder={'Confirm new password'}
                                    onChangeText={props.handleChange('confirmPassword')}
                                    value={props.values.confirmPassword} secureTextEntry={!showConfirmPassword} ></TextInput>

                                {props.errors.confirmPassword && (
                                    <AppText style={styles.error}>
                                        {props.errors.confirmPassword}
                                    </AppText>
                                )}
                                {(showConfirmPassword == true)
                                    ?
                                    <TouchableOpacity onPress={() => setShowConfirmPassword(false)} style={styles.eye}>
                                        <Eye />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setShowConfirmPassword(true)} style={styles.eye}>
                                        <EyeSlash />
                                    </TouchableOpacity>
                                }
                            </View>

                            <TouchableOpacity onPress={props.handleSubmit} style={styles.changePassword}>
                                <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>Change Password</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    changePassword: {
        width: WIDTH * 367 / 414,
        height: 58,
        position: 'absolute',
        bottom: 45,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: '#3FAEC7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
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
        paddingRight: 60,
        width: WIDTH * 366 / 414,
        height: 60,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        borderRadius: 8
    },
    inputPass: {
        paddingLeft: 15,
        paddingRight: 60,
        width: WIDTH * 366 / 414,
        height: 60,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        borderRadius: 8
    },
    minitext: {
        fontSize: 16,
        lineHeight: 25.6,
        fontWeight: '500',
        fontFamily: 'NotoSans',
        color: '#A8ACAE',
        marginTop: 20,
        marginBottom: 5,
    },
    eye: {
        position: 'absolute',
        top: 12,
        left: WIDTH * 314 / 414,
    },
    error: {
        marginLeft: 5,
        marginRight: 20,
        color: 'red',
        fontSize: 14,
    },
})
