import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';

export const GradientButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={["#edc91a", "#1f6b22"]} style={styles.gradient}>
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: wp(80),
        borderRadius: 30,
        overflow: 'hidden',
        alignSelf: 'center',
        borderRadius: hp(5),
    },
    gradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: Platform.OS === 'ios' ? hp(6) : hp(7),
    },
    buttonText: {
        fontSize: fonts.P3,
        color: Colors.white,
        fontFamily: Fonts.SoraBold,
    },
});

