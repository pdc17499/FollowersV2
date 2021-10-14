import { AccountTab, CommunitiesTab, HomeTab } from '@svg';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


export function TabBar({ state, descriptors, navigation }: any) {

    // const [focusHome, setFocusHome] = useState(true)
    // const [focusCommunities, setFocusCommunities] = useState(false)
    // const [focusAccount, setFocusAccount] = useState(false)


    return (

        <View style={styles.container} >
            {
                state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);

                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: "center" }}
                        >
                            <View style={{ borderColor: isFocused ? '#3FAEC7' : 'white', borderWidth: 1.5, width: '80%', position: 'absolute', top: 0 }}>
                            </View>
                            <View style={{ height: 10 }}></View>

                            {(route.name === 'Home') == true
                                ? (<HomeTab focused={isFocused}></HomeTab>)
                                : null}

                            {(route.name === 'Communities') == true
                                ? <CommunitiesTab focused={isFocused}></CommunitiesTab>
                                : null}
                            {(route.name === 'Account') == true
                                ? <AccountTab focused={isFocused} />
                                : null}

                            <Text style={{ fontSize: 14, fontFamily: 'NotoSans-Bold', color: isFocused ? '#2B3641' : '#C6CBCC' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "white",
        height: 80,
    },

})
