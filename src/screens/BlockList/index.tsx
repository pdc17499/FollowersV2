import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import { HEIGHT, WIDTH } from '@utils';
import React, { useState } from 'react';
import { Back, Search, User } from '@svg';
import { bloclList } from '@mocks';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@interfaces';
import { removeBlockUser } from '@redux';

export function BlockList({ navigation }: any) {
    const INFO = useSelector((state: ReduxState) => state.blockUser.listUserBlocked);
    const dispatch = useDispatch()

    console.log('info', INFO);

    const removeBlock = (name: string) => {
        dispatch(removeBlockUser(name))
    }

    const renderItem = ({ item }: any) => (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: item.avatar }} style={styles.avatar}></Image>
                <Text style={styles.userName}>{item.name}</Text>
            </View>
            <TouchableOpacity style={styles.block} onPress={() => removeBlock(item.name)}>
                <Text style={styles.text}>Remove block</Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}><Back /></TouchableOpacity>
                    <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: '#191B1D', marginLeft: 90, }}>
                        Block List</Text>
                </View>

                <FlatList
                    style={{ marginTop: 30 }}
                    data={INFO}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: WIDTH * 24 / 414,
        flex: 1
    },
    userName: {
        color: '#2B8093',
        fontFamily: 'NotoSans-Bold',
        fontSize: 16,
        marginLeft: 15
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 60 / 896,
        marginLeft: 10,
    },
    item: {
        backgroundColor: '#F6F7F9',
        padding: 24,
        borderRadius: 10,
        marginBottom: 20
    },

    avatar: {
        borderWidth: 1,
        height: 42,
        width: 42,
        borderRadius: 21,
        marginLeft: 5
    },
    block: {
        height: 56,
        borderWidth: 1,
        borderColor: '#191B1D',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 16
    },
    text: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 16,
        alignSelf: 'center',
        color: '#191B1D',
    }
});

