import * as React from "react"
import { View } from "react-native"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    RadialGradient,
    Stop,
    LinearGradient,
    ClipPath,
} from "react-native-svg"

export function Search(props: any) {
    return (
        <View>
            <Svg
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M10.875 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.443 16.444L21 21"
                    stroke="#C6CBCC"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

