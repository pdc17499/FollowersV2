import React from 'react';
import { StyleSheet, Alert, Text, View, Dimensions, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { ARROW_VECTOR } from '@assets';
import * as yup from 'yup';
import { dataUser } from '@mocks';
import { AppText } from '@components'
import { HEIGHT, WIDTH } from '@utils'
import { ArrowRight } from '@svg';


export function ForgotPassword({ navigation }: any) {

    const formInitialValues = {
        email: '',
        error: '',
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required('Please enter your email')
            .max(100, 'Email is not over 100 characters')
            .email('Invalid email'),
    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View >
                    <Text style={styles.text}>Forgot Password</Text>
                    <Text style={styles.textUnder}>Enter your email and we'll send the instruction to you</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.minitext}>Email</Text>
                </View>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={values => {
                        if (values.email === dataUser.data.user.email) navigation.navigate('Verification')
                        else Alert.alert('Not found this email')
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
                                        Submit</Text>
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
                                    }}>Back to login</Text>
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

    textUnder: {
        fontFamily: 'NotoSans',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22.4,
        color: '#5A636D',
        alignSelf: 'center',
        marginTop: 5
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
