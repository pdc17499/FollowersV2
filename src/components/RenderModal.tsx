import { Check, Line, Rectangle, RectangleChecked } from "@svg"
import { WIDTH } from "@utils";
import React, { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native"


export const RenderModal = ({ modal }: any) => {

    const [modalVisible, setModalVisible] = useState(modal);
    const [text, onChangeText] = useState("");
    const [textModal1, setTextModal1] = useState("");
    const [textModal2, setTextModal2] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    console.log('modal2', modalVisible)

    const Checked = () => {
        return (
            <View>
                <RectangleChecked />
                <Check ></Check>
            </View>
        )
    }
    useEffect(() => {
        setModalVisible(modal)
    }, [modal]);

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}  >
            <TouchableOpacity onPressOut={() => setModalVisible(false)} style={styles.centeredView}>


                <View style={styles.modalView}>
                    <Text style={styles.modalMenu}>Age</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput style={styles.inputModal} onChangeText={setTextModal1} value={textModal1} keyboardType="numeric" ></TextInput>
                        <Line style={{ marginHorizontal: 10 }} />
                        <TextInput style={styles.inputModal2} onChangeText={setTextModal2} value={textModal2} keyboardType="numeric" ></TextInput>
                    </View>


                    <View >
                        <Text style={styles.modalMenu}>Gender</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 15 }}>
                            <TouchableOpacity onPress={() => { setCheck1(!check1); setCheck2(false); setCheck3(false) }} >
                                {(check1) == true
                                    ? <Checked></Checked>
                                    : <Rectangle />}

                            </TouchableOpacity>
                            <Text style={styles.text}>Male</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 15 }}>
                            <TouchableOpacity onPress={() => { setCheck2(!check2); setCheck1(false); setCheck3(false) }} >
                                {(check2) == true
                                    ? <Checked></Checked>
                                    : <Rectangle />}

                            </TouchableOpacity>
                            <Text style={styles.text}>Female</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 15 }}>
                            <TouchableOpacity onPress={() => { setCheck3(!check3); setCheck2(false); setCheck1(false) }} >
                                {(check3) == true
                                    ? <Checked></Checked>
                                    : <Rectangle />}
                            </TouchableOpacity>
                            <Text style={styles.text}>Other</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={styles.apply} onPress={() => setModalVisible(false)}>
                            <View><Text style={{ color: 'white', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>Apply</Text></View>
                        </TouchableOpacity>
                        <View style={styles.apply2}><Text style={{ color: '#A8ACAE', fontSize: 16, fontFamily: 'NotoSans-Bold', alignSelf: 'center' }}>Clear</Text></View>
                    </View>
                </View >
            </TouchableOpacity >
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        paddingTop: 187,
        paddingHorizontal: WIDTH * 24 / 414, // justifyContent: "center",
    },
    modalView: {
        shadowOffset: {
            width: 0,
            height: 2
        },
        backgroundColor: '#2B3641',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2B3641',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: 458
    },
    modalMenu: {
        color: 'white',
        fontFamily: 'NotoSans-Bold',
        fontSize: 18,
        marginTop: 25,
        marginLeft: 25
    },
    inputModal: {
        flex: 1,
        height: 60,
        marginLeft: 25,
        backgroundColor: '#5A636D',
        borderRadius: 10,
        marginVertical: 12,
        paddingLeft: 20,
        color: 'white',
        fontSize: 18,
        fontFamily: 'NotoSans-Bold',
    },
    inputModal2: {
        flex: 1,
        height: 60,
        backgroundColor: '#5A636D',
        borderRadius: 10,
        marginVertical: 12,
        marginRight: 25,
        paddingLeft: 20,
        color: 'white',
        fontSize: 18,
        fontFamily: 'NotoSans-Bold',
    },
    apply: {
        backgroundColor: '#3FAEC7',
        height: 60,
        width: 130,

        marginLeft: 25,
        borderRadius: 10,
        justifyContent: 'center'
    },
    apply2: {
        backgroundColor: '#2B3641',
        height: 60,
        width: 130,
        marginLeft: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A8ACAE',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'NotoSans',
        marginLeft: 15


    }
})