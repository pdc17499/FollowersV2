import { Replies } from '@components'
import { ReduxState } from '@interfaces'
import { setLiked, setShowReply } from '@redux'
import { Back, EditForum, RedHeart, Reply, WhiteHeart } from '@svg'
import { WIDTH } from '@utils'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export function Forum({ navigation }: any) {

    const FORUM = useSelector((state: ReduxState) => state.forum.forumInfo);

    const dispatch = useDispatch()

    const changeLiked = (id: any) => {
        dispatch(setLiked(id))

    }
    const showReply = (id: any) => {
        dispatch(setShowReply(id))
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
                            <Text style={styles.text}>{item.like} likes</Text>
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
                    <EditForum />
                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                data={FORUM}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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


})
