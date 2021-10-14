import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function AccountTab({ props, focused }: any) {
    const color = focused ? '#3FAEC7' : '#C6CBCC'
    return (
        <View>
            <Svg
                width={36}
                height={36}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M18 22.5a9 9 0 100-18 9 9 0 000 18z"
                    stroke={color}
                    strokeWidth={2.5}
                    strokeMiterlimit={10}
                />
                <Path
                    d="M4.358 30.374a15.755 15.755 0 0127.284 0"
                    stroke={color}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}
