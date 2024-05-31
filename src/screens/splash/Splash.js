import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import fonts from '../../constants/Fonts';
import { images } from '../../assets/images/images';
import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

export const Splash = ({ navigation }) => {
  // const state = useSelector(state => state);

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        navigation.replace('AuthStack');
      }, 2000)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <FastImage
        resizeMode='contain'
        source={images.logo}
        style={styles.logoStyle} />

      <View>
        <ActivityIndicator color={Colors.theme} size={"large"} />
        <Text style={styles.mainText}>Please Wait...</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  logoStyle: {
    width: hp(50),
    height: hp(50),
  },
  mainText: {
    marginTop: hp(3),
    fontSize: fonts.P3,
    color: Colors.theme,
    fontFamily: Fonts.SoraRegular
  }
});