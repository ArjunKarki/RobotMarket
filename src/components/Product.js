import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AppStyles, Colors, hp} from '../utility';

const Product = ({product, isOutOfStock, onAddToCart}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.productContainer}>
      <View style={styles.imgView}>
        <Image style={AppStyles.image} source={{uri: product.image}} />
      </View>
      <View style={styles.infoView}>
        <Text style={{color: Colors.mediumGray}}>{product.name}</Text>
        <Text
          style={{
            fontSize: 12,
            color: Colors.darkGray,
            marginVertical: 4,
          }}>
          {product.stock} pieces ({product.material})
        </Text>
        <Text style={{color: Colors.mediumGray, fontSize: 12}}>
          Created on {hp.formatDate(product.createdAt)}
        </Text>
        <View style={styles.rowSpace}>
          <Text
            style={{
              color: Colors.darkGray,
              fontWeight: 'bold',
            }}>
            ฿{hp.formatMoney(product.price)}
          </Text>
          <TouchableOpacity
            onPress={onAddToCart}
            disabled={isOutOfStock}
            style={[
              styles.button,
              {backgroundColor: isOutOfStock ? Colors.mediumGray : Colors.primary},
            ]}>
            <Text style={styles.btnText}>
              {isOutOfStock ? 'Out of stock' : 'Add to cart'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    width: hp.width * 0.44,
    marginBottom: 12,
    borderRadius: 5,
    ...AppStyles.boxShadow,
  },
  imgView: {
    borderRadius: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: 130,
    backgroundColor: Colors.lighterGray,
  },
  infoView: {padding: 6, paddingBottom: 8},
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  button: {
    marginRight: -6,
    width: hp.width * 0.23,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 12,
    paddingVertical: 5,
  },
 
});
