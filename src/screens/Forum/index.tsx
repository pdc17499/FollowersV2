import { forumPost } from '@mocks'
import { Back, EditForum, RedHeart, Reply, WhiteHeart } from '@svg'
import { WIDTH } from '@utils'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const DATA = forumPost.data

export function Forum() {

    const [isLike, setIsLike] = useState(false)

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
            <View style={{ marginBottom: 20 }}>
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

                            {isLike ? <TouchableOpacity onPress={() => setIsLike(!isLike)}><RedHeart /></TouchableOpacity>
                                : <TouchableOpacity onPress={() => setIsLike(!isLike)}><WhiteHeart /></TouchableOpacity>}
                            <Text style={styles.text}>{item.like} likes</Text>
                            <View style={{ width: 20 }}></View>
                            <Reply />
                            <Text style={styles.text}>{item.reply} replies</Text>
                        </View>
                    </View>
                </View >
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <View style={styles.header}>
                    <Back />
                    <Text style={styles.headerTxt}>Forum</Text>
                    <EditForum />
                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                data={DATA}
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
        marginTop: 60
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
