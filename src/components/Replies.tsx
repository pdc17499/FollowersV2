import { ReduxState } from '@interfaces';
import { dataUser } from '@mocks';
import { replyPost } from '@redux';
import { DeleteImage, ImagePost } from '@svg';
import { WIDTH } from '@utils';
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export function Replies(data: any) {
    const USER = useSelector((state: ReduxState) => state.user.userInfo);
    const dispatch = useDispatch()
    const [numOfLine, setNumOfLine] = useState(1)
    const [showBlockInput, setShowBlockInput] = useState(true)
    const [filePath, setFilePath] = useState('');

    const [text, setText] = useState('')
    const DATA2 = data.data
    const showInputText = () => {
        setShowBlockInput(false)
        setNumOfLine(3)
    }

    const pickSingle = (callback: (arg0: ImageOrVideo) => void) => {
        ImagePicker.openPicker({
            width: 1024,
            height: 1024,
            cropping: true
        }).then((image) => {
            if (typeof callback === 'function') {
                callback(image)
                console.log(image);
            }
            setFilePath(image.path)
            console.log(image);
        })
    }
    const createNewReply = () => {
        const newReply = {
            id: (Date.now() + Math.random()).toString(),
            status: 3,
            avatar: USER.avatar,
            name: USER.username,
            time: '1m',
            commentImage: filePath,
            content: text,
        }
        dispatch(replyPost(data.id, newReply))
        setText('')
        setShowBlockInput(true)
        setFilePath('')
        setNumOfLine(1)
    }

    const renderReplyItem = (item: any) => {
        const check = () => {
            if (item.item.status == 1) {
                return '#FF4C41'
            }
            if (item.item.status == 2) {
                return '#406FF1'
            }
            if (item.item.status == 3) {
                return 'white'
            }
            else return '#FEA827'
        }
        return (
            <View style={{ backgroundColor: '#F6F7F9', paddingVertical: 20, borderBottomColor: '#E8EEF1', borderBottomWidth: 1 }}>
                <View style={{ flexDirection: 'row', marginHorizontal: WIDTH * 30 / 414, alignItems: 'center' }}>
                    <View style={{
                        borderWidth: 2,
                        borderColor: `${check()}`,
                        height: 36,
                        width: 36,
                        borderRadius: 18,
                        backgroundColor: `${check()}`,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={{ uri: item.item.avatar }} style={styles.avatarMini}></Image>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, marginRight: 12, lineHeight: 22 }}>{item.item.name}</Text>
                            <View style={styles.dot}></View>
                            <Text style={{ fontFamily: 'NotoSans', fontSize: 16, marginLeft: 5, lineHeight: 22, color: '#A8ACAE' }}>{item.item.time}</Text>
                        </View>
                    </View>
                </View >
                <View style={{ marginLeft: 85, width: '70%' }}>
                    <Text style={styles.content}>{item.item.content}</Text>

                    {item.item.commentImage !== ''
                        ? <Image source={{ uri: item.item.commentImage }} style={styles.imageComment2}></Image>
                        : null
                    }
                </View>

            </View>
        )
    }

    return (
        <View>
            <View style={{ backgroundColor: 'white', marginTop: 5 }}>
                <View style={{ borderBottomColor: '#E8EEF1', borderBottomWidth: 1, marginVertical: 20 }} />

                <View style={styles.header}>
                    <Image source={{ uri: dataUser.data.user.avatar }} style={styles.avatarUser} ></Image>
                    <TextInput
                        multiline={true}
                        textAlignVertical='top'
                        numberOfLines={numOfLine}
                        style={styles.input}
                        onTouchStart={() => showInputText()}
                        value={text}
                        onChangeText={setText}
                        placeholder={'Your reply'}
                    />

                    {showBlockInput
                        ? <TouchableOpacity style={styles.button} onPress={() => createNewReply()}>
                            <Text style={{ color: 'white', fontFamily: 'NotoSans-Bold', fontSize: 16 }}>Reply</Text>
                        </TouchableOpacity>
                        : null}
                </View>

                {showBlockInput
                    ? null
                    : <View style={{ marginHorizontal: 25 }}>
                        {filePath !== ''
                            ? <View>
                                <Image source={{ uri: filePath }} style={styles.imageComment}></Image>
                                <TouchableOpacity style={{ position: 'absolute', top: 27, right: 7 }} onPress={() => setFilePath('')}>
                                    <DeleteImage />
                                </TouchableOpacity>
                            </View>
                            : null}

                        <View style={{ flexDirection: 'row', marginLeft: 70, marginTop: 18, alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => pickSingle()}>
                                <ImagePost />
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity style={styles.button2} onPress={() => createNewReply()}>
                                    <Text style={{ color: 'white', fontFamily: 'NotoSans-Bold', fontSize: 16 }}>Reply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }

            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 15 }}
                data={DATA2}
                renderItem={renderReplyItem}
                keyExtractor={item => item.id}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    input: {
        fontFamily: 'NotoSans',
        lineHeight: 22,
        marginLeft: 22,
        fontSize: 16,
        width: '70%',
        // backgroundColor: 'yellow'
    },
    header: {
        flexDirection: 'row'
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    avatarMini: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    dot: {
        marginTop: 2,
        backgroundColor: '#A8ACAE',
        height: 4,
        width: 4,
        borderRadius: 2
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
    avatarUser: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginLeft: 25
    },
    button: {
        backgroundColor: '#3FAEC7',
        height: 48,
        width: 75,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 25
    },
    button2: {
        backgroundColor: '#3FAEC7',
        height: 48,
        width: 75,
        borderRadius: 10,
        marginLeft: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageComment: {
        marginTop: 20,
        marginLeft: 70,
        height: 150,
        borderRadius: 10,
        width: 270,
    },
    imageComment2: {
        marginTop: 15,
        marginLeft: 0,
        height: 150,
        borderRadius: 10,
        width: 285,
    }
})
