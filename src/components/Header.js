//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import {Colors, AppStyles} from '../utility';
import {useNavigation} from '@react-navigation/native';

const ICON_SIZE = 24;
// create a component
const Header = ({
  drawer,
  leftIcon = drawer
    ? 'reorder-three-outline'
    : Platform.OS === 'ios'
    ? 'chevron-back'
    : 'ios-arrow-back',
  title,
  onLeftPress,
  rightIcon,
  onRightPress,
  style,
  titleStyle,
  iconColor,
}) => {
  const navigation = useNavigation();
  onLeftPress = () => (drawer ? null : navigation.goBack());

  return (
    <View style={[AppStyles.header, AppStyles.boxShadow, style]}>
      {leftIcon ? (
        <TouchableOpacity activeOpacity={0.7} onPress={onLeftPress}>
          <IIcon color={iconColor} size={ICON_SIZE} name={leftIcon} />
        </TouchableOpacity>
      ) : (
        <IIcon
          size={ICON_SIZE}
          name={leftIcon}
          style={[{color: 'transparent'}]}
        />
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity activeOpacity={0.7} onPress={onRightPress}>
          <IIcon size={ICON_SIZE} style={{width: 36}} name={rightIcon} />
          <View style={styles.budge}>
            <Text style={{color: 'white', fontSize: 12}}>0</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <IIcon
            size={ICON_SIZE}
            name="ios-arrow-back"
            style={[{color: 'transparent'}]}
          />
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
  budge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: Colors.badge,
    justifyContent: 'center',
    alignItems: 'center',
    right: -2,
    top: -6,
  },
});

//make this component available to the app
export default Header;
