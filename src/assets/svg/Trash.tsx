import * as React from "react"
import { View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

export function Trash(props: any) {
    return (
        <View>
            <Svg
                width={21}
                height={21}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M17.719 4.594H3.28M8.531 8.531v5.25M12.469 8.531v5.25M16.406 4.594v12.468a.656.656 0 01-.656.657H5.25a.656.656 0 01-.656-.657V4.595M13.781 4.594V3.28A1.312 1.312 0 0012.47 1.97H8.53A1.313 1.313 0 007.22 3.28v1.313"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}

