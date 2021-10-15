import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function BigCoin(props: any) {
    return (
        <View >
            <Svg
                width={21}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M10.5 11.875c4.487 0 8.125-1.679 8.125-3.75 0-2.071-3.638-3.75-8.125-3.75s-8.125 1.679-8.125 3.75c0 2.071 3.638 3.75 8.125 3.75zM10.5 11.875v3.75"
                    stroke="#2B3641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M2.375 8.125v3.75c0 1.875 3.125 3.75 8.125 3.75s8.125-1.875 8.125-3.75v-3.75M15.5 11.102v3.75M5.5 11.102v3.75"
                    stroke="#2B3641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

