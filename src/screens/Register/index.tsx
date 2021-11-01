import React, { useState } from 'react'
import { StyleSheet, Picker, Text, View, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik';
import * as yup from 'yup';
import { dataUser } from '@mocks';
import { AppText } from '@components'
import { ArrowRight, Back, Eye, EyeSlash } from '@svg';
import { HEIGHT, WIDTH } from '@utils'
export function Register({ navigation }: any) {

    const [selectedGender, setSelectedGender] = useState("Male");
    const [selectedYear, setSelectedYear] = useState("2000");
    const [showPassword, setShowPassword] = useState(false)

    const formInitialValues = {
        email: '',
        password: '',
        username: '',
        code: '',
        error: '',
    };

    const validationSchema = yup.object().shape({

        email: yup
            .string()
            .required('Please enter your email')
            .max(100, 'Email is not over 100 characters')
            .email('Invalid email'),
        password: yup
            .string()
            .required('Please enter your password')
            .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z\d@$!%*#?&;,]{6,32}$/,
                "Password must have 6-32 characters including numbers and letters"
            ),
        username: yup
            .string()
            .max(50, 'Usename is not over 50 characters')
            .required('Please enter your name'),
        code: yup
            .string()
            .max(9, 'Introduction code is not over 9 characters')
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={{ marginLeft: 25, marginTop: 7 }} >
                        <Back></Back>
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerTXt}>
                    Register</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>Your SNS accounts</Text>
                    <Text style={
                        { marginLeft: WIDTH * 25 / 414, fontFamily: 'NotoSans', fontSize: 14, fontWeight: '500', lineHeight: 22, color: '#C6CBCC' }} >
                        Add your accounts you want to increase followers</Text>
                </View>

                <View>
                    <Text style={styles.minitext}>Youtube</Text>
                    <TextInput style={styles.input} ></TextInput>
                    <Text style={styles.minitext}  >Instagram</Text>
                    <TextInput style={styles.input} ></TextInput>
                    <Text style={styles.minitext}>Twitter</Text>
                    <TextInput style={styles.input} ></TextInput>
                    <Text style={styles.minitext}>Facebook</Text>
                    <TextInput style={styles.input} ></TextInput>
                    <Text style={styles.minitext}>Whatsapp</Text>
                    <TextInput style={styles.input} ></TextInput>
                </View>

                <Formik
                    initialValues={formInitialValues}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    onSubmit={values => {
                        (values.email === dataUser.data.user.email) == true
                            ? Alert.alert('Email already registered !')
                            : navigation.navigate('PersonalIntroduction')
                    }}
                >
                    {props => (
                        <View>
                            <Text style={styles.title}>Follower account</Text>
                            <Text style={styles.minitext}>Email</Text>
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

                            <Text style={styles.minitext}>Password</Text>
                            <View>

                                <TextInput style={styles.input2}
                                    onChangeText={props.handleChange('password')}
                                    placeholder={'Your password'}
                                    value={props.values.password} secureTextEntry={!showPassword} ></TextInput>

                                {props.errors.password && (
                                    <AppText style={styles.error}>
                                        {props.errors.password}
                                    </AppText>
                                )}
                                {(showPassword == true)
                                    ? <TouchableOpacity onPress={() => setShowPassword(false)} style={styles.eye}>
                                        <Eye></Eye>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => setShowPassword(true)} style={styles.eye}>
                                        <EyeSlash></EyeSlash>
                                    </TouchableOpacity>
                                }
                            </View>

                            <Text style={styles.minitext}>Username</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('username')}
                                value={props.values.username}
                            />
                            {props.errors.username && (
                                <AppText style={styles.error}>
                                    {props.errors.username}
                                </AppText>
                            )}

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.minitext}>Gender</Text>
                                <View style={{ marginLeft: WIDTH * 134 / 414 }}></View>
                                <Text style={styles.minitext2}>Birth year</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.picker}>
                                    <Picker
                                        selectedValue={selectedGender}
                                        style={{ height: 50, width: 150 }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
                                    >
                                        <Picker.Item label="Male" value="Male" />
                                        <Picker.Item label="Female" value="Female" />
                                        <Picker.Item label="Other" value="Other" />
                                    </Picker>
                                </View>

                                <View style={styles.picker}>
                                    <Picker
                                        selectedValue={selectedYear}
                                        style={{ height: 50, width: 150 }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
                                    >
                                        <Picker.Item label="2000" value="2000" />
                                        <Picker.Item label="1999" value="1999" />
                                        <Picker.Item label="1998" value="1998" />
                                        <Picker.Item label="1997" value="1997" />
                                    </Picker>
                                </View>
                            </View>

                            <Text style={styles.minitext}>Introduction Code</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('code')}
                                value={props.values.code}
                            />
                            {props.errors.code && (
                                <AppText style={styles.error}>
                                    {props.errors.code}
                                </AppText>
                            )}

                            <TouchableOpacity onPress={props.handleSubmit}>
                                <View style={styles.login} >
                                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>
                                        Submit
                                    </Text>
                                    <ArrowRight />
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 45 }}></View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    input2: {
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
    eye: {
        position: 'absolute',
        top: HEIGHT * 10 / 896,
        left: WIDTH * 339.5 / 414,
    },
    minitext2: {
        fontSize: 16,
        lineHeight: 25.6,
        fontWeight: '500',
        fontFamily: 'NotoSans',
        color: '#A8ACAE',
        marginLeft: WIDTH * 10 / 414,
        marginTop: HEIGHT * 16 / 896,
        marginBottom: 5,
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
        marginRight: 25,
        color: 'red',
        fontSize: 14,
    },
    title: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: '500',
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
        alignSelf: 'flex-start',
        marginLeft: WIDTH * 24 / 414,
        marginTop: HEIGHT * 38 / 896
    },
    picker: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: WIDTH * 170 / 414,
        height: HEIGHT * 60 / 896,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        marginLeft: WIDTH * 25 / 414,
        borderRadius: 8
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 30 / 896
    },
    headerTXt: {
        fontSize: 24,
        lineHeight: 33,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
        marginLeft: 75,
        marginTop: HEIGHT * 10 / 896
    }
})
