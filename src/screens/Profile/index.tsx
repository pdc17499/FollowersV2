import { HEIGHT, WIDTH } from '@utils'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Back, BigCoin, CaretLeft, Copy, Crown, Facebook, Instagram, PencilLine, Twitter, Users, Youtube } from '@svg'
import { PROFILE_BACKGROUND } from '@assets'
import { ReduxState } from '@interfaces'
import { useSelector } from '@redux'

const ACCOUNTS = [
    {
        id: '1',
        icon: <Youtube />,
        name: 'Matssura Yuki official'
    },
    {
        id: '2',
        icon: <Facebook />,
        name: 'Matssura Yuki'
    },
    {
        id: '3',
        icon: <Instagram />,
        name: '@Yuki.Matssura'
    },
    {
        id: '4',
        icon: <Twitter />,
        name: '@Yuki.Matssura23'
    },
]

export function Profile({ navigation }: any) {
    const USER = useSelector((state: ReduxState) => state.user.userInfo);
    const ListHeaderComponent = () => (
        <View style={{ marginBottom: 24 }}>
            <Image source={PROFILE_BACKGROUND} style={styles.background}></Image>
            <View style={{ paddingHorizontal: WIDTH * 24 / 414 }}>


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <CaretLeft />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: 'white', marginLeft: '23%', marginRight: '20%' }}>
                        Your profile</Text>
                    <PencilLine />
                </View>
                <Image source={{ uri: USER.avatar }} style={styles.avatar}></Image>

                <View style={styles.name}>
                    <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 24, color: '#2B8093' }}>{USER.nick_name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'NotoSans', fontSize: 16, color: '#5A636D', marginRight: 10 }} >ID: {USER.id}</Text>
                        <Copy />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.miniblock}>
                        <Users />
                        <Text style={{ color: '#7CAE12', fontSize: 15, fontFamily: 'NotoSan-Bold', marginLeft: 5 }}>2050</Text>
                    </View>
                    <View style={styles.miniblock}>
                        <Crown />
                        <Text style={{ color: '#406FF1', fontSize: 15, fontFamily: 'NotoSan-Bold', marginLeft: 5 }}>1024</Text>
                    </View>
                    <View style={styles.miniblock}>
                        <BigCoin />
                        <Text style={{ color: '#FEA827', fontSize: 15, fontFamily: 'NotoSan-Bold', marginLeft: 5 }}>12000</Text>
                    </View>
                </View>
            </View>
        </View>

    )

    const renderItem = ({ item }: any) => (
        <View style={styles.item} >
            {item.icon}
            <Text style={{ color: '#191B1D', fontFamily: 'NotoSans', fontWeight: '600', fontSize: 16, marginLeft: 15 }}>{item.name}</Text>
        </View>
    );

    const ListFooterComponent = () => (
        <View style={{ marginHorizontal: WIDTH * 24 / 414 }}>

            <View style={{ marginTop: 48 }}>
                <Text style={styles.bigtext}>Introduction</Text>
                <Text numberOfLines={5} style={styles.introduction}>Hello world, I’m Yuki from Japan and I’m creating the beautiful videos. I wish Facebook would notify me when someone deletes me. That way I could ‘Like’ it. My brain is divided into two parts.</Text>
            </View>

            <View style={{ marginTop: 48 }}>
                <Text style={styles.bigtext}>Your joined communities</Text>

            </View>

        </View>

    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

            <FlatList
                // style={{ paddingHorizontal: WIDTH * 24 / 414, flex: 1 }}
                showsVerticalScrollIndicator={false}
                data={ACCOUNTS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
            />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 90 / 896,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 200
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: 30
    },
    nickname: {
        marginLeft: 0
    },
    name: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    miniblock: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F6F5E8',
        borderWidth: 1,
        borderColor: '#F6F5E8',
        borderRadius: 15,
        height: 36,
        width: 103,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8
    },
    item: {
        marginHorizontal: WIDTH * 24 / 414,
        backgroundColor: '#F6F5E8',
        height: 60,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        borderRadius: 10,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25
    },
    bigtext: {
        color: '#191B1D',
        fontFamily: 'NotoSans-Bold',
        fontSize: 24
    },
    introduction: {
        color: '#5A636D',
        fontFamily: 'NotoSans',
        fontSize: 16,
        lineHeight: 25,
        marginTop: 15
    }

})
