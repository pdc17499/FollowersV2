import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function Coin(props: any) {
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
                    d="M16 19c7.18 0 13-2.686 13-6s-5.82-6-13-6S3 9.686 3 13s5.82 6 13 6zM16 19v6"
                    stroke="#FEA827"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M3 13v6c0 3 5 6 13 6s13-3 13-6v-6M24 17.763v6M8 17.763v6"
                    stroke="#FEA827"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}
