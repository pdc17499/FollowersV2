import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function CaretRight(props: any) {
    return (
        <View>
            <Svg
                width={14}
                height={14}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M5.25 2.625L9.625 7 5.25 11.375"
                    stroke="#2B8093"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

