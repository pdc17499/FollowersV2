import *as React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export function TwitterLogo(props: any) {
    return (
        <View>
            <Svg
                width={28}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M23.23 7.77l-.258.259-.032.363C22.232 16.61 15.298 23 7 23c-1.723 0-3.05-.275-4-.75h0c-.75-.375-.997-.745-1-.75h.002c.05-.02 3.203-1.221 5.283-3.575l.736-.832-.905-.645a12.7 12.7 0 01-2.865-2.822H4.25C2.678 11.491.959 7.727 2 2h0l-.298-.954L2 2h0l.001.001c.055.055 4.38 4.333 9.746 5.731l1.251.326L13 6.765 13 6.004A5.04 5.04 0 0118.066 1a5.015 5.015 0 014.266 2.5l.289.5H27l-3.77 3.77zM2 2h0z"
                    stroke="#406FF1"
                    strokeWidth={2}
                />
            </Svg>
        </View>
    )
}
