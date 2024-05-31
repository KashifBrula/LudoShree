import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Redux hooks
import { useDispatch } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//Components
import { AppInput, GradientText, GradientButton } from '../../../components';

//Styles
import { styles } from './styles';
import Colors from '../../../constants/ColorConstants';
import { useIsFocused } from '@react-navigation/native';
import { images } from '../../../assets/images/images';

export const LogIn = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [number, setNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [numErrMsg, setnumErrMsg] = useState('');
  const [pinErrMsg, setPinErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const navigateTo = () => {
    navigation.replace("Home");
  };

  const handleNumeric = (text, setState) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setState(numericValue);
  };

  const checkAndNavigate = () => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  };

  const checkValidation = () => {
    let isValid = true;
    if (!number) {
      setnumErrMsg('Number is required');
      isValid = false;
    }
    if (!pinCode) {
      setPinErrMsg('Pin code is required');
      isValid = false;
    }
    if (isValid) {
      checkAndNavigate()
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1, backgroundColor: Colors.white }}>

      <View style={styles.container}>
        <FastImage
          resizeMode='contain'
          source={images.logo}
          style={styles.logoStyle} />
        <GradientText style={styles.title} text={"LOGIN/SIGN UP"} />
        <View style={styles.inputContainer}>
          <AppInput
            value={number}
            maxLength={10}
            borderWidth={1}
            borderRadius={50}
            title={"Mobile Number"}
            keyboardType={'phone-pad'}
            borderColor={Colors.cGray}
            textInputStyle={styles.input}
            placeholder="10 Digit Mobile No"
            onChangeText={text => {
              setnumErrMsg('');
              handleNumeric(text, setNumber)
            }}
            width={'90%'}
            Error={numErrMsg == '' ? false : true}
            errorMessage={numErrMsg}
          />

          <AppInput
            value={pinCode}
            maxLength={6}
            borderWidth={1}
            borderRadius={50}
            marginTop={hp(0.5)}
            title={"Pin Code"}
            marginBottom={hp(0.5)}
            placeholder="Pin Code"
            keyboardType={'phone-pad'}
            textInputStyle={styles.input}
            onChangeText={text => {
              setPinErrMsg('');
              handleNumeric(text, setPinCode)
            }}
            width={'90%'}
            errorMessage={pinErrMsg}
            Error={pinErrMsg == '' ? false : true}
          />
          <View style={styles.btnContainer}>
            <GradientButton title={"LOGIN"} onPress={navigateTo} />
          </View>

          <View style={styles.checkSection}>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
              <Icon
                size={hp(4.5)}
                color={Colors.theme}
                name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
              />
            </TouchableOpacity>
            <Text style={styles.termText}>I'm Accepting All <Text style={styles.policyTxt}>T&C</Text> of LudoShree.</Text>
          </View>

        </View>
        <View style={styles.lowerSection}>
          <View style={styles.iconSection}>
            <Ionicons name="shield-checkmark" size={hp(4.5)} />
            <Text style={styles.infoTxt}>{"100% Safe\nPayments"}</Text>
          </View>
          <View style={styles.iconSection}>
            <Ionicons name="shield-checkmark" size={hp(4.5)} />
            <Text style={styles.infoTxt}>{"Withdrawal\nInstantly"}</Text>
          </View>
          <View style={styles.iconSection}>
            <Ionicons name="shield-checkmark" size={hp(4.5)} />
            <Text style={styles.infoTxt}>{"Fair Play\nProtection"}</Text>
          </View>
          <View style={styles.iconSection}>
            <Ionicons name="shield-checkmark" size={hp(4.5)} />
            <Text style={styles.infoTxt}>{"No Bots\nAllowed"}</Text>
          </View>
        </View>

      </View>
      {/* {isLoading && <AppLoader visible={isLoading} />} */}
    </KeyboardAwareScrollView>
  );
};
