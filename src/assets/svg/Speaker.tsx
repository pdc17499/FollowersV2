import * as React from "react"
import { View } from "react-native"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    RadialGradient,
    Stop,
    LinearGradient,
    ClipPath,
} from "react-native-svg"

export function Speaker(props: any) {
    return (
        <View>
            <Svg
                width={64}
                height={64}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Circle cx={32} cy={32} r={32} fill="#463B64" fillOpacity={0.08} />
                <G clipPath="url(#prefix__clip0)">
                    <Path
                        d="M28.846 50.944l-5.903-9.075 4.86-.998.984 2.733c.44.473 1.2.539 1.64 1.011.226.244.34.571.384.9.091.683-.065 1.49.427 1.975.58.572 1.626.5 1.844 1.442.197.862-3.502 3.095-4.236 2.012z"
                        fill="#287AC6"
                    />
                    <Path
                        d="M28.936 53.217l-.274.186a2.369 2.369 0 01-3.289-.63l-6.662-9.831 5.179-1.388c.326.48.442.657.771 1.135.3.435.6.61.584 1.161-.018.544.008 1.151.401 1.572.44.472 1.2.539 1.64 1.011.225.244.34.571.384.9.091.683-.065 1.49.427 1.975.58.572 1.625.5 1.844 1.442.2.86-.277 1.975-1.005 2.467z"
                        fill="#3699F4"
                    />
                    <Path
                        d="M27.729 48.342c.012.53.326.517.627.443.734-.176 1.618-.727 2.035-1.068.16-.128.3-.278.422-.437.091-.12.132-.27.104-.417-.09-.423-.05-.908-.109-1.346a1.898 1.898 0 00-.148-.527c-.059-.131-.237-.159-.34-.06-.26.251-.73.678-1.073.848-.68.34-1.127.445-1.437.535a.406.406 0 00-.268.543c.065.153.106.316.128.478.042.323.05.672.059 1.008zM29.94 50.746c-.063 1.471-1 2.228-2.093 2.599-1.056.361-1.963-.04-1.963-.04 2.163 1.905 5.732-.598 6.416-1.252 1.046-1 1.068-1.737.803-3.042-.015-.08-.221-.316-.418-.044-.3.408-.704.635-1.161.864-.563.28-.891.33-1.129.411-.307.103-.444.215-.455.505z"
                        fill="#2465A1"
                    />
                    <Path
                        d="M18.711 42.942l1.772 2.624s.245-1.516 2.732-1.916c1.686-.27 2.33.171 2.33.171l-.55-2.474-6.284 1.595z"
                        fill="#287AC6"
                    />
                    <Path
                        d="M48.294 44.354s-12.903-5.086-21.92-2.926a308.31 308.31 0 00-7.344 1.848c-2.108.568-5.347-1.776-6.76-7.05-1.413-5.273.376-9.565 2.484-10.13.312-.083 3.7-.78 7.7-1.974 9.412-2.809 16.95-12.945 16.95-12.945l8.89 33.177z"
                        fill="#C0E8FF"
                    />
                    <Path
                        d="M37.79 34.478c-.188.74.199 2.206.658 3.537.33.953-.449 1.933-1.452 1.82-6.837-.756-11.862.823-11.862.823l.516.944.721-.173c5.446-1.306 12.31.032 16.893 1.3 0 0-1.694-1.43-2.962-3.664-1.317-2.33-2.512-4.587-2.512-4.587z"
                        fill="#A1C5DF"
                    />
                    <Path
                        d="M21.91 33.644c-.807-3.01-.727-6.649-.123-9.326-3.703 1.074-6.737 1.699-7.033 1.778-2.108.565-3.897 4.857-2.484 10.13 1.413 5.275 4.651 7.615 6.763 7.05.672-.18 3.467-.92 7.345-1.849l.07-.016c-2.112-2.178-3.734-4.767-4.538-7.767z"
                        fill="#3699F4"
                    />
                    <Path
                        d="M48.294 44.354c3.665-.982 4.646-9.205 2.191-18.367-2.454-9.162-7.416-15.792-11.081-14.81-3.666.982-4.647 9.205-2.192 18.367 2.455 9.161 7.416 15.792 11.081 14.81z"
                        fill="#6C9FC4"
                    />
                    <Path
                        d="M36.204 24.612a41.509 41.509 0 001.012 4.934c2.455 9.162 7.416 15.793 11.081 14.81 3.666-.982 4.647-9.204 2.192-18.366a41.566 41.566 0 00-1.59-4.78l-12.695 3.402z"
                        fill="url(#prefix__paint0_linear)"
                    />
                    <Path
                        d="M48.55 45.31c-4.328 1.16-9.613-5.507-12.293-15.51-2.68-10.003-1.437-18.419 2.89-19.578 4.329-1.16 8.659 5.766 11.338 15.765 2.68 10.003 2.392 18.163-1.935 19.323zm-8.89-33.178c-2.688.72-3.961 7.943-1.493 17.156 2.469 9.213 7.183 14.831 9.87 14.11 2.688-.72 3.962-7.942 1.493-17.155-2.469-9.213-7.183-14.83-9.87-14.11z"
                        fill="#E0E0E0"
                    />
                    <Path
                        d="M36.505 17.681c-.079.854-.652 2.854.389 8.65.035.196.155 1.065-.313 1.19-.312.084-.53-.363-.705-1.012a25.25 25.25 0 01-.767-8.457c.137-1.706 1.507-1.548 1.395-.37z"
                        fill="#fff"
                    />
                    <Path
                        d="M37.323 25.398l6.206-.913 1.699 6.338-5.686 2.677c-1.738-4.904-2.22-8.102-2.22-8.102z"
                        fill="url(#prefix__paint1_radial)"
                    />
                    <Path
                        d="M45.228 30.826c.83-.223 1.123-1.822.654-3.572-.468-1.75-1.521-2.988-2.352-2.765-.83.222-1.123 1.821-.654 3.571.47 1.75 1.522 2.988 2.352 2.766z"
                        fill="#E0E0E0"
                    />
                    <Path
                        d="M25.633 42.494l-.128.478 1.557 1.722c.19.21.492.271.746.149l1.633-.81s.298-.814.348-.994c.05-.181-.009-.264-.009-.264l-1.86.901c-.004.001-2.219-1.18-2.287-1.182z"
                        fill="#353738"
                    />
                    <Path
                        d="M27.328 43.596l-1.712-1.088L28 41.86l1.663.807c.209.128.16.37-.061.47l-1.285.57a.994.994 0 01-.988-.111z"
                        fill="#616161"
                    />
                    <Path
                        d="M27.517 24.967c1.948-.809 3.776-1.957 5.186-3.526-.278 2.924.109 6.254 1.23 8.975-1.067-.213-2.144-.423-3.23-.452-.908-.023-1.812.079-2.709.21-2.258.322-4.295.823-6.484 1.454.063-.017-.16-1.551-.19-2.731-.029-1.18.073-1.897.073-1.897s4.279-1.266 6.124-2.033z"
                        fill="#E7F9FF"
                    />
                    <Path
                        d="M20.5 27.093c-3.065.92-6.503 1.886-6.503 1.886s-1.194 1.774-.67 4.838c0 0 3.679-.985 7.036-1.82-.342-2.216-.073-3.991.136-4.904z"
                        fill="#83D2FF"
                    />
                </G>
                <Defs>
                    <RadialGradient
                        id="prefix__paint1_radial"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(-15 129.822 -150.483) scale(6.89656 11.7345)"
                    >
                        <Stop offset={0.416} stopColor="#82AEC0" />
                        <Stop offset={1} stopColor="#7FA9BB" stopOpacity={0} />
                    </RadialGradient>
                    <LinearGradient
                        id="prefix__paint0_linear"
                        x1={47.713}
                        y1={42.184}
                        x2={42.713}
                        y2={23.521}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#353738" />
                        <Stop offset={1} stopColor="#353738" stopOpacity={0} />
                    </LinearGradient>
                    <ClipPath id="prefix__clip0">
                        <Path
                            fill="#fff"
                            transform="rotate(-15 71.067 -13.826)"
                            d="M0 0h42.201v42.201H0z"
                        />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    )
}
