import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function CommunitiesTab({ props, focused }: any) {
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
                    d="M14.625 6.75h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125zM14.625 20.25h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125zM28.125 6.75h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125z"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}
