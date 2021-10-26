import { ReduxState } from '@interfaces';
import { Back, DeleteImage, ImagePost } from '@svg'
import React, { useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

export function CreatePost({ navigation }: any) {

    const [filePath, setFilePath] = useState({});

    const USER = useSelector((state: ReduxState) => state.user.userInfo);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

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
                        // console.log('received image', i);
                        return {
                            uri: i.path,
                            width: i.width,
                            height: i.height,
                            mime: i.mime,
                        };
                    }),
                });
            })
            .catch((e) => Alert.alert(e));
    }

    const deleteImage = (uri: any) => {
        const found = filePath.images.findIndex((element: any) => element.uri === uri);
        filePath.images.splice(found, 1)
        setFilePath({ ...filePath })
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
    console.log("path", filePath);

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>New Post</Text>
                <View style={styles.post}>
                    <Text style={styles.postTxt}>Post</Text>
                </View>
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

                        {(filePath.images)
                            ? <FlatList
                                style={{ marginBottom: 20, marginTop: 15 }}
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


