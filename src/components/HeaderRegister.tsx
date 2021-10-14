
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { HEADER_LEFT } from '@assets';

export const HeaderRegister = () => {

    return (
        <View style={styles.header}>

            <Image source={HEADER_LEFT}></Image>
            <Text>Register</Text>
        </View>
    );
};

export default HeaderRegister;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 30

    }
})
