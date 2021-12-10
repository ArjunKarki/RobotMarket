import API from '../../utility/API';
import {FETCH_ROBOTS} from '../const';

export const getRobots = () => dispatch => {
  API.get('/api/robots').then(res => {
    dispatch({
      type: FETCH_ROBOTS,
      payload: res.data.data,
    });
  });
};

