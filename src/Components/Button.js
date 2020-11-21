// @flow
'use strict';

import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

type ButtonProps = {
    variant: 'defaut' | 'primary' | 'transparent';
    label: string;
    onPress: ()=>void;
};

const Button = ({variant, label, onPress}: ButtonProps) => {
    const backgroundColor = variant === 'primary' ? '#2CB9B0' : (variant === 'transparent' ? 'transparent' : 'rgba(12,13,52,0.05)');
    const color = variant === 'primary' ? 'white' : '#0C0D34';
    return (
        <RectButton style={[styles.container, {backgroundColor}]}
                    {...{onPress}}>
            <Text style={[styles.label, {color}]}>{label}</Text>
        </RectButton>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700',
    },
});

export default Button;
