import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function Back(props: any) {
    return (
        <View style={{
            height: 30, width: 45, justifyContent: 'center', paddingLeft: 10
        }}>
            < Svg
                width={12}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M10.5 18.75L1.75 10l8.75-8.75"
                    stroke="#191B1D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View >
    )
}

