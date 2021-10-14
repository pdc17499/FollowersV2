import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function OneCoin(props: any) {
    return (
        <View>
            <Svg
                width={15}
                height={10}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M.5 3.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
                    fill="#F6F5E8"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 6.484c3.866 0 7-1.606 7-2.986C14.5 2.117 11.366.5 7.5.5s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
                    fill="#FEA827"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

