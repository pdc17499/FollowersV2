import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Users(props: any) {
    return (
        <View>
            <Svg
                width={21}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M7.375 12.5a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125z"
                    stroke="#2B3641"
                    strokeMiterlimit={10}
                />
                <Path
                    d="M12.642 4.526a4.063 4.063 0 111.102 7.974M1.75 15.422a6.876 6.876 0 0111.25 0M13.744 12.5a6.867 6.867 0 015.625 2.921"
                    stroke="#2B3641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

