import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Check(props: any) {
    return (
        <View style={{ position: 'absolute', top: 10, left: 10 }}>
            <Svg
                width={13}
                height={10}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M11.5 1.5l-7 7L1 5"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

