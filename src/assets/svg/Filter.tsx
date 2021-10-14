import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Filter(props: any) {
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
                    d="M16.188 18.812H4.374M23.625 18.812h-3.063M18.375 21a2.188 2.188 0 100-4.376 2.188 2.188 0 000 4.376zM9.188 9.187H4.375M23.625 9.187H13.562M11.375 11.374a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z"
                    stroke="#191B1D"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

