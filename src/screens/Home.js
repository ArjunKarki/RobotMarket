import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity style={{}} onPress={() => navigation.navigate('Cart')}>
        <Text>go to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
