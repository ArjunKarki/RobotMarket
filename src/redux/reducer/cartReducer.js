import {ADD_TO_CART} from '../const';

const initialState = {
  products: [],
  //other states here
};

export default CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let {products} = action.payload;
      return {
        products,
      };
    default:
      return state;
  }
};
