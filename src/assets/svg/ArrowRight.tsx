import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function ArrowRight(props: any) {
    return (
        <View>
            <Svg
                width={21}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M3.625 10h13.75M11.75 4.375L17.375 10l-5.625 5.625"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

