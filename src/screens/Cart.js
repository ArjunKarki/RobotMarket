import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Header} from '../components';
import {AppStyles} from '../utility';

const Cart = () => {
  const {
    carts: {products},
  } = useSelector(state => state);
  console.log('product', products);
  return (
    <View style={AppStyles.container}>
      <Header title="Cart" />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
