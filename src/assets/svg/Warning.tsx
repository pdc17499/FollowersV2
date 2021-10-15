import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Warning(props: any) {
    return (
        <View>
            <Svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M10 8.125v3.125M8.918 3.124L2.045 14.998a1.25 1.25 0 001.082 1.876h13.746a1.25 1.25 0 001.082-1.876L11.082 3.124a1.25 1.25 0 00-2.164 0v0z"
                    stroke="#FF4C41"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M10 15a.937.937 0 100-1.875A.937.937 0 0010 15z"
                    fill="#FF4C41"
                />
            </Svg>
        </View>
    )
}

