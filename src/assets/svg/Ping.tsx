import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Ping(props: any) {
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
                    d="M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5z"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M13.125 13.125H14v6.125h.875"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M13.781 10.5a1.313 1.313 0 100-2.625 1.313 1.313 0 000 2.625z"
                    fill="#3FAEC7"
                />
            </Svg>
        </View>
    )
}

