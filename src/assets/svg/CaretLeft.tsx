import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function CaretLeft(props: any) {
    return (
        <View>
            <Svg
                width={28}
                height={28}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M17.5 22.75L8.75 14l8.75-8.75"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

