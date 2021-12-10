import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../const';

const initialState = {
  products: [],
  //other states here
};

export default CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case INCREASE_QUANTITY:
    case DECREASE_QUANTITY:
      let {products} = action.payload;
      return {
        products,
      };
    default:
      return state;
  }
};
