import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header} from '../components';
import {AppStyles, Colors, hp} from '../utility';
import IIcon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {
  DecreaseQunatity,
  IncreaseQuantity,
  RemoveFromCart,
} from '../redux/actions/cartActions';
const IMG_SIZE = 90;

const Cart = ({}) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    carts: {products},
  } = useSelector(state => state);
  console.log(products);
  useEffect(() => {
    let amount = 0;
    products.map((product, index) => {
      amount += Number(product.quantity) * Number(product.price);
    });
    setTotalAmount(amount.toFixed(2));
  }, [products]);

  const onRemoveFromCart = product => {
    dispatch(RemoveFromCart(product));
  };

  const onIncreaseQty = product => {
    if (product.quantity >= product.stock) {
      hp.showAlert(`Only ${product.stock} item in stock.`);
      return;
    }
    dispatch(IncreaseQuantity(product));
  };

  const onDecreaseQty = product => {
    if (product.quantity <= 1) return;
    dispatch(DecreaseQunatity(product));
  };

  return (
    <View style={AppStyles.container}>
      <Header title="Cart" />
      {products?.length > 0 ? (
        <View style={{flex: 1}}>
          <Text style={styles.label}>{products.length} items available</Text>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 16,
              flex: 1,
              paddingTop: 10,
            }}>
            {products.map((item, index) => {
              return (
                <TouchableOpacity
                  disabled
                  activeOpacity={0.5}
                  key={index}
                  style={styles.productView}>
                  <View style={styles.imgView}>
                    <Image source={{uri: item.image}} style={AppStyles.image} />
                  </View>
                  <View style={styles.infoView}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.type}>Made with {item.material}</Text>
                    <Text style={styles.price}>
                      ฿ {hp.formatMoney(item.price)}
                    </Text>
                  </View>
                  <View style={styles.actionView}>
                    <TouchableOpacity onPress={() => onRemoveFromCart(item)}>
                      <IIcon
                        size={30}
                        color={Colors.darkGray}
                        name="close-circle-outline"
                      />
                    </TouchableOpacity>
                    <View style={styles.btnRow}>
                      <TouchableOpacity
                        disabled={item.quantity == 1}
                        onPress={() => onDecreaseQty(item)}
                        style={styles.btn}>
                        <IIcon style={{padding: 5}} name="remove-outline" />
                      </TouchableOpacity>
                      <Text style={{paddingHorizontal: 6}}>
                        {item.quantity}
                      </Text>
                      <TouchableOpacity
                        onPress={() => onIncreaseQty(item)}
                        style={styles.btn}>
                        <IIcon style={{padding: 5}} name="add" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            <View style={styles.rowSpace}>
              <Text style={[styles.labelTxt, {fontWeight: '500'}]}>Total:</Text>
              <Text style={[styles.labelTxt, {fontWeight: 'bold'}]}>
                ฿ {hp.formatMoney(totalAmount)}
              </Text>
            </View>
            <TouchableOpacity style={styles.checkOutBtn}>
              <Text style={styles.btnText}>Checkout</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyView}>
          <Text>Cart is Empty</Text>
        </View>
      )}
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: Colors.darkGray,
    paddingHorizontal: 16,
  },
  productView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 14,
    ...AppStyles.boxShadow,
  },
  imgView: {
    width: IMG_SIZE,
    height: IMG_SIZE,
    backgroundColor: Colors.lighterGray,
    borderRadius: 5,
  },
  infoView: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGray,
  },
  type: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 10,
    color: Colors.mediumGray,
  },
  price: {
    color: Colors.darkGray,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  actionView: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    padding: 6,
  },
  btnRow: {flexDirection: 'row', alignItems: 'center'},
  btn: {
    backgroundColor: Colors.grayBackground,
    borderRadius: 20,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  labelTxt: {
    fontSize: 16,
    color: Colors.darkGray,
  },
  checkOutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    height: 40,
  },
  btnText: {fontWeight: 'bold', color: 'white', fontSize: 16},
  emptyView: {flex: 1, alignItems: 'center', marginTop: hp.height * 0.35},
});
