import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './src/redux/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
