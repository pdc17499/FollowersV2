import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function ThreeDots(props: any) {
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
                    d="M14.563 14a.562.562 0 11-1.125 0 .562.562 0 011.124 0zM21.563 14a.562.562 0 11-1.125 0 .562.562 0 011.125 0zM7.563 14a.562.562 0 11-1.125 0 .562.562 0 011.125 0z"
                    fill="#000"
                    stroke="#5A636D"
                    strokeWidth={1.5}
                />
            </Svg>
        </View>
    )
}

