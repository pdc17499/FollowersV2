import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Rectangle(props: any) {
    return (
        <View>
            <Svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={32} height={32} rx={8} fill="#5A636D" />
            </Svg>
        </View>
    )
}

