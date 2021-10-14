
import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Defs, Pattern, Image, Use } from "react-native-svg"

export function Youtube(props: any) {
    return (
        <View>
            <Svg
                width={36}
                height={36}
                viewBox='0 0 97 97'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M94.86 24.805a12.432 12.432 0 00-3.148-5.522 12.151 12.151 0 00-5.437-3.198C78.747 14 48.452 14 48.452 14s-30.297.063-37.825 2.148a12.15 12.15 0 00-5.437 3.198 12.431 12.431 0 00-3.148 5.523c-2.276 13.584-3.16 34.285.063 47.326a12.431 12.431 0 003.148 5.522 12.151 12.151 0 005.437 3.198C18.217 83 48.513 83 48.513 83s30.296 0 37.824-2.085a12.152 12.152 0 005.436-3.198 12.43 12.43 0 003.148-5.522c2.402-13.604 3.142-34.291-.062-47.39z"
                    fill="red"
                />
                <Path d="M39 64l23-15.5L39 33v31z" fill="#fff" />
            </Svg>
        </View>
    )
}

