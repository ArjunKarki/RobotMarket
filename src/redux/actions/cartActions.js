import {hp} from '../../utility';
import {
  ADD_TO_CART,
} from '../const';

export const AddtoCart = newProduct => (dispatch, getState) => {
  const {
    carts: {products},
  } = getState();

  let isExist = products.some(cart => cart.id == newProduct.id); // check if already in cart

  if (!isExist && products.length >= 5) {
    hp.showAlert('Maximum 5 different robots only can buy');
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