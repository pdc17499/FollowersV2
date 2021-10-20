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
import { Back, CheckCircle, MinusCircle, User } from '@svg';
import { approval } from '@mocks';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import StyledText from 'react-native-styled-text';


export function WaitingForApprovalScreen({ navigation }: any) {

  const DATA = approval.data

  const [status, setStatus] = useState(true)

  const MessageComponent = () => (
    <View style={styles.flashMessage}>
      {status === true
        ? <><CheckCircle /><Text style={styles.message}>You have accepted request</Text></>
        : <><MinusCircle /><Text style={styles.message}>You have rejected request</Text></>
      }
    </View >
  )
  const renderAccept = ({ value }: any) => (

    <View style={{ flexDirection: 'row', marginTop: 15 }}>
      <TouchableOpacity style={styles.accept} onPress={() => {
        setStatus(true)
        showMessage({ message: "Simple message", type: "info" })

      }}>
        <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: 'white' }}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reject} onPress={() => {
        setStatus(false)
        showMessage({ message: "Simple message", type: "info" })

      }}>
        <Text style={{ fontFamily: 'NotoSans-Bold', fontSize: 16, color: '#A8ACAE' }}>Reject</Text>
      </TouchableOpacity>
    </View>
  )

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
        <View style={{ alignSelf: 'stretch', marginLeft: 15 }}>
          <Text style={{ color: '#A8ACAE', lineHeight: 23, fontFamily: 'NotoSans', fontSize: 14 }}>{item.time}</Text>
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

        {item.status !== 1
          ? renderAccept(item.name)
          : null}
      </View>

    </View>

  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Back />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, lineHeight: 33, fontWeight: '600', fontFamily: 'NotoSans-Bold', color: '#191B1D', marginLeft: 35, }}>
            Waiting for approval</Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
        />
        <FlashMessage position='top' MessageComponent={MessageComponent} />

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
    marginLeft: 10,
    marginBottom: 20
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
    borderColor: '#FEA827',
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#FEA827',
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
  accept: {
    width: 100,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#3FAEC7',
    alignItems: 'center',
    justifyContent: 'center'

  },
  reject: {
    width: 100,
    height: 45,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A8ACAE',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flashMessage: {
    height: 84,
    borderRadius: 8,
    backgroundColor: '#F6F5E8',
    borderWidth: 1,
    borderColor: '#F6F5E8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 35
  },
  message: {
    fontSize: 15,
    color: '#5A636D',
    marginLeft: 10
  }
});
