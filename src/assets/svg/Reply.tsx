import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Reply(props: any) {
    return (
        <View>
            <Svg
                width={26}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M13 22.667l-5.333-5.334h-4A2.667 2.667 0 011 14.668V4a2.667 2.667 0 012.667-2.667h18.666A2.667 2.667 0 0125 4v10.667a2.667 2.667 0 01-2.667 2.667h-4L13 22.666z"
                    stroke="#2B3641"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

