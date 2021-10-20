import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Defs, Pattern, Image, Use } from "react-native-svg"

export function MinusCircle(props: any) {
    return (
        <View>
            <Svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M16 3a13 13 0 1013 13A13.015 13.015 0 0016 3zm5 14H11a1 1 0 010-2h10a1 1 0 010 2z"
                    fill="#A8ACAE"
                />
            </Svg>
        </View>
    )
}

