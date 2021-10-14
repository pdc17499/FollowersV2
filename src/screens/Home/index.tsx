import { Community } from '@components'
import { communities, communitiesHome, dataUser, joinedCommunities } from '@mocks'
import { Coin, FacebookLogo, Right, Speaker, TwitterLogo } from '@svg'
import { HEIGHT, WIDTH } from '@utils'
import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const DATA = joinedCommunities.data
const DATA2 = communitiesHome.data

export function Home({ navigation }: any) {
    const moveToCommunityDetail = () => { navigation.navigate('CommunitiesDetail') }

    const Item = ({ title, uri }: any) => (

        <TouchableOpacity style={styles.item} onPress={moveToCommunityDetail}>
            <Image source={{ uri: uri }} style={{ flex: 1, borderRadius: 16 }}></Image>
            <Text style={styles.title2}>{title}</Text>
        </TouchableOpacity>
    );
    const moveToPurchase = () => { navigation.navigate('Purchase') }

    const renderItem = ({ item }: any) => (
        <Item title={item.title} uri={item.uri} />
    );

    const seeAll = () => { navigation.navigate('Communities') }
    const moveToDetail = () => { navigation.navigate('CommunitiesDetail') }

    const renderItem2 = ({ item }: any) => (
        <TouchableOpacity onPress={moveToDetail}>
            <Community name={item.name} members={item.member} uri={item.uri}></Community>
        </TouchableOpacity>
    );

    const ContentThatGoesUnderTheFlatList = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ marginLeft: WIDTH * 24 / 414 }} showsVerticalScrollIndicator={false}>
                {/* HEADER  */}
                <View style={{ flexDirection: 'row', marginTop: HEIGHT * 56 / 896, alignItems: 'center', }}>
                    <View>
                        <Image source={{ uri: dataUser.data.user.avatar }} style={styles.ava} ></Image>
                    </View>
                    <View style={{ marginLeft: 20, paddingTop: 10, paddingBottom: 5, }}>
                        <Text style={{ color: '#5A636D', fontFamily: 'NotoSans', fontSize: 18, lineHeight: 25 }}>Hello</Text>
                        <Text style={{ color: '#191B1D', fontFamily: 'NotoSans-Bold', fontSize: 24 }}>Matsuura Yuki</Text>
                    </View>
                </View>

                {/* NEWS  */}
                <View style={styles.news}>
                    <Speaker></Speaker>
                    <View style={{ paddingLeft: 15, }}>
                        <Text style={{ color: '#3FAEC7', fontSize: 18, fontFamily: 'NotoSans-Bold', }}>
                            News for you</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>You don't have enough </Text>
                            <Text style={{ fontFamily: 'NotoSans-Bold' }}>TomoCoins! </Text>
                        </View>
                        <Text style={styles.text} >Please purchase some in the store. </Text>
                    </View>
                </View>

                {/* BODY */}
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.title}>Joined communities</Text>
                    <View style={{ height: 20 }}></View>

                    <View style={{
                        width: WIDTH - 25, height: 'auto',
                        flexDirection: 'row',
                        marginRight: 20,
                        marginBottom: 30
                    }}>
                        <FlatList
                            horizontal
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            legacyImplementation={false}
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>

                <Text style={styles.title}>Others</Text>

                <FlatList
                    data={DATA2}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                // ListFooterComponent={ContentThatGoesUnderTheFlatList()}

                />

                <TouchableOpacity onPress={seeAll}>
                    <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#3FAEC7', fontSize: 20, fontFamily: 'NotoSans-Bold', marginRight: 12 }}>See all</Text>
                        <Right></Right>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={moveToPurchase} >
                        <View style={styles.block}>
                            <Coin></Coin>
                            <Text style={{ marginLeft: 15, fontFamily: 'NotoSans-Bold', fontSize: 16, color: '#191B1D' }}>
                                Purchase TomoCoins</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.block}>
                        <TwitterLogo></TwitterLogo>
                        <Text style={{ marginLeft: 15, fontFamily: 'NotoSans-Bold', fontSize: 16, color: '#191B1D' }}>
                            Introduce via Twitter</Text>
                    </View>
                    <View style={styles.block}>
                        <FacebookLogo></FacebookLogo>
                        <Text style={{ marginLeft: 15, fontFamily: 'NotoSans-Bold', fontSize: 16, color: '#191B1D' }}>
                            Introduce via Facebook</Text>
                    </View>
                </View>

                <View style={{ height: 30 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ava: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    news: {
        marginTop: HEIGHT * 36 / 896,
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#F6F5E8',
        paddingLeft: 16,
        paddingVertical: 30,
        marginRight: WIDTH * 25 / 414,
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'NotoSans',
        fontSize: 14,
        color: '#A8ACAE'

    },
    title: {
        color: '#191B1D',
        fontSize: 24,
        fontFamily: 'NotoSans-Bold',
        lineHeight: 33
    },
    block: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#F6F7F9',
        borderWidth: 1,
        borderColor: '#F6F7F9',
        marginRight: WIDTH * 25 / 414,
        borderRadius: 10,
        padding: 15,
        height: 70
    },
    item: {
        width: 210,
        height: 129,
        borderRadius: 16,
        marginRight: 12,
        borderWidth: 1,
        borderColor: 'white'
    },
    title2: {
        fontSize: 16,
        position: 'absolute',
        fontFamily: 'NotoSans-Bold',
        color: 'white',
        bottom: 10,
        left: 10
    },
})
