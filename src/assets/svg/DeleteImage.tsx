import * as React from "react"
import { View } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export function DeleteImage(props: any) {
    return (
        <View >
            <Svg
                width={40}
                height={40}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Circle cx={20} cy={20} r={20} fill="#000" fillOpacity={0.63} />
                <Path
                    d="M26.188 13.813L13.813 26.187M26.188 26.188L13.813 13.813"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

