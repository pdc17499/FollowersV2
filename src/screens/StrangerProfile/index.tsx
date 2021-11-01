import { HEIGHT, WIDTH } from '@utils'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BigWarning, CaretLeft, Users, Warning } from '@svg'
import { PROFILE_BACKGROUND } from '@assets'
import { ButtonRight, JoinedCommunitiesBlock } from '@components'
import { joinedCommunities, strangerData } from '@mocks'
import Modal from "react-native-modal";
import { useDispatch } from 'react-redux'
import { setBlockUserInfo } from '@redux';


export function StrangerProfile({ route, navigation }: any) {

    const { name, avatar, friend, id } = route.params
    const [send, setSend] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch()

    const block = () => {
        setModalVisible(false)
        navigation.navigate('BlockList')
        dispatch(setBlockUserInfo(id, name, avatar))
    }

    const RenderModal = () => {
        return (
            <Modal isVisible={modalVisible}   >
                <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <View style={styles.modal}>
                        <BigWarning />
                        <Text style={{ color: '#2B3641', fontSize: 18, fontFamily: 'NotoSans', marginTop: 15 }}>Are you sure you want to block</Text>
                        <Text style={{ color: '#2B3641', fontSize: 18, fontFamily: 'NotoSans-Bold' }}>{name}</Text>
                        <View style={{ marginTop: 20, borderBottomColor: '#C6CBCC', borderWidth: 0.5, height: 1, width: '100%' }}></View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
                            <TouchableOpacity onPress={() => block()}>
                                <View style={styles.button} >
                                    <View><Text style={{ color: 'white', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>Block</Text></View>
                                </View>
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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 24 }}>
                    <Image source={PROFILE_BACKGROUND} style={styles.background}></Image>
                    <View style={{ paddingHorizontal: WIDTH * 24 / 414 }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <CaretLeft />
                            </TouchableOpacity>
                        </View>
                        <Image source={{ uri: avatar }} style={styles.avatar}></Image>

                        <View style={styles.name}>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 24, color: '#2B8093' }}>{name}</Text>
                        </View>

                        <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.miniblock} >
                                <Users />
                                <Text style={{ color: '#7CAE12', fontSize: 15, fontFamily: 'NotoSan-Bold', marginLeft: 5 }}>{friend}</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.bigtext}>Introduction</Text>
                            <Text numberOfLines={5} style={styles.introduction}>Hello world, I’m Yuki from Japan and I’m creating the beautiful videos. I wish Facebook would notify me when someone deletes me. That way I could ‘Like’ it. My brain is divided into two parts.</Text>
                        </View>

                        <View style={{ marginTop: 48 }}>
                            <Text style={styles.bigtext}>Joined communities</Text>

                            <View style={{ flexDirection: 'row', }}>
                                <JoinedCommunitiesBlock name={'Anime'} uri={'https://i.pinimg.com/564x/e9/2c/87/e92c87c22428d3ac7ec2e5b828fee714.jpg'}></JoinedCommunitiesBlock>
                                <JoinedCommunitiesBlock name={'Motocycle'} uri={'https://i.pinimg.com/564x/6c/fd/ae/6cfdae7868b95cbdaa5e8977305f9b25.jpg'}></JoinedCommunitiesBlock>
                            </View>
                            <View style={{ width: '70%' }}>
                                <JoinedCommunitiesBlock name={'Western Movies'} uri={'https://i.pinimg.com/236x/7c/c8/cf/7cc8cff40d8107e941d4009fcb24f4c0.jpg'}></JoinedCommunitiesBlock>
                            </View>
                        </View>

                        {send === true
                            ? <View style={{ marginTop: 40, marginBottom: 25, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'NotoSans-Bold', color: '#2B8093' }}>Request Pending ...</Text>
                                <Text style={{ fontSize: 16, fontFamily: 'NotoSans', color: '#5A636D' }}>Your RuiTomo request has been sent</Text>
                            </View>
                            : <TouchableOpacity style={styles.send} onPress={() => setSend(true)}>
                                <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "white", lineHeight: 22, marginRight: 5 }}>Send RuiTomo Request</Text>
                            </TouchableOpacity>}

                        <TouchableOpacity style={styles.block} onPress={() => setModalVisible(true)}>
                            <Text style={{ fontSize: 16, fontFamily: 'NotoSans-Bold', fontWeight: '600', color: "#FF4C41", lineHeight: 22, marginRight: 5 }}>Block user</Text>
                            <Warning />
                        </TouchableOpacity>
                    </View>
                </View>
                {RenderModal()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 90 / 896,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 200
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: 32
    },
    name: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    miniblock: {
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        borderRadius: 15,
        height: 36,
        width: '28%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8
    },
    item: {
        marginHorizontal: WIDTH * 24 / 414,
        backgroundColor: '#F6F5E8',
        height: 60,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        borderRadius: 10,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25
    },
    bigtext: {
        color: '#191B1D',
        fontFamily: 'NotoSans-Bold',
        fontSize: 24
    },
    introduction: {
        color: '#5A636D',
        fontFamily: 'NotoSans',
        fontSize: 16,
        lineHeight: 25,
        marginTop: 15
    },
    send: {
        height: 58,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#3FAEC7',
        backgroundColor: '#3FAEC7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 60
    },
    block: {
        height: 58,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FF4C41',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 40,
    },
    modal: {
        width: '95%',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '40%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 30
    },
    button: {
        backgroundColor: '#FF4C41',
        height: 60,
        width: 130,
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
})
