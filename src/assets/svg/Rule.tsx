import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Rule(props: any) {
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
                    d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                    stroke="#191B1D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M15 15h1v7h1"
                    stroke="#191B1D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path d="M15.75 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#191B1D" />
            </Svg>
        </View>
    )
}

