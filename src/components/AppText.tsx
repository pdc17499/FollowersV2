import React from 'react';
import { Text } from 'react-native';

import { IAppText } from '@interfaces';

export const AppText = React.memo((props: IAppText) => {

    const Capitalize = (str: any) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const { children, style, onPress } = props;

    return (
        <Text
            allowFontScaling={false}
            {...props}
            style={[
                {
                    // textTransform: 'capitalize',
                    marginTop: 3,
                    fontSize: 14,
                    color: '#4D4D4D',
                },
                style,
            ]}
            onPress={onPress}>
            {children}
        </Text>
    );
});

export default AppText;
