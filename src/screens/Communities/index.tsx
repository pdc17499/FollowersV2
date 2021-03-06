import { Community } from '@components'
import { communities } from '@mocks'
import { getListCategories } from '@services'
import { Search } from '@svg'
import { HEIGHT, WIDTH } from '@utils'
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'

export function Communities({ navigation }: any) {
    const moveToDetail = (id: any, name: any, members: any, uri: any) => { navigation.navigate('CommunitiesDetail', { id, name, members, uri }) }
    const [text, onChangeText] = useState("");
    const [data, setData] = useState([])
    const [filteredDataSource, setFilteredDataSource] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const list: any = await getListCategories()

            setData(list.data.categories.data)
            setFilteredDataSource(list.data.categories.data)
        };
        getData();
    }, [])

    const searchFilterFunction = (text: any) => {
        const text1 = text.trim()
        // Check if searched text is not blank
        if (text1) {
            const newData = data.filter(function (item: any) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text1.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            onChangeText(text);
        } else {
            // Inserted text is blank           
            setFilteredDataSource(data);
            onChangeText(text);
        }
    }

    const renderItem = ({ item }: any) => (
        <TouchableOpacity onPress={() => moveToDetail(item.id, item.title, item.total_members, item.image)}>
            <Community name={item.title} members={item.total_members} uri={item.image}></Community>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Communities</Text>
                <View style={styles.search}>
                    <TouchableOpacity onPress={() => searchFilterFunction(text)}>
                        <Search />
                    </TouchableOpacity>
                    <TextInput style={styles.input}
                        placeholder={"Find a community"}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={text} />
                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: WIDTH * 25 / 414, marginTop: 30 }}
                data={filteredDataSource}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: HEIGHT * 40 / 896
    },
    headerTitle: {
        fontSize: 24,
        lineHeight: 33,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F6F5E8',
        height: 60,
        width: '90%',
        marginHorizontal: WIDTH * 25 / 414,
        marginTop: 15,
        paddingHorizontal: 20
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
})
