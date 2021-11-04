import { ButtonLeft, ButtonRight } from '@components';
import { dataUser, joinedCommunities } from '@mocks';
import { BigWarning, Copy, LockKeyOpen, Prohibit, SignOut, UserCircle, Warning } from '@svg';
import { WIDTH } from '@utils'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import { logout } from '@redux';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-native-modal";
import { ReduxState } from '@interfaces';
import { logOutApi } from '@services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FLATLIST = [
    {
        icon: <UserCircle />,
        title: 'Your Profile',
    },
    {
        icon: <Prohibit />,
        title: 'Block List',
    },
    {
        icon: <LockKeyOpen />,
        title: 'Change Password',
    },
    {
        icon: <SignOut />,
        title: 'Log out',
    },
];

const JOINED = joinedCommunities.data

export function Account({ navigation }: any) {
    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const DATA = useSelector((state: ReduxState) => state.user.userInfo);

    const actionMove = (title: any) => {
        switch (title) {
            case 'Log out':
                setModalVisible(true)
                break;
            case 'Your Profile':
                navigation.navigate('Profile')
                break;
            case 'Block List':
                navigation.navigate('BlockList')
                break;
            case 'Change Password':
                navigation.navigate('ChangePassword')
                break;
            default:
                break;
        }
    }
    const logOut = async () => {
        const response: any = await logOutApi()
        if (response.data.message === "Logged out successfully!") {
            dispatch(logout())
            setModalVisible(false)
            storeToken()
            navigation.navigate('Login')
        }
        else {
            setModalVisible(false)
            Alert.alert('Something wrong!!')
        }
    }
    const storeToken = async () => {
        try {
            await AsyncStorage.setItem('TOKEN', '');
        } catch (error) {
            console.error(error)
        }
    };
    const deleteAccount = () => {
        setModalVisible(false)
        storeToken()
        navigation.navigate('Login')
    }

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.item} onPress={() => actionMove(item.title)}>
            {item.icon}
            <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const RenderModal = () => {
        return (
            <Modal isVisible={modalVisible}  >
                <View style={{ flex: 1 }}>
                    <View style={styles.modal}>
                        <Text style={{ color: '#2B3641', fontSize: 18, fontFamily: 'NotoSans-Bold' }}>
                            Do you want to Log out
                        </Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
                            <TouchableOpacity onPress={() => logOut()}>
                                <ButtonLeft name={'Log out'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <ButtonRight name={'Cancel'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >
        )
    }

    const RenderModal2 = () => {
        return (
            <Modal isVisible={modalVisible2}  >
                <View style={{ flex: 1 }} >
                    <View style={styles.modal2}>
                        <BigWarning />
                        <Text style={{ color: '#2B3641', fontSize: 17, fontFamily: 'NotoSans-Bold', marginTop: 15, marginHorizontal: 15, textAlign: 'center' }}>Do you want to Cancel Account?</Text>

                        <View style={{ marginTop: 20, borderBottomColor: '#C6CBCC', borderWidth: 0.5, height: 1, width: '100%' }}></View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
                            <TouchableOpacity onPress={() => deleteAccount()}>
                                <View style={styles.button} >
                                    <View><Text style={{ color: 'white', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>Yes</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setModalVisible2(false)}>
                                <ButtonRight name={'No'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >
        )
    }

    const ListHeaderComponent = () => (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.title}>Account</Text>
            <View style={styles.id}>
                <View>
                    <Image source={{ uri: DATA.avatar ? DATA.avatar : 'https://api-private.atlassian.com/users/723b896d2798f7fa036ecd700531f3a7/avatar' }} style={styles.avatar} ></Image>
                </View>
                <View style={styles.nickname}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16 }}>{DATA.username}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: '#5A636D', marginRight: 10 }} >ID: {DATA.id}</Text>
                        <Copy />
                    </View>
                </View>
            </View>
        </View>
    )

    const ListFooterComponent = () => (
        <TouchableOpacity style={styles.footer} onPress={() => setModalVisible2(true)}>
            <Text style={styles.warningtext}>Cancel Account</Text>
            <Warning />
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <FlatList
                    data={FLATLIST}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    ListHeaderComponent={ListHeaderComponent}
                    ListFooterComponent={ListFooterComponent}
                />
                {RenderModal()}
                {RenderModal2()}
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: WIDTH * 24 / 414,
        flex: 1
    },
    id: {
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        borderRadius: 10,
        marginTop: 25,
        padding: 18,
        marginBottom: 30
    },
    title: {
        alignSelf: 'center',
        fontFamily: 'NotoSans-Bold',
        fontSize: 24
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    item: {
        height: 68,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#C6CBCC',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemTitle: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
        marginLeft: 20
    },
    nickname: {
        marginLeft: 20
    },
    footer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FF4C41',
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45
    },
    warningtext: {
        color: '#FF4C41',
        fontSize: 16,
        fontFamily: 'NotoSans-Bold',
        marginRight: 10,

    },
    modal: {
        width: '90%',
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '55%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#FF4C41',
        height: 60,
        width: 130,
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    modal2: {
        width: '95%',
        height: 280,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '45%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 30,
    },
})
