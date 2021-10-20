import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function BigWarning(props: any) {
    return (
        <View>
            <Svg
                width={48}
                height={48}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M44.39 35.244l-16.494-28.5a4.502 4.502 0 00-7.79 0v.001L3.612 35.244a4.5 4.5 0 003.893 6.754h32.991a4.5 4.5 0 003.894-6.754zM22.5 19.5a1.5 1.5 0 013 0V27a1.5 1.5 0 11-3 0v-7.5zM24 36a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                    fill="#FF4C41"
                />
            </Svg>
        </View>
    )
}

