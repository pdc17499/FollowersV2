import { PROFILE } from '@assets';
import { Back, CaretLeft, Check, Facebook, Instagram, PencilLine, Twitter, UpdateCheck, Youtube } from '@svg'
import { HEIGHT, WIDTH } from '@utils'
import React, { useState } from 'react'
import { Alert, Image, ImageProps, PermissionsAndroid, Picker, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { ReduxState } from '@interfaces';
import { setAvatar } from '@redux';
import { useDispatch, useSelector } from 'react-redux';
import { SNSAccounts } from '@components';
import { dataUser } from '@mocks';
// const USER = dataUser.data.user;

export function UpdateProfile({ navigation }: any) {
    const USER = useSelector((state: ReduxState) => state.user.userInfo);
    console.log('user', USER);

    const [text1, setText1] = useState(USER.username)
    const [text2, setText2] = useState('')
    const [selectedGender, setSelectedGender] = useState("Male");
    const [selectedYear, setSelectedYear] = useState("2000");
    const [filePath, setFilePath] = useState(USER.avatar);

    const dispatch = useDispatch()

    const openGallery = (callback: (arg0: ImageOrVideo) => void) => {
        // console.tron.warn('open gallery')
        ImagePicker.openPicker({
            width: 1024,
            height: 1024,
            cropping: true
        }).then((image) => {
            if (typeof callback === 'function') {
                callback(image)
                console.log(image);
            }
            setFilePath(image.path)
            console.log(image);
        })
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: WIDTH * 24 / 414, flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <Back />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: '#191B1D', marginLeft: '21%', marginRight: '20%' }}>
                        Update profile</Text>
                </View>

                <View>
                    <Text style={styles.title}>Profile Picture</Text>
                </View>
                <TouchableOpacity onPress={() => openGallery()}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: filePath }} style={styles.avatar}></Image>
                        <Text style={{ color: '#3FAEC7', marginTop: 15, fontSize: 16, fontFamily: 'NotoSans-Bold' }}>Choose picture</Text>
                    </View>
                </TouchableOpacity>

                <View><Text style={styles.title}>Profile info</Text></View>

                <View>
                    <Text style={styles.minitext}>Email</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans' }}>{USER.email}</Text>
                </View>
                <View>
                    <Text style={styles.minitext}>Username</Text>
                    <TextInput style={styles.input} value={text1} onChangeText={(text1) => setText1(text1)}></TextInput>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.minitext}>Gender</Text>
                    <View style={{ marginLeft: WIDTH * 134 / 414 }}></View>
                    <Text style={styles.minitext}>Birth year</Text>

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

                    <View style={styles.picker2}>
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

                <View>
                    <Text style={styles.minitext}>Introduction</Text>

                    <TextInput style={styles.input2} multiline={true} numberOfLines={4} maxLength={120} value={text2} onChangeText={(text) => setText2(text)}></TextInput>
                </View>

                <View><Text style={styles.title}>SNS accounts</Text></View>
                <SNSAccounts />
                <View style={{ height: 160 }}></View>
                <View style={styles.update}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: 'white', marginRight: 10 }}>Update</Text>
                    <UpdateCheck />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    minitext: {
        fontSize: 16,
        lineHeight: 25.6,
        fontWeight: '500',
        fontFamily: 'NotoSans',
        color: '#A8ACAE',
        // marginLeft: WIDTH * 25 / 414,
        marginTop: HEIGHT * 16 / 896,
        marginBottom: 5,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 90 / 896,
        marginLeft: 10
    },
    choose: {
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        fontFamily: 'NotoSans',
        marginTop: HEIGHT * 21 / 896,
        color: '#3FAEC7'
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: 30
    },
    title: {
        fontSize: 18,
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
        marginTop: 35
    },
    picker: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: WIDTH * 170 / 414,
        height: 60,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        borderRadius: 8
    },
    picker2: {
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 15,
        width: WIDTH * 170 / 414,
        height: 60,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        marginLeft: 15,
        borderRadius: 8
    },
    input: {
        paddingLeft: 15,
        width: '100%',
        height: 60,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        lineHeight: 22,
        borderRadius: 8
    },
    input2: {
        padding: 15,
        width: '100%',
        height: 120,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        borderRadius: 8,
        textAlignVertical: "top"

    },
    update: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3FAEC7',
        borderRadius: 18,
        // marginTop: 30,
        width: '100%',
        height: 58,
        position: 'absolute',
        bottom: 70,


    }
})
