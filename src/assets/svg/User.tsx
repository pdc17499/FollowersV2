import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function User(props: any) {
    return (
        <View>
            <Svg
                width={16}
                height={17}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M5.5 10.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
                    stroke="#2B3641"
                    strokeMiterlimit={10}
                />
                <Path
                    d="M9.713 4.12a3.25 3.25 0 11.882 6.38M1 12.837a5.501 5.501 0 019 0M10.595 10.5a5.494 5.494 0 014.5 2.337"
                    stroke="#2B3641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

