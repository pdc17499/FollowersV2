import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function EditForum(props: any) {
    return (
        <View>
            <Svg
                width={48}
                height={48}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={48} height={48} rx={8} fill="#3FAEC7" />
                <Path
                    d="M20.347 33.103h-4.623a.828.828 0 01-.828-.827v-4.623a.827.827 0 01.243-.585l12.414-12.414a.828.828 0 011.17 0l4.623 4.623a.828.828 0 010 1.17L20.932 32.861a.828.828 0 01-.585.242zM24.828 17.38l5.793 5.792M20.637 33.05l-5.688-5.687"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M26.497 33.118h3.31m3.31 0h-3.31m0 0v-3.325m0 3.325v3.296"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            </Svg>
        </View>
    )
}

