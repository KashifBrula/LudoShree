import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image';

import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';
import { images } from '../../assets/images/images';
import { GradientText } from '../gradText/GradientText';

export const ListCard = ({ style, title, iconName }) => {
    return (
        <Pressable style={[styles?.card, style]}>
            <FastImage resizeMode='contain' source={images?.[iconName]} style={styles.icon} />
            <GradientText style={styles.title} text={title || "Classic Game"} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        width: wp(32),
        height: wp(23),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.lightBeige
    },
    icon: {
        height: hp(4),
        width: hp(4)
    },
    title: {
        marginTop: hp(1),
        fontSize: fonts.P4,
        fontFamily: Fonts.SoraRegular,
    },
})