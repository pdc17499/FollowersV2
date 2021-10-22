
import { Back, Coin, OneCoin, Yen, ThreeCoin, FiveCoin, Rule } from '@svg'
import { WIDTH, HEIGHT } from '@utils'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function CoinComponent({ component, numb1, numb2 }: any) {
    return (
        <View style={styles.coin}>
            <View style={{ flex: 1 }}>{component}</View>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <Text style={styles.num}>{numb1}</Text>
                <Text style={styles.tc}>tc</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Yen></Yen>
                <Text style={styles.yen}>{numb2}</Text>
            </View>
        </View>
    )
}

export function PurchaseCoin({ navigation }: any) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={{ marginLeft: WIDTH * 32 / 414, marginTop: 7 }} >
                        <Back></Back>
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Purchase TomoCoin</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: WIDTH * 25 / 414 }}>
                <View style={{ marginTop: 15 }}>
                    <CoinComponent component={<OneCoin />} numb1={1000} numb2={600} />
                    <CoinComponent component={<ThreeCoin />} numb1={3000} numb2={1500} />
                    <CoinComponent component={<FiveCoin />} numb1={5000} numb2={2300} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.title}>Your TomoCoin</Text>
                    <Text style={styles.minitext}>Current count (tc)</Text>
                    <View style={styles.current} ><Text style={styles.money}>300</Text></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 35 }}>
                    <Rule />
                    <View style={{ width: 10 }}></View>
                    <Text style={styles.title}>Rules and terms</Text>

                </View>
                <View style={{ marginTop: 15 }}>
                    <Text numberOfLines={7} style={styles.term}>掲示板投稿＝５tm、メール送信＝10tm、申請＝５0tm、承認＝５0tm申請は相手に承認された場合に消費。申請後３日以内に承認されなければ返還されます。掲示板投稿、メール、申請はTM保有数を限度とする。TMが５0無いと相手からの申請を承認できません。退会の場合、一切の返金はありませんのでご了承ください。</Text>
                </View>
                <View style={{ height: 40 }}></View>

            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 30 / 896
    },
    headerTitle: {
        fontSize: 24,
        lineHeight: 33,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
        textAlign: 'center',
        marginTop: HEIGHT * 10 / 896,
        marginLeft: 20,
    },
    title: {
        fontSize: 24,
        lineHeight: 33,
        fontWeight: '600',
        fontFamily: 'NotoSans-Bold',
        color: '#191B1D',
    },
    coin: {
        backgroundColor: '#F6F5E8',
        height: 80,
        borderWidth: 1,
        borderColor: '#F6F5E8',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15
    },
    tc: {
        color: '#FEA827',
        fontFamily: 'NotoSans',
        fontSize: 20,
        marginLeft: 5
    },
    num: {
        color: '#FEA827',
        fontFamily: 'NotoSans-Bold',
        fontSize: 20,
    },
    yen: {
        color: '#2B3641',
        fontFamily: 'NotoSans-Bold',
        fontSize: 16,
    },
    minitext: {
        color: '#5A636D',
        fontFamily: 'NotoSans',
        fontWeight: '500',
        fontSize: 16,
    },
    current: {
        borderWidth: 1,
        borderColor: '#C6CBCC',
        borderRadius: 10,
        height: 95,
        marginTop: 15,
        justifyContent: 'center'
    },
    money: {
        color: '#FEA827',
        alignSelf: 'center',
        fontFamily: 'NotoSans-Bold',
        fontSize: 36,
    },
    term: {
        color: '#5A636D',
        fontFamily: 'NotoSans',
        fontSize: 16,
    }
})
function render(arg0: JSX.Element) {
    throw new Error('Function not implemented.')
}

