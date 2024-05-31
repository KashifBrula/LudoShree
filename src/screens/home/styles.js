import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import fonts from '../../constants/Fonts';
import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: fonts.P1,
        color: Colors.white,
        fontFamily: Fonts.SoraMedium,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp(3),
        paddingHorizontal: wp(3),
        backgroundColor: "#fff",
        position: 'absolute',
        borderRadius: 10,
        width: wp(94),
        height: hp(7),
        elevation: 3,
        top: hp(2),
        zIndex: 999
    },
    rowSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    barIcon: {
        width: hp(4),
        height: hp(4),
        marginRight: wp(4),
        resizeMode: 'contain'
    },
    refreshIcon: {
        width: hp(3),
        height: hp(3),
        marginRight: wp(3),
        resizeMode: 'contain'
    },
    dollarIcon: {
        width: hp(3.5),
        height: hp(3.5),
        marginRight: wp(3),
        resizeMode: 'contain'
    },
    infoSection: {
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'center'
    },
    ban1Style: {
        height: hp(38),
        width: wp(100),
    },
    ban2Style: {
        height: hp(30),
        width: wp(96),
        marginTop: hp(2),
        alignSelf: 'center',
    },
    notifySection: {
        width: wp(96),
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: wp(3),
        paddingBottom: hp(2),
        paddingTop: hp(1),
        marginTop: hp(2),
        elevation: 3
    },
    notifyTxt: {
        fontSize: fonts.P4,
        marginBottom: hp(0.5),
        fontFamily: Fonts.SoraBold,
    },
    infoTxt: {
        width: wp(80),
        fontSize: fonts.P4,
        textAlign: 'center',
        color: Colors.cBlack,
        fontFamily: Fonts.SoraLight,
    },
    socialSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp(2)
    },
    socialItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp(5)
    },
    socialTxt: {
        marginTop: hp(1),
        fontSize: fonts.P6,
        color: Colors.cGray,
        fontFamily: Fonts.SoraMedium
    },
    devTxt: {
        fontSize: fonts.P4,
        color: Colors.cGray,
        fontFamily: Fonts.SoraRegular
    },
    rightsTxt: {
        fontSize: fonts.P5,
        color: Colors.cGray,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: Fonts.SoraRegular,
        paddingTop: hp(0.5),
        paddingBottom: hp(4)
    }
})