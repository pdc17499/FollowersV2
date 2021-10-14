import * as React from "react"
import { View, StyleProp, ViewStyle } from "react-native"
import Svg, { Path } from "react-native-svg"

interface propsLine {
    style?: StyleProp<ViewStyle>
}

export function Line(props: propsLine) {
    const { style } = props
    return (
        <View style={style} >
            <Svg
                width={17}
                height={2}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path stroke="#5A636D" strokeWidth={2} d="M.489 1H16.74" />
            </Svg>
        </View>
    )
}

export default Line
