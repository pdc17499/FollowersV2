import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Out(props: any) {
    return (
        <View>
            <Svg
                width={19}
                height={19}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M12.915 6.383L16.031 9.5l-3.116 3.117M7.719 9.5h8.31M7.719 16.031H3.562a.594.594 0 01-.593-.593V3.562a.594.594 0 01.594-.593h4.156"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

