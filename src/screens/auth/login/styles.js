import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();
import Colors from '../../../constants/ColorConstants';
import Fonts from '../../../constants/FontsContstants';
import fonts from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: '6%',
  },
  logoStyle: {
    width: hp(35),
    height: hp(35),
    marginBottom: -hp(6),
  },
  title: {
    fontSize: fonts.H7,
    color: Colors.white,
    marginBottom: hp(2),
    fontFamily: Fonts.SoraBold,
  },
  input: {
    fontFamily: Fonts.SoraRegular,
    fontSize: fonts.P4,
    fontWeight: '300',
  },
  btnContainer: {
    justifyContent: 'center',
    marginTop: hp(1),
  },
  inputContainer: {
    justifyContent: 'center',
  },
  checkSection: {
    marginTop: hp(2),
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  termText: {
    marginLeft: wp(1),
    fontSize: fonts.P4,
    color: Colors.cBlack,
    fontFamily: Fonts.SoraRegular
  },
  policyTxt: {
    color: Colors.theme,
    fontFamily: Fonts.SoraMedium
  },
  lowerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(14),
    marginTop: hp(8),
  },
  iconSection: {
    marginRight: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTxt: {
    marginTop: hp(0.5),
    fontSize: fonts.P6,
    textAlign: 'center',
    color: Colors.cBlack,
    fontFamily: Fonts.SoraRegular
  }
});
