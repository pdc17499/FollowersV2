import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function CheckCircle(props: any) {
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
                    d="M16 3a13 13 0 1013 13A13.015 13.015 0 0016 3zm6.191 10.724l-7.334 7a1.003 1.003 0 01-1.382 0l-3.666-3.5a1 1 0 011.382-1.448l2.975 2.841 6.643-6.34a1 1 0 011.382 1.447z"
                    fill="#3FAEC7"
                />
            </Svg>
        </View>
    )
}

