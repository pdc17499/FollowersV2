import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path, Rect } from "react-native-svg"

export function ImagePost({ props, focused }: any) {


    return (
        <View>
            <Svg
                width={60}
                height={60}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={60} height={60} rx={8} fill="#F6F7F9" />
                <Path
                    d="M42.031 19.063H17.97c-.604 0-1.094.49-1.094 1.093v19.688c0 .604.49 1.093 1.094 1.093H42.03c.604 0 1.094-.49 1.094-1.093V20.156c0-.604-.49-1.093-1.094-1.093z"
                    stroke="#3FAEC7"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M16.875 35.469l6.883-6.883a1.093 1.093 0 011.547 0l6.11 6.11a1.091 1.091 0 001.546 0l2.828-2.829a1.094 1.094 0 011.547 0l5.789 5.79"
                    stroke="#3FAEC7"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M33.828 27.813a1.64 1.64 0 100-3.282 1.64 1.64 0 000 3.282z"
                    fill="#3FAEC7"
                />
            </Svg>
        </View>
    )
}
