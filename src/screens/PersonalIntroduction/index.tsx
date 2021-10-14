import { ARROW_BLUE, BLACK_CIRLE, DOWN, LOGO_BLUE, ONE, PLUS } from '@assets'
import React, { useState } from 'react'
import { ScrollView, Dimensions, StyleSheet, Text, View, Image, Picker, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SNS, INSTAGRAM, FACEBOOK, YOUTUBE, TWITTER } from '@assets'
import SelectDropdown from "react-native-select-dropdown";
import { HEIGHT, WIDTH } from '@utils'
import { ArrowBlue, CaretDown, Down, Facebook, Instagram, Logo, One, Twitter, Youtube } from '@svg'
import Feather from 'react-native-vector-icons/Feather';

export function PersonalIntroduction({ navigation }: any) {
    const [numb, setNumb] = useState(1)

    const ICON = [
        { title: "instagram", image: <Instagram /> },
        { title: "facebook", image: <Facebook /> },
        { title: "youtube", image: <Youtube /> },
        { title: "twitter", image: <Twitter /> },
    ];
    const deleteAccount = () => {
        setNumb(numb - 1)
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <View style={styles.logo}>
                    <Logo />
                </View>

                <View><Text style={styles.title}>Getting started</Text></View>

                <View><Text style={styles.intro}>Personal Introduction</Text></View>

                <View>
                    <View style={{
                        flexDirection: 'row', marginTop: HEIGHT * 40 / 896, alignItems: 'center'
                    }}>
                        <View style={{ marginLeft: WIDTH * 24 / 414, }}>
                            <One />
                        </View>
                        <Text style={{
                            marginTop: 3,
                            alignSelf: 'center',
                            marginLeft: 10,
                            fontFamily: 'NotoSans',
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#A8ACAE',
                            // lineHeight: 22,
                        }}>(Up to 5 accounts)</Text>

                    </View>


                    <View style={{ flexDirection: 'row', marginTop: HEIGHT * 30 / 896 }}>
                        <View style={{ width: WIDTH * 24 / 414 }}></View>

                        <SelectDropdown
                            data={ICON}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonStyle={styles.dropdownStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        {selectedItem ? (
                                            <View>
                                                {selectedItem.image}
                                            </View>

                                        ) : (
                                            <Instagram />
                                        )}
                                        <View style={{ width: 20 }}></View>
                                        <CaretDown />
                                    </View>
                                );
                            }}
                            dropdownStyle={styles.dropdown3DropdownStyle}
                            rowStyle={styles.dropdown3RowStyle}
                            renderCustomizedRowChild={(item, index) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>

                                        <View>
                                            {item.image}
                                        </View>
                                        {/* <Image source={item.image} />
                                        <Text style={styles.dropdown3RowTxt}>{item.title}</Text> */}
                                    </View>
                                );
                            }}
                        />

                        <View>
                            <TextInput style={styles.input} ></TextInput>
                        </View>
                    </View>
                    <View>

                    </View>

                    {(numb >= 2) == true
                        ? <View style={{ flexDirection: 'row', marginTop: HEIGHT * 20 / 896 }}>
                            <View style={{ width: WIDTH * 24 / 414 }}></View>

                            <SelectDropdown
                                data={ICON}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonStyle={styles.dropdownStyle}
                                renderCustomizedButtonChild={(selectedItem, index) => {
                                    return (
                                        <View style={styles.dropdown3BtnChildStyle}>
                                            {selectedItem ? (
                                                <Image
                                                    source={selectedItem.image}

                                                />
                                            ) : (
                                                <Image source={INSTAGRAM} />
                                            )}
                                            <View style={{ width: 20 }}></View>
                                            <CaretDown />
                                        </View>
                                    );
                                }}
                                dropdownStyle={styles.dropdown3DropdownStyle}
                                rowStyle={styles.dropdown3RowStyle}
                                renderCustomizedRowChild={(item, index) => {
                                    return (
                                        <View style={styles.dropdown3RowChildStyle}>
                                            <Image source={item.image} />
                                            <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                            />

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input} ></TextInput>
                                <TouchableOpacity onPress={deleteAccount} style={{ position: 'absolute', top: 12, right: 10 }}>
                                    <Feather name={'x-circle'} size={25} color={'#3FAEC7'} ></Feather>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : null

                    }

                    {(numb >= 3) == true
                        ? <View style={{ flexDirection: 'row', marginTop: HEIGHT * 20 / 896 }}>
                            <View style={{ width: WIDTH * 24 / 414 }}></View>

                            <SelectDropdown
                                data={ICON}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonStyle={styles.dropdownStyle}
                                renderCustomizedButtonChild={(selectedItem, index) => {
                                    return (
                                        <View style={styles.dropdown3BtnChildStyle}>
                                            {selectedItem ? (
                                                <Image source={selectedItem.image} />
                                            ) : (
                                                <Image source={INSTAGRAM} />
                                            )}

                                            <View style={{ width: 20 }}></View>
                                            <CaretDown />
                                        </View>
                                    );
                                }}
                                dropdownStyle={styles.dropdown3DropdownStyle}
                                rowStyle={styles.dropdown3RowStyle}
                                renderCustomizedRowChild={(item, index) => {
                                    return (
                                        <View style={styles.dropdown3RowChildStyle}>
                                            <Image source={item.image} />
                                            <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                            />

                            <View>
                                <TextInput style={styles.input} ></TextInput>
                                <TouchableOpacity onPress={deleteAccount} style={{ position: 'absolute', top: 12, right: 10 }}>
                                    <Feather name={'x-circle'} size={25} color={'#3FAEC7'} ></Feather>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : null

                    }

                    {(numb >= 4) == true
                        ? <View style={{ flexDirection: 'row', marginTop: HEIGHT * 20 / 896 }}>
                            <View style={{ width: WIDTH * 24 / 414 }}></View>

                            <SelectDropdown
                                data={ICON}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonStyle={styles.dropdownStyle}
                                renderCustomizedButtonChild={(selectedItem, index) => {
                                    return (
                                        <View style={styles.dropdown3BtnChildStyle}>
                                            {selectedItem ? (
                                                <Image
                                                    source={selectedItem.image}

                                                />
                                            ) : (
                                                <Image source={INSTAGRAM} />
                                            )}

                                            <View style={{ width: 20 }}></View>
                                            <CaretDown />
                                        </View>
                                    );
                                }}
                                dropdownStyle={styles.dropdown3DropdownStyle}
                                rowStyle={styles.dropdown3RowStyle}
                                renderCustomizedRowChild={(item, index) => {
                                    return (
                                        <View style={styles.dropdown3RowChildStyle}>
                                            <Image source={item.image} />
                                            <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                            />

                            <View>
                                <TextInput style={styles.input} ></TextInput>
                                <TouchableOpacity onPress={deleteAccount} style={{ position: 'absolute', top: 12, right: 10 }}>
                                    <Feather name={'x-circle'} size={25} color={'#3FAEC7'} ></Feather>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : null

                    }

                    {(numb >= 5) == true
                        ? <View style={{ flexDirection: 'row', marginTop: HEIGHT * 20 / 896, marginBottom: 80 }}>
                            <View style={{ width: WIDTH * 24 / 414 }}></View>


                            <SelectDropdown
                                data={ICON}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonStyle={styles.dropdownStyle}
                                renderCustomizedButtonChild={(selectedItem, index) => {
                                    return (
                                        <View style={styles.dropdown3BtnChildStyle}>
                                            {selectedItem ? (
                                                <Image
                                                    source={selectedItem.image}

                                                />
                                            ) : (
                                                <Image source={INSTAGRAM} />
                                            )}

                                            <View style={{ width: 20 }}></View>
                                            <CaretDown />
                                        </View>
                                    );
                                }}
                                dropdownStyle={styles.dropdown3DropdownStyle}
                                rowStyle={styles.dropdown3RowStyle}
                                renderCustomizedRowChild={(item, index) => {
                                    return (
                                        <View style={styles.dropdown3RowChildStyle}>
                                            <Image source={item.image} />
                                            <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                        </View>
                                    );
                                }}
                            />

                            <View>
                                <TextInput style={styles.input} ></TextInput>
                                <TouchableOpacity onPress={deleteAccount} style={{ position: 'absolute', top: 12, right: 10 }}>
                                    <Feather name={'x-circle'} size={25} color={'#3FAEC7'} ></Feather>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : null

                    }

                    {(numb < 5) == true
                        ? <TouchableOpacity onPress={() => setNumb(numb + 1)}>
                            <View style={styles.add}>
                                <Image source={PLUS}></Image>
                                <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Regular', fontWeight: '400', color: "#A8ACAE", lineHeight: 22, marginLeft: 5 }}>Add New Address</Text>
                            </View>
                        </TouchableOpacity>
                        : null

                    }
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('PersonalIntroduction2')} style={{ position: 'absolute', bottom: 15, left: WIDTH * 24 / 414 }} >
                    <View style={styles.next} >
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans', fontWeight: '600', color: "#3FAEC7", lineHeight: 22, marginRight: 5 }}>
                            Next</Text>
                        <ArrowBlue />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    logo: {
        marginLeft: WIDTH * 24 / 414,
        marginTop: HEIGHT * 86 / 896
    },
    sns: {

        marginLeft: WIDTH * 12 / 414,
        color: '#191B1D',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '600',
        fontFamily: 'NotoSans',
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
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    dropdownStyle: {
        width: WIDTH * 105 / 414,
        height: HEIGHT * 62 / 896,
        backgroundColor: "#F6F5E8",
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F6F5E8",
        marginLeft: WIDTH * 15 / 414,
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    dropdown3DropdownStyle: { backgroundColor: "white" },
    dropdown3RowStyle: {
        backgroundColor: "#F6F5E8",
        borderBottomColor: "#444",
        height: 60,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 18,
    },
    dropdown3RowTxt: {
        color: "#F1F1F1",
        textAlign: "center",
        fontFamily: 'NotoSans',
        fontSize: 16,
        marginHorizontal: 5,
    },
    dropdown3BtnTxt: {
        color: "#444",
        fontFamily: 'NotoSans',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginHorizontal: 5,
    },
    input: {
        paddingLeft: 15,
        width: WIDTH * 245 / 414,
        height: HEIGHT * 65 / 896,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        fontFamily: 'NotoSans',
        fontSize: 16,
        lineHeight: 22,
        paddingRight: 40,
        borderRadius: 8
    },
    number1: {
        position: 'absolute',
        top: 10,
        left: 13
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
    }

})
