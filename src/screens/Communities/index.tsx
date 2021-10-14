import { Community } from '@components'
import { communities } from '@mocks'
import { Back, Search } from '@svg'
import { HEIGHT, WIDTH } from '@utils'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'

const DATA = communities.data

export function Communities({ navigation }: any) {
    const moveToDetail = () => { navigation.navigate('CommunitiesDetail') }
    const [text, onChangeText] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);

    const searchFilterFunction = (text: any) => {
        // Check if searched text is not blank
        if (text) {
            const newData = DATA.filter(function (item: any) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            onChangeText(text);
        } else {
            // Inserted text is blank           
            setFilteredDataSource(DATA);
            onChangeText(text);
        }
    }

    const renderItem = ({ item }: any) => (
        <TouchableOpacity onPress={moveToDetail}>
            <Community name={item.name} members={item.member} uri={item.uri}></Community>
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
                keyExtractor={item => item.id}
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
