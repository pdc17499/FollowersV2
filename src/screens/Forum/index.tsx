import { Replies } from '@components'
import { Back, EditForum, RedHeart, Reply, WhiteHeart } from '@svg'
import { WIDTH } from '@utils'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { getListOfPosts, likePost } from '@services'

export function Forum({ route, navigation }: any) {
    const { id } = route.params
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data: any = await getListOfPosts(id)
        const post: never[] = data.data.data.data
        console.log('fa', post);
        setPosts([...post])
    };

    const moveToPostDetail = (item: any) => {
        navigation.navigate('PostDetail', { id1: id, id2: item.id })
    }
    const sendLike = async (itemID: string) => {
        await likePost({ "category_id": id, "id": itemID })
        getData();
    }
    const sendDislike = () => { }

    const renderItem = ({ item }: any) => {
        const check = () => {
            if (item.user_status == 1) {
                return '#FEA827'
            }
            if (item.user_status == 2) {
                return '#FF4C41'
            }
            if (item.user_status == 3) {
                return 'white'
            }
            else return '#406FF1'
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
                        <Image source={{ uri: item.author.avatar ? item.author.avatar : 'https://api-private.atlassian.com/users/723b896d2798f7fa036ecd700531f3a7/avatar' }} style={styles.avatar}></Image>
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, marginRight: 15, lineHeight: 22 }}>{item.author.username}</Text>
                            <View style={styles.dot}></View>
                            <Text style={{ fontFamily: 'NotoSans', fontSize: 16, marginLeft: 5, color: '#A8ACAE' }}>{item.created_at.slice(0, 10)}</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 10, width: '90%' }}>
                            <TouchableOpacity onPress={() => moveToPostDetail(item)}>
                                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                            </TouchableOpacity>
                            <Text style={styles.content}>{item.content}</Text>
                            {(item.file[0])
                                ? <Image resizeMode={'cover'} source={{ uri: item.file[0] }} style={styles.image}></Image>
                                : null
                            }
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                            {item.check_like === true
                                ? <TouchableOpacity onPress={() => sendDislike()}><RedHeart /></TouchableOpacity>
                                : <TouchableOpacity onPress={() => sendLike(item.id)}><WhiteHeart /></TouchableOpacity>}

                            <Text style={styles.text}>{item.total_like}</Text>

                            <View style={{ width: 20 }}></View>
                            <TouchableOpacity onPress={() => moveToPostDetail(item.id)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Reply />
                                <Text style={styles.text}>{item.total_comment}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
                {(item.isReply === true)
                    ? <Replies data={item.replyList} id={item.id} />
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
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 30
    },
    headerTxt: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 24,
        lineHeight: 32,
        marginLeft: 80,
        marginRight: 80
    },
    dot: {
        marginTop: 2,
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
        marginBottom: 5,
        width: 275
    },
    text: {
        color: '#2B3641',
        fontFamily: 'NotoSans',
        fontSize: 15,
        marginLeft: 7
    },

})
