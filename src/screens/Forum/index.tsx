import { Replies } from '@components'
import { ReduxState } from '@interfaces'
import { setLiked, setShowReply } from '@redux'
import { Back, EditForum, RedHeart, Reply, WhiteHeart } from '@svg'
import { WIDTH } from '@utils'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Modal from "react-native-modal";
import { likedUser } from '@mocks'

export function Forum({ navigation }: any) {

    const FORUM = useSelector((state: ReduxState) => state.forum.forumInfo);

    const [like, setLike] = useState('1.2K')
    const [isLike, setIsLike] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch()

    const changeLiked = (id: any) => {
        dispatch(setLiked(id))

    }
    const showReply = (id: any) => {
        dispatch(setShowReply(id))
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

    const RenderModal = () => (
        <Modal isVisible={modalVisible} style={{ margin: 0, }} >
            <TouchableOpacity onPressOut={() => setModalVisible(false)} >
                <View style={{ height: 90 }}></View>
            </TouchableOpacity>
            <View style={styles.minitask}></View>
            <View style={styles.modal} >
                <View style={styles.headerModal}>
                    {isLike === true ? <RedHeart /> : <WhiteHeart />}
                    <Text style={styles.text2}>{like} likes</Text>
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
            else return '#FEA827'
        }

        return (
            <View>
                <View style={{ borderBottomColor: '#E8EEF1', borderBottomWidth: 1, marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: WIDTH * 25 / 414 }}>
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
                    <View style={{ marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, marginRight: 15, lineHeight: 22 }}>{item.name}</Text>
                            <View style={styles.dot}></View>

                            <Text style={{ fontFamily: 'NotoSans', fontSize: 16, marginLeft: 5, color: '#A8ACAE' }}>{item.time}</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 10, width: '90%' }}>
                            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                            <Image source={{ uri: item.image }} style={styles.image}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>

                            {item.isLike === true ? <TouchableOpacity onPress={() => changeLiked(item.id)}><RedHeart /></TouchableOpacity>
                                : <TouchableOpacity onPress={() => changeLiked(item.id)}><WhiteHeart /></TouchableOpacity>}
                            <TouchableOpacity onPress={() => openModal(item.like, item.isLike)}>
                                <Text style={styles.text}>{item.like} likes</Text>
                            </TouchableOpacity>
                            <View style={{ width: 20 }}></View>
                            <TouchableOpacity onPress={() => showReply(item.id)}>
                                <Reply />
                            </TouchableOpacity>
                            <Text style={styles.text}>{item.reply} replies</Text>
                        </View>
                    </View>
                </View >
                {(item.isReply === true)
                    ? <Replies data={item.replyList} />
                    : <View style={{ height: 25 }}></View>
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>
                    <Text style={styles.headerTxt}>Forum</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}><EditForum /></TouchableOpacity>

                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                data={FORUM}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {RenderModal()}
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
        borderRadius: 2
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
        marginLeft: 5
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
    }
})
