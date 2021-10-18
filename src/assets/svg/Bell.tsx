import * as React from "react"
import { View } from "react-native"
import Svg, { Path } from "react-native-svg"

export function Bell(props: any) {
    return (
        <View>
            <Svg
                width={30}
                height={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M21.939 21.29c-.29-1.069-.46-2.996.373-6.106l.172-.642c1.075-4.01-1.262-8.159-5.208-9.248l-.056-.015a7.49 7.49 0 00-9.167 5.308l-.194.725c-.833 3.11-1.944 4.693-2.73 5.474a1.5 1.5 0 00.666 2.514l3.533.946a3.75 3.75 0 007.244 1.942l3.533.946a1.5 1.5 0 001.834-1.844zm-9.571 2.1a2.252 2.252 0 01-1.591-2.755l4.346 1.164a2.252 2.252 0 01-2.755 1.591z"
                    fill="#56C2FF"
                />
            </Svg>
        </View>
    )
}

