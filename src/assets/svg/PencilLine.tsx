import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function PencilLine(props: any) {
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
                    d="M10.5 23.625H5.25a.875.875 0 01-.875-.875v-4.887a.875.875 0 01.256-.62L17.756 4.12a.875.875 0 011.238 0l4.887 4.887a.875.875 0 010 1.238L10.5 23.625zM14.875 7L21 13.125"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M23.625 23.625H10.5l-6.07-6.07"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

