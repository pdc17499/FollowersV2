import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function RedHeart(props: any) {
    return (
        <View>
            <Svg
                width={24}
                height={22}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M1.757 2.424a6 6 0 000 8.485L12 21.152l10.243-10.243a6 6 0 10-8.486-8.485L12 4.18l-1.757-1.757a6 6 0 00-8.486 0z"
                    fill="#FF4C41"
                />
            </Svg>
        </View>
    )
}

