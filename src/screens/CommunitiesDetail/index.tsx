import React, { useEffect, useState } from 'react'
import { StyleSheet, Modal, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList, ScrollView, Alert } from 'react-native'
import { communitiesDetail, forumPost } from '@mocks'
import { HEIGHT, WIDTH } from '@utils'
import { Back, CaretRight, Chat, Check, Filter, Line, Out, Ping, Rectangle, RectangleChecked, Search, User } from '@svg'
import { useDispatch } from 'react-redux';
import { setForumInfo } from '@redux';


const DATA = communitiesDetail
const DATA_LIST = DATA.community.member;

export function CommunitiesDetail({ route, navigation }: any) {
    const dispatch = useDispatch()

    const { name, members, uri } = route.params

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("");
    const [inGroup, setInGroup] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [textModal1, setTextModal1] = useState("");
    const [textModal2, setTextModal2] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState(DATA_LIST);

    const goForum = () => {
        navigation.navigate('Forum')
        dispatch(setForumInfo(forumPost.data))
    }

    const Checked = () => {
        return (
            <View>
                <RectangleChecked />
                <Check ></Check>
            </View>
        )
    }

    const filterApply = (textModal1: string, textModal2: string, check1: boolean, check2: boolean, check3: boolean) => {
        if (textModal1 && textModal2) {
            const newData = DATA_LIST.filter((item: any) => {
                return ((item.age) >= textModal1 && item.age <= textModal2)
            })
            setFilteredDataSource(newData);
        } else {
            setFilteredDataSource(DATA_LIST);
        }
        if (check1) {
            const newData = DATA_LIST.filter((item: any) => {
                return (item.gender === 'Male')
            })
            setFilteredDataSource(newData);
        }
        if (check2) {
            const newData = DATA_LIST.filter((item: any) => {
                return (item.gender === 'Female')
            })
            setFilteredDataSource(newData);
        }
        if (check3) {
            const newData = DATA_LIST.filter((item: any) => {
                return (item.gender === 'Other')
            })
            setFilteredDataSource(newData);
        }
        setModalVisible(false)
    }

    const onClear = () => {
        setTextModal1('')
        setTextModal2('')
        setCheck1(false)
        setCheck2(false)
        setCheck3(false)
    }

    const searchFilterFunction = (text: any) => {
        // Check if searched text is not blank
        if (text) {
            const newData = DATA_LIST.filter(function (item: any) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            onChangeText(text);
        } else {
            setFilteredDataSource(DATA_LIST);
            onChangeText(text);
        }
    }

    const Leaving = () => {
        return (
            <TouchableOpacity onPress={() => setInGroup(!inGroup)}>
                <View style={styles.button2}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: 'white', alignSelf: 'center', marginRight: 12 }}>Leaving</Text>
                    <Out />
                </View>
            </TouchableOpacity>
        )
    }

    const Participate = () => {
        return (
            <TouchableOpacity onPress={() => setInGroup(!inGroup)}>
                <View style={styles.button}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: 'white', alignSelf: 'center' }}>Participate</Text>
                </View>
            </TouchableOpacity>
        )
    }


    const renderItem = ({ item }: any) => {
        const check = () => {
            if (item.status == 1) {
                return '#FF4C41'
            }
            if (item.status == 2) {
                return '#406FF1'
            }
            else return '#FEA827'
        }
        return (

            <TouchableOpacity style={styles.Item} onPress={() => navigation.navigate('StrangerProfile', { name: item.name, avatar: item.avatar, friend: item.friend, id: item.id })} >
                <View style={{
                    borderWidth: 2,
                    borderColor: `${check()}`,
                    height: 68,
                    width: 68,
                    borderRadius: 34,
                    backgroundColor: `${check()}`,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar}></Image>
                </View>
                <View style={{ marginLeft: 20, width: '74%' }}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#2B3641', fontFamily: 'NotoSans-Bold', fontSize: 14, marginRight: 5
                        }}>{item.friend}</Text>
                        <User />
                    </View>
                    <Text style={{ color: '#5A636D', fontFamily: 'NotoSans', fontSize: 14 }}>{item.description}</Text>
                </View>

            </TouchableOpacity >
        )
    };

    const ContentThatGoesAboveTheFlatList = () => {
        return (
            <View>
                <View style={styles.image} >
                    <Image source={{ uri: uri }} blurRadius={2} style={{ flex: 1, borderRadius: 10, }}></Image>
                    <View style={styles.inImage}>
                        <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 24, color: 'white', alignSelf: 'center' }}>
                            {name}</Text>
                        <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 14, color: 'white', alignSelf: 'center' }}>{members} members</Text>
                        {(inGroup) == true
                            ? <Leaving />
                            : <Participate />
                        }
                    </View>
                </View>

                <View style={styles.message}>
                    <View style={{ flexDirection: 'row' }}>
                        <Chat />
                        <View style={{ marginLeft: 20, width: 200 }}>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 18, color: '#191B1D' }}>Real-time Forum</Text>
                            <Text style={{ fontFamily: 'NotoSans', fontSize: 16, color: '#5A636D', marginTop: 5 }}>
                                Join now to give real-time PR about your self</Text>
                        </View>
                    </View>

                    {(inGroup) == true
                        ? <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }} onPress={() => goForum()}>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: '#2B8093', marginLeft: 69, marginRight: 13 }}>Go to forum</Text>
                            <CaretRight />
                        </TouchableOpacity>
                        : <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', marginBottom: 15 }}>
                            <Ping />
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 15, color: '#3FAEC7', marginLeft: 10, }}>Join community to enter this forum</Text>
                        </View>
                    }
                </View>
                <View style={{ marginTop: 35, marginBottom: 5 }}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 24 }}>Members</Text>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity onPress={() => searchFilterFunction(text)}>
                        <Search />
                    </TouchableOpacity>
                    <TextInput style={styles.input}
                        placeholder={"Search by Name"}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={text} />
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Filter />
                    </TouchableOpacity>
                    {RenderModal()}
                </View>
            </View>
        )
    }

    const RenderModal = () => {
        return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}  >
                <TouchableOpacity onPressOut={() => setModalVisible(false)} style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalMenu}>Age</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput style={styles.inputModal} onChangeText={(text) => setTextModal1(text)} value={textModal1} keyboardType="numeric" ></TextInput>
                            <Line style={{ marginHorizontal: 10 }} />
                            <TextInput style={styles.inputModal2} onChangeText={(text) => setTextModal2(text)} value={textModal2} keyboardType="numeric" ></TextInput>
                        </View>

                        <View >
                            <Text style={styles.modalMenu}>Gender</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 15 }}>
                                <TouchableOpacity onPress={() => { setCheck1(!check1); setCheck2(false); setCheck3(false) }} >
                                    {(check1) == true
                                        ? <Checked></Checked>
                                        : <Rectangle />}

                                </TouchableOpacity>
                                <Text style={styles.text}>Male</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 15 }}>
                                <TouchableOpacity onPress={() => { setCheck2(!check2); setCheck1(false); setCheck3(false) }} >
                                    {(check2) == true
                                        ? <Checked></Checked>
                                        : <Rectangle />}

                                </TouchableOpacity>
                                <Text style={styles.text}>Female</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 15 }}>
                                <TouchableOpacity onPress={() => { setCheck3(!check3); setCheck2(false); setCheck1(false) }} >
                                    {(check3) == true
                                        ? <Checked></Checked>
                                        : <Rectangle />}
                                </TouchableOpacity>
                                <Text style={styles.text}>Other</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity style={styles.apply} onPress={() => filterApply(textModal1, textModal2, check1, check2, check3)}>
                                <View><Text style={{ color: 'white', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>Apply</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onClear}>
                                <View style={styles.apply2}><Text style={{ color: '#A8ACAE', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>Clear</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View >
                </TouchableOpacity >
            </Modal >

        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Communities')}>
                        <Back></Back>
                    </TouchableOpacity>
                </View>
                <FlatList
                    nestedScrollEnabled
                    showsVerticalScrollIndicator={false}
                    data={filteredDataSource}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={ContentThatGoesAboveTheFlatList()}
                />
                <View style={{ height: 30 }}></View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 15
    },
    container: {
        marginHorizontal: WIDTH * 24 / 414,
        height: '100%',
        marginBottom: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#3FAEC7',
        borderWidth: 1,
        borderColor: '#3FAEC7',
        borderRadius: 10,
        marginTop: 25
    },
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#FF4C41',
        borderWidth: 1,
        borderColor: '#FF4C41',
        borderRadius: 10,
        marginTop: 25
    },
    message: {
        backgroundColor: '#F6F5E8',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 25,
        // height: 200,
        borderColor: '#F6F5E8',
        borderWidth: 1,
        borderRadius: 10
    },
    inImage: {
        position: 'absolute',
        top: 35,
        alignSelf: 'center',
        width: '100%',
    },
    header: {
        marginTop: HEIGHT * 60 / 896,
        marginBottom: 15
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6F5E8',
        height: 60,
        width: '100%',
        marginBottom: 25,
        marginTop: 15,
        paddingHorizontal: 20
    },
    input: {
        width: 260,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        padding: 10,
        fontFamily: 'NotoSans',
        fontSize: 16,

    },
    Item: {
        backgroundColor: '#F6F7F9',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F6F7F9',
        borderRadius: 10,
        flexDirection: 'row'
    },
    avatar: {
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    userName: {
        color: '#2B8093',
        fontFamily: 'NotoSans-Bold',
        fontSize: 16
    },
    centeredView: {
        flex: 1,
        paddingTop: 187,
        paddingHorizontal: WIDTH * 24 / 414, // justifyContent: "center",
    },
    modalView: {
        shadowOffset: {
            width: 0,
            height: 2
        },
        backgroundColor: '#2B3641',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2B3641',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: 458
    },
    modalMenu: {
        color: 'white',
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
        marginTop: 25,
        marginLeft: 25
    },
    inputModal: {
        flex: 1,
        height: 60,
        marginLeft: 25,
        backgroundColor: '#5A636D',
        borderRadius: 10,
        marginVertical: 12,
        paddingLeft: 20,
        color: 'white',
        fontSize: 18,
        fontFamily: 'NotoSans-Bold',
    },
    inputModal2: {
        flex: 1,
        height: 60,
        backgroundColor: '#5A636D',
        borderRadius: 10,
        marginVertical: 12,
        marginRight: 25,
        paddingLeft: 20,
        color: 'white',
        fontSize: 18,
        fontFamily: 'NotoSans-Bold',
    },
    apply: {
        backgroundColor: '#3FAEC7',
        height: 60,
        width: 130,

        marginLeft: 25,
        borderRadius: 10,
        justifyContent: 'center'
    },
    apply2: {
        backgroundColor: '#2B3641',
        height: 60,
        width: 130,
        marginLeft: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A8ACAE',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'NotoSans',
        marginLeft: 15
    }
})
