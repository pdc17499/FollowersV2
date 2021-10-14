import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function HomeTab({ props, focused }: any) {
    const color = focused ? '#3FAEC7' : '#C6CBCC'

    return (
        <View>
            <Svg
                width={36}
                height={36}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >


                <Path
                    d="M30.007 15.415L18.756 5.187a1.125 1.125 0 00-1.514 0L5.993 15.415a1.125 1.125 0 00-.368.832V29.25a1.125 1.125 0 001.125 1.125h22.5a1.125 1.125 0 001.125-1.125V16.247a1.126 1.126 0 00-.368-.832z"
                    stroke={color}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    )
}
