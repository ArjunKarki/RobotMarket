import {FETCH_ROBOTS} from '../const';

const initialState = {
  robots: [],
  filterRobots: [],
};
export default homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROBOTS:
      return {
        robots: action.payload,
        filterRobots: action.payload,
      };
    default:
      return state;
  }
};  
