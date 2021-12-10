import React from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {Header} from '../components';
import {AppStyles, Colors, hp} from '../utility';

const Home = ({navigation}) => {
  const onRighPress = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={AppStyles.container}>
      <Header
        rightIcon="cart"
        drawer
        onRightPress={onRighPress}
        title="Robot Market"
      />
    </View>
  );
};
export default Home;
