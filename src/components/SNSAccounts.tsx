import { PLUS } from '@assets'
import { Instagram, Facebook, Youtube, Twitter, CaretDown } from '@svg'
import { WIDTH, HEIGHT } from '@utils'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import Feather from 'react-native-vector-icons/Feather'

export function SNSAccounts() {

    const [numb, setNumb] = useState(1)

    const [block, setBlock] = useState([{ id: '1' }])

    const ICON = [
        { title: "instagram", image: <Instagram /> },
        { title: "facebook", image: <Facebook /> },
        { title: "youtube", image: <Youtube /> },
        { title: "twitter", image: <Twitter /> },
    ];
    const deleteAccount = (id: any) => {
        setNumb(numb - 1)
        const index = block.findIndex(
            (element: any) => element.id === id,
        );

        block.splice(index, 1);
        setBlock([...block])
    }


    const renderBlock = ({ item }: any) => {

        return (
            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 30 / 896 }} >
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
                                <View style={{ width: 14 }}></View>
                                <CaretDown />
                            </View>
                        );
                    }}
                    dropdownStyle={styles.dropdown3DropdownStyle}
                    rowStyle={styles.dropdown3RowStyle}
                    renderCustomizedRowChild={(item, index) => {
                        return (
                            <View style={styles.dropdown3RowChildStyle}>
                                <View>{item.image}</View>
                            </View>
                        );
                    }}
                />

                <View>
                    <TextInput style={styles.input}  ></TextInput>
                    <TouchableOpacity onPress={() => deleteAccount(item.id)} style={{ position: 'absolute', top: 12, right: 10 }}>
                        <Feather name={'x-circle'} size={25} color={'#3FAEC7'} ></Feather>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }


    return (
        <View>
            <FlatList
                data={block}
                renderItem={renderBlock}
                keyExtractor={item => item.id}
            />

            {(block.length < 5) == true
                ? <TouchableOpacity onPress={() => {
                    setNumb(numb + 1);
                    const newID = { id: (Date.now() + Math.random()).toString() }
                    block.push(newID)
                    setBlock([...block])

                }}>
                    <View style={styles.add}>
                        <Image source={PLUS}></Image>
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Regular', fontWeight: '400', color: "#A8ACAE", lineHeight: 22, marginLeft: 5 }}>Add New Address</Text>
                    </View>
                </TouchableOpacity>
                : null
            }

        </View>
    )
}



const styles = StyleSheet.create({
    sns: {
        color: '#191B1D',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '600',
        fontFamily: 'NotoSans',
    },
    title: {
        marginTop: HEIGHT * 32 / 896,
        color: '#5A636D',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '500',
        fontFamily: 'NotoSans',
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
        height: HEIGHT * 58 / 896,
        marginTop: HEIGHT * 33 / 896,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
