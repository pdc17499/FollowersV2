import { ReduxState } from '@interfaces';
import { Back, DeleteImage, ImagePost } from '@svg'
import React, { useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { WIDTH } from '@utils';
import { createPost } from '@redux';

export function CreatePost({ navigation }: any) {
    const dispatch = useDispatch()

    const [filePath, setFilePath] = useState({ images: [{ uri: '' }] });

    const USER = useSelector((state: ReduxState) => state.user.userInfo);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const createPostToForum = () => {
        const uri = filePath.images[0].uri
        const newPost = {
            id: (Date.now() + Math.random()).toString(),
            name: USER.username,
            time: '5h',
            timeDetail: '8:58 AM',
            dateTime: '27 Oct 2021',
            status: 3,
            avatar: USER.avatar,
            title: title,
            content: content,
            image: uri,
            like: '0 like',
            reply: '0 reply',
            isLike: false,
            isReply: false,
            replyList: [],
        }
        dispatch(createPost(newPost))
        navigation.navigate('Forum')
    }

    const pickMultiple = () => {
        ImagePicker.openPicker({
            width: 1024,
            height: 1024,
            cropping: true,
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
        })
            .then((images) => {
                setFilePath({
                    images: images.map((i) => {
                        return {
                            uri: i.path,
                            width: i.width,
                            height: i.height,
                            mime: i.mime,
                        };
                    }),
                });
            })
            .catch((e) => Alert.alert(e.message));
    }

    const deleteImage = (uri: any) => {
        const found = filePath.images.findIndex((element: any) => element.uri === uri);
        filePath.images.splice(found, 1)
        if (filePath.images.length === 0) setFilePath({ images: [{ uri: '' }] })
        else setFilePath({ ...filePath })
    }

    const renderItem = ({ item }: any) => {
        console.log('image', item);
        return (
            <View>
                <Image style={{ width: 146, height: 183, borderRadius: 8, marginRight: 10 }} source={{ uri: item.uri }} />
                <TouchableOpacity style={{ position: 'absolute', top: 10, left: 8 }} onPress={() => deleteImage(item.uri)}>
                    <DeleteImage />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>New Post</Text>
                <TouchableOpacity style={styles.post} onPress={() => createPostToForum()}>
                    <Text style={styles.postTxt}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: '#E8EEF1', borderBottomWidth: 1, marginVertical: 15 }} />

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image source={{ uri: USER.avatar }} style={styles.avatar}></Image>
                    <View>
                        <Text style={styles.username}>{USER.username}</Text>
                        <TextInput placeholder={"Title"}
                            onChangeText={setTitle}
                            numberOfLines={2}
                            style={styles.input}
                            value={title} />

                        <TextInput placeholder={"What do you want to share?"}
                            onChangeText={setContent}
                            style={styles.input}
                            numberOfLines={5}
                            multiline={true}
                            value={content} />

                        {(filePath.images && filePath.images[0].uri !== '')
                            ? <FlatList
                                style={{ marginBottom: 20, marginTop: 15, width: WIDTH - 100, height: 'auto', }}
                                horizontal
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                legacyImplementation={false}
                                data={filePath.images}
                                renderItem={renderItem}
                                keyExtractor={item => item.uri}
                            />
                            : null}

                        <TouchableOpacity onPress={() => pickMultiple()}>
                            <ImagePost />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        marginLeft: 70,
        marginRight: 45
    },
    post: {
        backgroundColor: '#3FAEC7',
        borderRadius: 8,
        height: 48,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postTxt: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'NotoSans-Bold'
    },
    container: {
        marginHorizontal: 25
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 16
    },
    username: {
        lineHeight: 22,
        fontSize: 16,
        fontFamily: 'NotoSans-Bold',
    },
    input: {
        fontSize: 16,
        textAlignVertical: "top",
        marginTop: 10,
        fontFamily: 'NotoSans'
    }
})