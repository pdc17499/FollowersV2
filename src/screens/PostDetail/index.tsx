import { ButtonLeft, ButtonRight, Replies } from '@components'
import { ReduxState } from '@interfaces'
import { deletePost, setLiked } from '@redux'
import { Back, RedHeart, Reply, ThreeDots, Trash, WhiteHeart } from '@svg'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Modal from "react-native-modal";
import { likedUser } from '@mocks'

export function PostDetail({ route, navigation }: any) {
    const FORUM = useSelector((state: ReduxState) => state.forum.forumInfo);
    const postId = route.params
    const ITEM = FORUM.filter(((e: any) => e.id === postId.id))
    const [like, setLike] = useState('')
    const [isLike, setIsLike] = useState(true)
    const [showDelete, setShowDelete] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const dispatch = useDispatch()

    const changeLiked = (id: any) => {
        dispatch(setLiked(id))
    }
    const deletePostMessage = () => {
        dispatch(deletePost(ITEM[0].id))
        navigation.navigate('Forum')
    }
    const RenderModal2 = () => {
        return (
            <Modal isVisible={modalVisible2}  >
                <TouchableOpacity onPressOut={() => setModalVisible2(false)} style={{ flex: 1 }}>
                    <View style={styles.modal2}>
                        <Text style={{ color: '#2B3641', fontSize: 17, fontFamily: 'NotoSans-Bold' }}>
                            Do you want to delete this post?
                        </Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40, marginLeft: -10 }}>
                            <TouchableOpacity onPress={() => deletePostMessage()}>
                                <ButtonLeft name={'Delete'} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setModalVisible2(false)}>
                                <ButtonRight name={'Cancel'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal >
        )
    }
    const renderLikedUser = ({ item }: any) => {
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
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginBottom: 24 }}>
                <View style={{
                    borderWidth: 2,
                    borderColor: `${check()}`,
                    height: 54,
                    width: 54,
                    borderRadius: 27,
                    backgroundColor: `${check()}`,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar}></Image>
                </View>
                <Text style={styles.likedUsername}>{item.name}</Text>
            </View>
        )
    }

    const openModal = (like: any, isLike: any) => {
        setModalVisible(true)
        setLike(like)
        setIsLike(isLike)
    }

    const onPressBlockDelete = () => {
        setShowDelete(false)
        setModalVisible2(true)
    }

    const RenderModal = () => (
        <Modal isVisible={modalVisible} style={{ margin: 0, }} >
            <TouchableOpacity onPressOut={() => setModalVisible(false)} >
                <View style={{ height: 90 }}></View>
            </TouchableOpacity>
            <View style={styles.minitask}></View>
            <View style={styles.modal} >
                <View style={styles.headerModal}>
                    {isLike === true ? <RedHeart /> : <WhiteHeart />}
                    <Text style={styles.text2}>{like}</Text>
                </View>
                <View style={{ borderBottomColor: '#E8EEF1', borderBottomWidth: 1, marginBottom: 10 }} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 15 }}
                    data={likedUser}
                    renderItem={renderLikedUser}
                    keyExtractor={item => item.id}
                />
            </View>
        </Modal>
    )

    const renderItem = ({ item }: any) => {
        const check = () => {
            if (item.status == 1) {
                return '#FF4C41'
            }
            if (item.status == 2) {
                return '#406FF1'
            }
            if (item.status == 3) {
                return 'white'
            }
            else return '#FEA827'
        }
        return (
            <View>
                <View style={{ borderBottomColor: '#E8EEF1', borderBottomWidth: 1, marginBottom: 20, }} />
                <View style={{ marginHorizontal: 25 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            borderWidth: 2,
                            borderColor: `${check()}`,
                            height: 54,
                            width: 54,
                            borderRadius: 27,
                            backgroundColor: `${check()}`,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 10
                        }}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar}></Image>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, marginRight: 15, lineHeight: 22, marginTop: 5 }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'NotoSans', fontSize: 16, color: '#A8ACAE' }}>{item.timeDetail}</Text>
                                <View style={styles.dot}></View>
                                <Text style={{ fontFamily: 'NotoSans', fontSize: 16, color: '#A8ACAE' }}>{item.dateTime}</Text>
                            </View>
                        </View>
                        {(item.status === 3)
                            ? <TouchableOpacity style={{ marginLeft: 80 }} onPress={() => setShowDelete(!showDelete)}>
                                <ThreeDots /></TouchableOpacity>
                            : null
                        }
                        {(showDelete)
                            ? <TouchableOpacity style={styles.blockDelete} onPress={() => onPressBlockDelete()}>
                                <Text style={{ color: 'white', fontFamily: 'NotoSans-Bold', marginRight: 5 }}>Delete</Text>
                                <Trash />
                            </TouchableOpacity>
                            : null
                        }
                    </View>
                    <View style={{ marginTop: 10 }} >

                        <View style={{ marginTop: 5, marginRight: 10, width: '100%' }}>
                            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                            {(item.image !== '')
                                ? <Image source={{ uri: item.image }} style={styles.image}></Image>
                                : null
                            }
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', marginLeft: 5 }}>

                            {item.isLike === true
                                ? <TouchableOpacity onPress={() => changeLiked(item.id)}><RedHeart /></TouchableOpacity>
                                : <TouchableOpacity onPress={() => changeLiked(item.id)}><WhiteHeart /></TouchableOpacity>}

                            <TouchableOpacity onPress={() => openModal(item.like, item.isLike)}>
                                <Text style={styles.text}>{item.like}</Text>
                            </TouchableOpacity>
                            <View style={{ width: 20 }}></View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Reply />
                                <Text style={styles.text}>{item.reply}</Text>
                            </View>
                        </View>
                    </View>

                </View >

                <Replies data={item.replyList} id={item.id} />

            </View >
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>

                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                data={ITEM}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {RenderModal()}
            {RenderModal2()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 35
    },
    headerTxt: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 24,
        lineHeight: 32,
        marginLeft: 80,
        marginRight: 80
    },
    dot: {
        backgroundColor: '#A8ACAE',
        height: 4,
        width: 4,
        borderRadius: 2,
        marginLeft: 7,
        marginRight: 7
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    content: {
        color: '#2B3641',
        fontFamily: 'NotoSans',
        fontSize: 15,
        lineHeight: 20,
        marginTop: 10
    },
    title: {
        fontFamily: 'NotoSans-Bold', fontSize: 18, lineHeight: 25,
    },
    image: {
        height: 180,
        borderRadius: 10,
        marginTop: 17,
        marginBottom: 5
    },
    text: {
        color: '#2B3641',
        fontFamily: 'NotoSans',
        fontSize: 15,
        marginLeft: 7
    },
    text2: {
        color: '#2B3641',
        fontFamily: 'NotoSans',
        fontSize: 18,
        marginLeft: 10
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        width: '100%'
    },
    minitask: {
        height: 5,
        width: 129,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 7,
        alignSelf: 'center'
    },
    headerModal: {
        marginVertical: 20,
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    likedUsername: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
        marginLeft: 23
    },
    blockDelete: {
        height: 55,
        width: 106,
        backgroundColor: '#2B3641',
        position: 'absolute',
        top: 42,
        right: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    modal2: {
        width: '95%',
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
})
