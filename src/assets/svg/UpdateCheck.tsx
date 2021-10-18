import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function UpdateCheck(props: any) {
    return (
        <View>
            <Svg
                width={21}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M17.375 5.625l-8.75 8.75-4.375-4.374"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

