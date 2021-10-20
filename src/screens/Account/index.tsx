import { ButtonLeft, ButtonRight } from '@components';
import { ReduxState } from '@interfaces';
import { dataUser, joinedCommunities } from '@mocks';
import { Copy, LockKeyOpen, Prohibit, SignOut, UserCircle, Warning } from '@svg';
import { WIDTH } from '@utils'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, FlatList, Alert, Modal, TouchableOpacity } from 'react-native'
import { Cong, loginThunk, setUserInfo, setToken, logout } from '@redux';
import { useDispatch, useSelector } from 'react-redux';

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
    const DATA = dataUser.data.user

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
    const logOut = () => {
        dispatch(logout())
        setModalVisible(false)
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
            <Modal animationType="slide" transparent={true} visible={modalVisible}  >
                <TouchableOpacity onPressOut={() => setModalVisible(false)} style={{ flex: 1 }}>
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
                </TouchableOpacity>

            </Modal >

        )

    }

    const ListHeaderComponent = () => (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.title}>Account</Text>
            <View style={styles.id}>
                <View>
                    <Image source={{ uri: DATA.avatar }} style={styles.avatar} ></Image>
                </View>
                <View style={styles.nickname}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16 }}>{DATA.nick_name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'NotoSans', fontSize: 16, color: '#5A636D', marginRight: 10 }} >ID: {DATA.id}</Text>
                        <Copy />
                    </View>
                </View>
            </View>
        </View>
    )

    const ListFooterComponent = () => (
        <View style={styles.footer}>
            <Text style={styles.warningtext}>Cancel Account</Text>
            <Warning />
        </View>
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
        height: 60,
        width: 60,
        borderRadius: 30,
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
        width: '80%',
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '55%',
        backgroundColor: 'white',
        borderRadius: 10

    }
})
