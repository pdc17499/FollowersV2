import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function Crown(props: any) {
    return (
        <View >
            <Svg
                width={21}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M4.026 15.314a.627.627 0 00.78.458 21.398 21.398 0 0111.386-.001.626.626 0 00.779-.458l1.99-8.462a.626.626 0 00-.861-.715l-3.952 1.757a.625.625 0 01-.8-.268l-2.301-4.142a.625.625 0 00-1.093 0L7.653 7.625a.625.625 0 01-.8.268L2.9 6.136a.625.625 0 00-.862.714l1.988 8.464zM8 12.631a23.902 23.902 0 015 0"
                    stroke="#2B3641"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

