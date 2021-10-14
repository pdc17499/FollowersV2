import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function CaretDown(props: any) {
    return (
        <View>
            <Svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M13 6l-5 5-5-5"
                    stroke="#3FAEC7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

