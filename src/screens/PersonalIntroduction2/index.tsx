import { DOWN, PROFILE } from '@assets'
import React, { useState } from 'react'
import {
    ScrollView, StyleSheet, Text, View, Picker, TextInput, TouchableOpacity, Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SelectDropdown from "react-native-select-dropdown";
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { HEIGHT, WIDTH } from '@utils'
import { ArrowRight, Logo, Three, Two } from '@svg'
import { dataUser } from '@mocks';
import { setUserInfo, setToken } from '@redux';
import { useDispatch } from 'react-redux';

export function PersonalIntroduction2({ navigation }: any) {
    const [filePath, setFilePath] = useState('');
    const [selectedGender, setSelectedGender] = useState("Male");
    const [selectedYear, setSelectedYear] = useState("2000");
    const jobs = ["Singer", "Developer", "Actor", "Other"];

    const openGallery = (callback: (arg0: ImageOrVideo) => void) => {
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
    const dispatch = useDispatch()

    const onStart = () => {
        dispatch(setUserInfo(dataUser.data.user)),
            dispatch(setToken(dataUser.data.token)),
            navigation.navigate('MyHome')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>

                <View style={styles.logo}><Logo /></View>

                <View>
                    <Text style={styles.title}>Getting started</Text>

                </View>
                <View>
                    <Text style={styles.intro}>Personal Introduction</Text>
                </View>

                <View style={{ marginLeft: WIDTH * 24 / 414, marginTop: HEIGHT * 40 / 896 }}>
                    <Two />
                </View>
                <TouchableOpacity onPress={() => openGallery()}>
                    {(filePath === '') == false
                        ? <Image source={{ uri: filePath }}
                            style={{
                                width: 120, height: 120, borderRadius: 60, alignSelf: 'center',
                                marginTop: HEIGHT * 52 / 896
                            }}></Image>
                        : <Image source={PROFILE} style={styles.profile}></Image>
                    }
                    <Text style={styles.choose}>Choose picture</Text>
                </TouchableOpacity>

                <View style={{ marginLeft: WIDTH * 24 / 414, marginTop: HEIGHT * 40 / 896 }}>
                    <Three />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.minitext}>Profession</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: WIDTH * 24 / 414 }}></View>

                    <SelectDropdown
                        data={jobs}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={"Singer"}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                        buttonStyle={styles.dropdown1BtnStyle}
                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                        renderDropdownIcon={() => {
                            return (
                                <Image source={DOWN} style={{ marginLeft: 10 }} />
                            );
                        }}
                        dropdownIconPosition={"right"}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                    />
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

                <Text style={styles.minitext}>Introduction </Text>
                <TextInput multiline={true} numberOfLines={4} maxLength={120} style={styles.introduction} />
                <TouchableOpacity onPress={() => onStart()}>

                    <View style={styles.next} >
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>
                            Start</Text>
                        <ArrowRight />
                    </View>
                </TouchableOpacity>
                <View style={{ height: 60 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    logo: {
        marginLeft: WIDTH * 24 / 414,
        marginTop: HEIGHT * 86 / 896
    },

    title: {
        marginTop: HEIGHT * 32 / 896,
        marginLeft: WIDTH * 24 / 414,
        color: '#5A636D',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '500',
        fontFamily: 'NotoSans',
    },
    intro: {
        marginLeft: WIDTH * 24 / 414,
        marginTop: 5,
        color: '#191B1D',
        fontSize: 28,
        lineHeight: 38,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
    },
    next: {
        width: WIDTH * 367 / 414,
        height: HEIGHT * 60 / 896,
        marginTop: HEIGHT * 42 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: '#3FAEC7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        paddingLeft: 15,
        width: WIDTH * 250 / 414,
        height: HEIGHT * 58 / 896,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        lineHeight: 22,
        borderRadius: 8
    },

    add: {
        borderColor: '#A8ACAE',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 8,
        width: WIDTH * 367 / 414,
        height: HEIGHT * 58 / 896,
        marginTop: HEIGHT * 33 / 896,
        marginLeft: WIDTH * 24 / 414,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profile: {
        alignSelf: 'center',
        marginTop: HEIGHT * 52 / 896,
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
    dropdown1BtnStyle: {
        width: "88%",
        height: 50,
        backgroundColor: "#F6F5E8",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#F6F5E8",
    },
    dropdown1BtnTxtStyle: { color: '#191B1D', textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "white" },
    dropdown1RowStyle: {
        backgroundColor: "white",
        borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: '#191B1D', textAlign: "center" },
    introduction: {
        width: WIDTH * 366 / 414,
        height: HEIGHT * 120 / 896,
        marginLeft: WIDTH * 24 / 414,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        backgroundColor: '#F6F5E8',
        borderRadius: 8,
        padding: 15
    },
    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
        marginVertical: 10,
        width: 250,
    },
})
