import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function Chat(props: any) {
    return (
        <View>
            <Svg
                width={48}
                height={48}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M43.2 2.4H21.6c-2.64 0-4.8 2.16-4.8 4.8v19.2h16.8l7.2 7.2v-7.2h2.4c2.64 0 4.8-2.158 4.8-4.8V7.2c0-2.64-2.16-4.8-4.8-4.8z"
                    fill="#3FAEC7"
                />
                <Path
                    d="M13.92 29.28V14.4H4.8c-2.64 0-4.8 2.16-4.8 4.8v14.4c0 2.64 2.16 4.8 4.8 4.8h2.4v7.2l7.2-7.2h12c2.64 0 4.8-2.16 4.8-4.8v-4.368c-.158.034-.319.05-.48.05h-16.8v-.002z"
                    fill="#C6CBCC"
                />
            </Svg>
        </View>
    )
}
