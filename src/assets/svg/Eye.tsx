import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function Eye(props: any) {
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
                    d="M16 6.999C6 6.999 2 16 2 16s4 8.999 14 8.999S30 16 30 16s-4-9.001-14-9.001z"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M16 21a5 5 0 100-10 5 5 0 000 10z"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

