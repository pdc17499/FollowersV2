import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Yen(props: any) {
    return (
        <View>
            <Svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M6.25 13.125h7.5M6.25 10.625h7.5M10 10.625v6.25M15.625 3.75L10 10.625 4.375 3.75"
                    stroke="#2B3641"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

