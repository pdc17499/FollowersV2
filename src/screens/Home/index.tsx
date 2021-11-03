import { Community } from '@components'
import { ReduxState } from '@interfaces'
import { communitiesHome, dataUser, joinedCommunities } from '@mocks'
import { getHomeInfo, getListCategories } from '@services'
import { Coin, FacebookLogo, Right, Speaker, TwitterLogo } from '@svg'
import { HEIGHT, WIDTH } from '@utils'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

export function Home({ navigation }: any) {

    const USER = useSelector((state: ReduxState) => state.user.userInfo);
    const moveToPurchase = () => { navigation.navigate('Purchase') }
    const [data, setData] = useState()
    const [joinedCommunities, setJoinedCommunities] = useState()

    useEffect(() => {
        const getData = async () => {
            const Home: any = await getHomeInfo()
            console.log('homeee', Home.data.data.user.communities);
            setJoinedCommunities(Home.data.data.user.communities)
            setData(Home.data.data.listCategories)
        };
        getData();
    }, [])

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.item} onPress={() => moveToDetail(item.title, item.member, item.uri)}>
            <Image source={{ uri: item.image }} style={{ flex: 1, borderRadius: 16 }}></Image>
            <Text style={styles.title2}>{item.name}</Text>
        </TouchableOpacity>
    );

    const seeAll = () => { navigation.navigate('Communities') }

    const renderItem2 = ({ item }: any) => (
        <TouchableOpacity onPress={() => moveToDetail(item.title, item.total_members, item.image)}>
            <Community name={item.title} members={item.total_members} uri={item.image}></Community>
        </TouchableOpacity>
    );
    const moveToDetail = (name: any, members: any, uri: any) => { navigation.navigate('CommunitiesDetail', { name, members, uri }) }

    const ListFooterComponent = () => (
        <View>
            <TouchableOpacity onPress={seeAll}>
                <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#3FAEC7', fontSize: 20, fontFamily: 'NotoSans-Bold', marginRight: 12 }}>See all</Text>
                    <Right />
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
        </View>
    )

    const ListHeaderComponent = () => (
        <View>
            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 56 / 896, alignItems: 'center', }}>
                <View>
                    <Image source={{ uri: USER.avatar }} style={styles.ava} ></Image>
                </View>
                <View style={{ marginLeft: 20, paddingTop: 10, paddingBottom: 5, }}>
                    <Text style={{ color: '#5A636D', fontFamily: 'NotoSans', fontSize: 18, lineHeight: 25 }}>Hello</Text>
                    <Text style={{ color: '#191B1D', fontFamily: 'NotoSans-Bold', fontSize: 24 }}>{USER.username}</Text>
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
                        data={joinedCommunities}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />
                </View>
            </View>
            <Text style={styles.title}>Others</Text>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginLeft: WIDTH * 24 / 414, flex: 1 }} >
                <FlatList
                    data={data}

                    renderItem={renderItem2}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={ListHeaderComponent}
                    ListFooterComponent={ListFooterComponent}
                />
            </View>
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
