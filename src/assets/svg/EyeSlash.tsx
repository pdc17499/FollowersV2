import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function EyeSlash(props: any) {
    return (
        <View>
            <Svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M6 5l20 22M19.363 19.7a5 5 0 01-6.726-7.4"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M9.25 8.574C4.152 11.155 2 16 2 16s4 9 14 9a14.753 14.753 0 006.75-1.575M26.076 21.138C28.801 18.697 30 16 30 16s-4-9-14-9c-.866-.002-1.73.068-2.585.21M16.94 11.089a5.003 5.003 0 014.038 4.44"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}


