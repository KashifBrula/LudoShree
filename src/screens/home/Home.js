import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useDispatch, } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { styles } from './styles'
import Colors from '../../constants/ColorConstants';
import { ListCard, GradientText } from '../../components'

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Image } from 'react-native-animatable';
import { images } from '../../assets/images/images';

export const Home = (props) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles?.topSection}>
        <View style={styles.rowSection}>
          <TouchableOpacity>
            <Image source={images.Bars} style={styles.barIcon} />
          </TouchableOpacity>
          <GradientText style={styles.title} text={"Home"} />
        </View>
        <View style={styles.rowSection}>
          <TouchableOpacity>
            <Image source={images.Refresh} style={styles.refreshIcon} />
          </TouchableOpacity>
          <Image source={images.Dollar} style={styles.dollarIcon} />
          <GradientText style={styles.title} text={"0"} />
        </View>
      </View>
      <ScrollView>

        <FastImage resizeMode='stretch' source={images.Ban1} style={styles.ban1Style} />
        <View style={{ marginTop: hp(3) }} />
        <View style={styles.infoSection}>
          <ListCard style={{ borderBottomWidth: 1 }} title={"Classic Game"} iconName={"Ludo"} />
          <ListCard
            title={"Wallet"}
            iconName={"Wallet"}
            style={{ borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }}
          />
          <ListCard iconName={"Withdrawal"} style={{ borderBottomWidth: 1 }} title={"Withdrawal"} />
        </View>
        <View style={styles.infoSection}>
          <ListCard iconName={"Leaderboard"} style={{ borderBottomWidth: 1 }} title={"Leaderboard"} />
          <ListCard
            iconName={"Invite"}
            title={"My Refrral"}
            style={{ borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }}
          />
          <ListCard iconName={"Whatsapp"} style={{ borderBottomWidth: 1 }} title={"Support"} />
        </View>
        <View style={styles.infoSection}>
          <ListCard iconName={"Notify"} title={"Notification"} />
          <ListCard
            iconName={"Profile"}
            title={"My Profile"}
            style={{ borderLeftWidth: 1, borderRightWidth: 1 }}
          />
          <ListCard iconName={"History"} title={"All Games"} />
        </View>

        <View style={styles.notifySection}>
          <GradientText text={"Important Notification"} style={styles.notifyTxt} />
          <Text style={styles.infoTxt}>(Play on Ludo King App) Get 2% Comission on very Game your friend Wins.(LifeTime)</Text>
        </View>

        <FastImage resizeMode='cover' source={images.Ban2} style={styles.ban2Style} />
        <FastImage resizeMode='cover' source={images.Ban3} style={styles.ban2Style} />

        <View style={styles.socialSection}>
          <View style={styles.socialItem}>
            <Entypo name="facebook-with-circle" size={hp(5)} color="#595859" />
            <Text style={styles.socialTxt}>Facebook</Text>
          </View>
          <View style={styles.socialItem}>
            <Entypo name="twitter-with-circle" size={hp(5)} color="#9e9e9e" />
            <Text style={styles.socialTxt}>Twitter</Text>
          </View>
          <View style={styles.socialItem}>
            <Entypo name="youtube-with-circle" size={hp(5)} color="#363636" />
            <Text style={styles.socialTxt}>Youtube</Text>
          </View>
          <View style={styles.socialItem}>
            <Entypo name="linkedin-with-circle" size={hp(5)} color="#626262" />
            <Text style={styles.socialTxt}>Linkedin</Text>
          </View>
          <View style={styles.socialItem}>
            <FontAwesome name="telegram" size={hp(5)} color="#a0a0a0" />
            <Text style={styles.socialTxt}>Telegram</Text>
          </View>
        </View>

        <View style={styles.socialSection}>
          <Text style={styles.devTxt}>Developed with  </Text>
          <FastImage source={images.Red_Heart} style={{ height: hp(2), width: hp(2) }} />
        </View>
        <Text style={styles.rightsTxt}>{"All copyrights reserved by \n@company "}</Text>

      </ScrollView>

    </View>
  )
}
