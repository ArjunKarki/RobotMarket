import {hp} from '../../utility';
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../const';

export const AddtoCart = newProduct => (dispatch, getState) => {
  const {
    carts: {products},
  } = getState();

  let isExist = products.some(cart => cart.id == newProduct.id); // check if selected product already in cart

  if (!isExist && products.length >= 5) {
    hp.showAlert('Maximum 5 different robots only can add to cart.');
    return;
  }

  if (!isExist) {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        products: [...products, newProduct],
      },
    });
  }
};

export const RemoveFromCart = product => (dispatch, getState) => {
  const {
    carts: {products},
  } = getState();

  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      products: products.filter(item => item.id != product.id),
    },
  });
};

export const IncreaseQuantity = product => (dispatch, getState) => {
  const {
    carts: {products},
  } = getState();
  dispatch({
    type: INCREASE_QUANTITY,
    payload: {
      products: products.map((item, index) =>
        item.id == product.id
          ? {...item, quantity: item.quantity + 1}
          : {...item},
      ),
    },
  });
};

export const DecreaseQunatity = product => (dispatch, getState) => {
  const {
    carts: {products},
  } = getState();
  dispatch({
    type: DECREASE_QUANTITY,
    payload: {
      products: products.map((item, index) =>
        item.id == product.id
          ? {...item, quantity: item.quantity - 1}
          : {...item},
      ),
    },
  });
};
