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
import { friendList } from '@mocks';

export function RuiTomoList({ navigation }: any) {
    const DATA = friendList.data
    const [text, onChangeText] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);

    const searchFilterFunction = (text: any) => {
        const text1 = text.trim()
        // Check if searched text is not blank
        if (text1) {
            const newData = DATA.filter(function (item: any) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text1.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            onChangeText(text);
        } else {
            setFilteredDataSource(DATA);
            onChangeText(text);
        }
    }

    const renderItem = ({ item }: any) => (

        <View style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.borderAvatar}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar}></Image>
                </View >
                <View style={{ marginLeft: 20, width: '48%' }}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            color: '#5A636D', fontFamily: 'NotoSans', fontSize: 14, marginRight: 5
                        }}>{item.friend}</Text>
                        <User />
                    </View>
                    <Text style={{ color: '#5A636D', fontFamily: 'NotoSans', fontSize: 14 }}>{item.description}</Text>
                </View>
            </View>

            <View style={{ marginLeft: 73 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }} >
                    <Image source={{ uri: item.communities[0].uri }} style={styles.miniImage}></Image>
                    <Text style={{ color: '#2B3641', lineHeight: 23, fontFamily: 'NotoSans-Bold', fontSize: 14, marginLeft: 8 }}>{item.communities[0].name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }} >
                    <Image source={{ uri: item.communities[1].uri }} style={styles.miniImage}></Image>
                    <Text style={{ color: '#2B3641', lineHeight: 23, fontFamily: 'NotoSans-Bold', fontSize: 14, marginLeft: 8 }}>{item.communities[1].name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5 }} >
                    <Image source={{ uri: item.communities[2].uri }} style={styles.miniImage}></Image>
                    <Text style={{ color: '#2B3641', lineHeight: 23, fontFamily: 'NotoSans-Bold', fontSize: 14, marginLeft: 8 }}>{item.communities[2].name}</Text>
                </View>
            </View>
        </View>

    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Back /></TouchableOpacity>
                    <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: '#191B1D', marginLeft: 62, }}>
                        RuiTomo List</Text>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity onPress={() => searchFilterFunction(text)}>
                        <Search />
                    </TouchableOpacity>
                    <TextInput style={styles.input}
                        placeholder={"Name"}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={text} />
                </View>

                <FlatList
                    data={filteredDataSource}
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
        fontSize: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 60 / 896,
    },
    item: {
        backgroundColor: '#F6F7F9',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    borderAvatar: {
        borderWidth: 2,
        borderColor: '#FF4C41',
        height: 56,
        width: 56,
        borderRadius: 28,
        backgroundColor: '#FF4C41',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        borderWidth: 1,
        height: 52,
        width: 52,
        borderRadius: 26,
    },
    miniImage: {
        height: 24,
        width: 24, borderRadius: 12
    },
    message: {
        fontSize: 15,
        color: '#5A636D',
        marginLeft: 10
    },
    input: {
        height: 50,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        padding: 10,
        fontFamily: 'NotoSans',
        fontSize: 16,
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6F5E8',
        height: 60,
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 35
    },
});

