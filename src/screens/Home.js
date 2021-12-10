import React, {useEffect} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {Header, Product} from '../components';
import {AppStyles, Colors, hp} from '../utility';
import {useDispatch, useSelector} from 'react-redux';
import {getRobots} from '../redux/actions/homeActions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {filterRobots: robots} = useSelector(state => state.robots);

  useEffect(() => {
    dispatch(getRobots());
  }, []);

  const onRighPress = () => {
    navigation.navigate('Cart');
  };

  const onAddToCart = (item, id) => {};

  return (
    <View style={AppStyles.container}>
      <Header
        rightIcon="cart"
        drawer
        onRightPress={onRighPress}
        title="Robot Market"
      />
      <View style={{flex: 1}}>
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
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({});
