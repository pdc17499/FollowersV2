import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function Copy(props: any) {
    return (
        <View >
            <Svg
                width={18}
                height={18}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M11.813 11.812h3.374v-9h-9v3.375"
                    stroke="#5A636D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M11.813 6.187h-9v9h9v-9z"
                    stroke="#5A636D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

