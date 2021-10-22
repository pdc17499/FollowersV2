import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function WhiteHeart(props: any) {
    return (
        <View>
            <Svg
                width={24}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M3.038 2.371a5.25 5.25 0 000 7.425L12 18.758l8.962-8.962a5.25 5.25 0 00-7.424-7.425L12 3.91 10.462 2.37a5.25 5.25 0 00-7.424 0v0z"
                    stroke="#2B3641"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

