import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function ThreeCoin(props: any) {
    return (
        <View>
            <Svg
                width={31}
                height={29}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 9.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
                    fill="#F6F5E8"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 12.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
                    fill="#FEA827"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    clipRule="evenodd"
                    d="M8.5 13.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5 16.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
                    fill="#FEA827"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    clipRule="evenodd"
                    d="M13.5 17.5c0-1.3 3.134-3 7-3s7 1.7 7 3v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3z"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5 20.484c3.866 0 7-1.606 7-2.986 0-1.381-3.134-2.998-7-2.998s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986z"
                    fill="#FEA827"
                    stroke="#191B1D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

