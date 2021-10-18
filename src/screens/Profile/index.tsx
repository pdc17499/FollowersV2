import { HEIGHT, WIDTH } from '@utils'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Back, Bell, BigCoin, CaretLeft, Copy, Crown, Facebook, Instagram, PencilLine, Right, Twitter, Users, Youtube } from '@svg'
import { PROFILE_BACKGROUND } from '@assets'
import { ReduxState } from '@interfaces'
import { useSelector } from '@redux'
import { ActivitiesLog, JoinedCommunitiesBlock } from '@components'
import { dataUser, joinedCommunities } from '@mocks'
import StyledText from 'react-native-styled-text'

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

const JOINED = joinedCommunities.data

export function Profile({ navigation }: any) {
    const USER = dataUser.data.user

    const Notification = () => (
        <View style={{ marginTop: 60 }}>
            <View style={styles.notificationUp}>
                <Bell />
                <Text style={{ fontSize: 18, lineHeight: 28, color: 'white', fontFamily: 'NotoSans-Bold', marginLeft: 5 }}>Notification from Followers</Text>
            </View>
            <View style={styles.notificationDown}>
                <StyledText style={{ fontSize: 16, color: 'white', fontFamily: 'NotoSans', lineHeight: 25 }}>
                    {"<b> Photo Kid</b> joined thanks to you! You get 300tm! "}
                </StyledText>
            </View>
        </View>
    )

    const BottomRequest = () => (
        <View style={{ marginTop: 50 }}>
            <TouchableOpacity style={styles.bottomRequest} onPress={() => navigation.navigate('WaitingForApproval')}>

                <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 18, color: '#191B1D', flex: 9 }}>Waiting for  approval</Text>
                <View style={styles.circle}>
                    <Text style={{ fontSize: 14, fontFamily: 'NotoSans-Bold', color: 'white', alignSelf: 'center', marginTop: 3 }}>5</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.bottomRequest}>
                <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 18, color: '#191B1D', flex: 9 }}>Friend request send</Text>
                <View style={styles.circle}>
                    <Text style={{ fontSize: 14, fontFamily: 'NotoSans-Bold', color: 'white', alignSelf: 'center', marginTop: 3 }}>33</Text>
                </View>
            </View>

        </View>
    )

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
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
                        <PencilLine />
                    </TouchableOpacity>
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

    // const renderBlock = () => {
    //     return JOINED.map((item: any) => {
    //         return <JoinedCommunitiesBlock name={item.title} uri={item.uri}></JoinedCommunitiesBlock>
    //     })
    // }
    const ListFooterComponent = () => (
        <View>
            <View style={{ marginHorizontal: WIDTH * 24 / 414 }}>

                <View style={{ marginTop: 48 }}>
                    <Text style={styles.bigtext}>Introduction</Text>
                    <Text numberOfLines={5} style={styles.introduction}>Hello world, I’m Yuki from Japan and I’m creating the beautiful videos. I wish Facebook would notify me when someone deletes me. That way I could ‘Like’ it. My brain is divided into two parts.</Text>
                </View>

                <View style={{ marginTop: 48 }}>
                    <Text style={styles.bigtext}>Your joined communities</Text>

                    <View style={{ flexDirection: 'row', }}>
                        <JoinedCommunitiesBlock name={'Food'} uri={'https://i.pinimg.com/564x/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg'}></JoinedCommunitiesBlock>
                        <JoinedCommunitiesBlock name={'Fashion'} uri={'https://i.pinimg.com/564x/0f/f6/ea/0ff6ea87ba968ce4124a3caf9eec7a8a.jpg'}></JoinedCommunitiesBlock>
                    </View>
                    <View style={{ width: '70%' }}>
                        <JoinedCommunitiesBlock name={'Western Movies'} uri={'https://i.pinimg.com/236x/e2/9f/57/e29f57f32f8ce692940202c0b3ef5289.jpg'}></JoinedCommunitiesBlock>
                    </View>
                </View>

                <View style={{ marginTop: 48, marginBottom: 15 }}>
                    <Text style={styles.bigtext}>Activities log</Text>
                </View>
            </View>
            <ActivitiesLog></ActivitiesLog>
            <View style={{ marginHorizontal: WIDTH * 24 / 414 }}>
                <TouchableOpacity >
                    <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#2B8093', fontSize: 20, fontFamily: 'NotoSans-Bold', marginRight: 12 }}>Older activities</Text>
                        <Right></Right>
                    </View>
                </TouchableOpacity>
                {Notification()}
                {BottomRequest()}
                <View style={{ height: 75 }}></View>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
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
    },
    notificationUp: {
        paddingLeft: 20,
        backgroundColor: '#2B8093',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 15

    },
    notificationDown: {
        paddingVertical: 15,
        paddingLeft: 20,
        backgroundColor: '#3FAEC7',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    circle: {
        flex: 1,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#2B8093',
        alignItems: 'center',

    },
    bottomRequest: {
        flexDirection: 'row',
        backgroundColor: '#F6F7F9',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 12,
        borderRadius: 10,
    }

})
