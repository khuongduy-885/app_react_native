//@flow
'use strict';
import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as theme from '../Themes';

type TypographyProp = {
    variant: string
}

export const Typography = (props: TypographyProp) => {
    const {
        children,
    } = props;
    const textStyles = [theme.textVariants[props.variant]];
    console.log(textStyles);
    return (
        <Text style={textStyles} {...props}>
            {children}
        </Text>
    );
};

