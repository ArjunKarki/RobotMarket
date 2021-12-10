import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {FilterButton, Header, Product} from '../components';
import {AppStyles, Colors, hp} from '../utility';
import {useDispatch, useSelector} from 'react-redux';
import {AddtoCart} from '../redux/actions/cartActions';
import {filterRobots, getRobots} from '../redux/actions/homeActions';
const Types = hp.getMaterialTypes();

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {filterRobots: robots} = useSelector(state => state.robots);
  const [type, setType] = useState('All');

  useEffect(() => {
    dispatch(getRobots());
  }, []);

  const onRighPress = () => {
    navigation.navigate('Cart');
  };

  const setTypefilter = type => {
    setType(type);
    dispatch(filterRobots(type));
  };

  const onAddToCart = (item, id) => {
    let product = {
      ...item,
      id,
      quantity: 1,
    };
    dispatch(AddtoCart(product));
  };

  return (
    <View style={AppStyles.container}>
      <Header
        rightIcon="cart"
        drawer
        onRightPress={onRighPress}
        title="Robot Market"
      />
      {robots.length > 0 ? (
        <View style={{flex: 1}}>
          <Text style={styles.label}>Material Types</Text>
          <ScrollView
            style={{flexGrow: 0, paddingHorizontal: 16}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {Types.map((item, index) => {
              let isSelected = item == type;
              return (
                <FilterButton
                  key={index}
                  isSelected={isSelected}
                  label={item}
                  onSelect={() => setTypefilter(item)}
                />
              );
            })}
          </ScrollView>
          <FlatList
            style={{paddingTop: 10}}
            data={robots}
            numColumns={2}
            contentContainerStyle={{paddingBottom: 50}}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingHorizontal: 16,
            }}
            renderItem={({item, index}) => {
              let isOutOfStock = item.stock == 0;
              return (
                <Product
                  isOutOfStock={isOutOfStock}
                  product={item}
                  onAddToCart={() => onAddToCart(item, index)}
                />
              );
            }}
            keyExtractor={(item, index) => index}
            ListFooterComponent={() => {
              return robots?.length > 0 ? (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: Colors.mediumGray}}>End of Result</Text>
                </View>
              ) : null;
            }}
          />
        </View>
      ) : (
        <View style={styles.emptyView}>
          <Text>Please check your server !</Text>
        </View>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 16,
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp.height * 0.35,
  },
});
