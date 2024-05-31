import React from 'react';
import { Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export const GradientText = ({ text, style }) => {
    const gradientColors = ["#edc91a", "#1f6b22"];
    return (
        <MaskedView
            maskElement={
                <Text style={style}>{text}</Text>
            }>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Text style={[style, { opacity: 0 }]} >{text} </Text>
            </LinearGradient>
        </MaskedView>
    );
};

